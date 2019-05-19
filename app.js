const chalk = require('chalk');
const yargs = require('yargs');
const getThoughts = require('./thoughts.js');

const command = process.argv[2];
console.log(process.argv);
console.log(yargs.argv);

switch(command) {
  case 'add':
    console.log('Adding a thought');
    break;
  case 'remove':
    console.log('Removing a thought');
    break;
  default:
    console.log('Try again');
    break;
}
