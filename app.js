const validator = require('validator');
const chalk = require('chalk');

const getThoughts = require('./thoughts.js');

const thoughts = getThoughts();

console.log(chalk.magentaBright.bgWhite.bold(thoughts));
console.log(validator.isURL('ruthnewman.co.uk'));
console.log(chalk.green('Success!'));
