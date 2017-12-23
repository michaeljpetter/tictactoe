'use strict';

process.on('uncaughtException', err => {
  console.log(`\n${chalk.red(err)}\n`);
  process.exit(1);
});

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const paths = require('../config/paths');
const camel = require('to-camel-case');

const targetDir = path.resolve(paths.appSrc, process.argv[2]);
const indexPath = path.resolve(targetDir, 'index.js');

console.log(`Building ${chalk.magenta('index.js')} for ${chalk.yellow(targetDir)}:`);

const index = fs
  .readdirSync(targetDir)
  .filter(f => f.match(/^((?!index).)*\.js$/))
  .map(f => path.basename(f, path.extname(f)))
  .map(b => `export { default as ${camel(b)} } from './${b}';`)
  .join('\n');

console.log(`\n${index}`);

fs.writeFileSync(indexPath, index);

console.log(`\n${chalk.green(`Wrote '${indexPath}'.`)}`);
