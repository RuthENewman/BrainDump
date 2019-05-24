const chalk = require('chalk');
const yargs = require('yargs');
const thoughts = require('./thoughts.js');

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'Add a new thought',
  builder: {
    heading: {
      describe: 'Thought heading',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Your thought in detail',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    thoughts.addThought(argv.heading, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a thought from the list',
  builder: {
    heading: {
      describe: 'Thought heading',
      demandOption: true,
      type: 'string'
    },
  },
  handler: (argv) => thoughts.removeThought(argv.heading)
})

yargs.command({
  command: 'list',
  describe: 'Listing all thoughts',
  handler() {
    thoughts.listThoughts()
  }
})

yargs.command({
  command: 'read',
  describe: 'Reading a thought',
  handler() {
    console.log('Reading a thought')
  }
})

yargs.parse();
// console.log(yargs.argv);
