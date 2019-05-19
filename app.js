const chalk = require('chalk');
const yargs = require('yargs');
const getThoughts = require('./thoughts.js');

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'Add a new thought',
  handler: function() {
    console.log('Adding a new thought')
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a thought from the list',
  handler: function() {
    console.log('Removing that thought from your list')
  }
})

yargs.command({
  command: 'list',
  describe: 'Listing all thoughts',
  handler: function() {
    console.log('Listing out all your thoughts')
  }
})

yargs.command({
  command: 'read',
  describe: 'Reading a thought',
  handler: function() {
    console.log('Reading a thought')
  }
})


console.log(yargs.argv);
