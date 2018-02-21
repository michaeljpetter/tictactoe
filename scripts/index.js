'use strict';

process.on('uncaughtException', err => {
  console.log(`\n${chalk.red(err)}\n`);
  process.exit(1);
});

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const paths = require('../config/paths');
const to = require('to-case');

const targetDir = path.resolve(paths.appSrc, process.argv[2]);
const indexPath = path.resolve(targetDir, 'index.js');

console.log(`Building ${chalk.magenta('index.js')} for ${chalk.yellow(targetDir)}:`);

const types = {
  js: { case: to.camel, omitExt: true },
  svg: { case: to.pascal }
};

const index = fs
  .readdirSync(targetDir)
  .filter(f => f.match(`^((?!index).)*\.(${Object.keys(types).join('|')})$`))
  .map(f => {
    const ext = path.extname(f);
    const base = path.basename(f, ext);
    const type = types[ext.replace(/^./, '')];

    const name = type.case(base);
    const file = type.omitExt ? base : base + ext;

    return `export { default as ${name} } from './${file}';`;
  })
  .join('\n');

console.log(`\n${index}`);

fs.writeFileSync(indexPath, index);

console.log(`\n${chalk.green(`Wrote '${indexPath}'.`)}`);
