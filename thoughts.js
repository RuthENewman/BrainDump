const fs = require('fs');
const chalk = require('chalk');

const addThought = (heading, body) => {
  const thoughts = loadExistingThoughts()
  const redundantThought = thoughts.find(thought => thought.heading === heading)

  console.log(redundantThought)

  if(!redundantThought) {
    thoughts.push({
      heading: heading,
      body: body
    })
    saveThoughts(thoughts);
    console.log(chalk.green.bold('Original thought added'))
  } else {
    console.log(chalk.cyan.bold('That\'s not an original thought!'))
  }

}

const readThought = (heading) => {
  const thoughts = loadExistingThoughts();
  const thought = thoughts.find(thought => thought.heading = heading);
  if(thought) {
    console.log(chalk.black.inverse(thought.heading))
    console.log(chalk.blue.bold(thought.body))
  } else {
    console.log(chalk.red.inverse.bold('No thought found with that heading.'))
  }
}

const saveThoughts = (thoughts) => {
  const dataJSON = JSON.stringify(thoughts);
  fs.writeFileSync('thoughts.json', dataJSON)
}

const loadExistingThoughts = () => {
  try {
    const dataBuffer = fs.readFileSync('thoughts.json')
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

const removeThought = (heading) => {
  const thoughts = loadExistingThoughts();
  const remainingThoughts = thoughts.filter(thought => thought.heading !== heading);
  if(thoughts.length > remainingThoughts.length) {
    console.log(chalk.red.inverse('Thought removed from the list'))
  } else {
      console.log(chalk.red.bold('No thought found with that heading'))
  }
  saveThoughts(remainingThoughts);
}

const listThoughts = () => {
  const thoughts = loadExistingThoughts()

  console.log(chalk.inverse('Your thoughts...'))

  thoughts.forEach(thought => console.log(thought.heading))
}

module.exports = {
  addThought: addThought,
  removeThought: removeThought,
  listThoughts: listThoughts,
  readThought: readThought
};
