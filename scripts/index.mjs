import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import fs from 'fs-extra';
import lodash from 'lodash/fp';
const { flow, cond, map, filter, pickBy, keys, size, eq, isEmpty, startsWith, values, head, add, join, camelCase, upperFirst, T, __ } = lodash;
const pascalCase = flow(camelCase, upperFirst);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.on('uncaughtException', err => {
  console.log(`\n${chalk.red(err)}\n`);
  process.exit(1);
});

const targetDir = path.resolve(__dirname, '..', process.argv[2]);
const indexPath = path.resolve(targetDir, 'index.js');
const mode = process.argv[3] || 'js';

const omitExt = new Set(['js']);

const { types, mapper } =
  flow(
    pickBy((_, key) => startsWith(mode, key)),
    cond([
      [flow(size, eq(1)), flow(values, head)],
      [isEmpty, () => { throw new Error(`unknown mode: '${mode}'`); }],
      [T, m => { throw new Error(`ambiguous mode: '${mode}' (matches '${join(`', '`, keys(m))}')`); }]
    ])
  )({
    js: {
      types: ['js'],
      mapper: map(([base, file]) =>
        `export { default as ${camelCase(base)} } from './${file}';`
      )
    },
    components: {
      types: ['js', 'svg'],
      mapper: map(([base, file]) =>
        `export { default as ${pascalCase(base)} } from './${file}';`
      )
    },
    fonts: {
      types: ['woff', 'woff2'],
      mapper: map(([base, file]) =>
        `export { default as ${camelCase(base)} } from './${file}';`
      )
    },
    reducers: {
      types: ['js'],
      mapper: files => [].concat(
        `import { combineReducers } from 'redux';`,
        map(([base, file]) => `import ${camelCase(base)} from './${file}';`, files),
        ``,
        `export default combineReducers({`,
        flow(map(([base]) => `  ${camelCase(base)}`), join(`,\n`))(files),
        `});`
      )
    },
    epics: {
      types: ['js'],
      mapper: files => [].concat(
        `import { combineEpics } from 'redux-observable';`,
        map(([base, file]) => `import ${camelCase(base)} from './${file}';`, files),
        ``,
        `export default combineEpics(`,
        flow(map(([base]) => `  ${camelCase(base)}`), join(`,\n`))(files),
        `);`
      )
    },
    barrel: {
      types: ['js'],
      mapper: map(([, file]) =>
        `export * from './${file}';`
      )
    },
  });

console.log(`Building ${chalk.magenta('index.js')} for ${chalk.yellow(targetDir)}:`);

const index = flow(
  () => fs.readdirSync(targetDir),
  filter(f =>
    !(f.startsWith('.') || f.match(`^internal(\..+)?$`)) && (
      f.match(`^(?!index).*(?<!spec)\.(${join('|', types)})$`) ||
      fs.existsSync(path.join(targetDir, f, 'index.js'))
    )
  ),
  map(f => {
    const ext = path.extname(f);
    const base = path.basename(f, ext);
    const file = omitExt.has(ext.replace(/^./, '')) ? base : base + ext;

    return [base, file];
  }),
  mapper,
  join('\n'),
  add(__, '\n')
)();

console.log(`\n${index}`);

fs.writeFileSync(indexPath, index);

console.log(chalk.green(`Wrote '${indexPath}'.`));
