const fs = require('fs');
const chalk = require('chalk');

const getThoughts = () => {
  return "These are some of my thoughts so far...";
}

const addThought = (heading, body) => {
  const thoughts = loadExistingThoughts()
  const redundantThoughts = thoughts.filter(thought => thought.heading === heading)
  if(redundantThoughts.length === 0) {
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
  getThoughts: getThoughts,
  addThought: addThought,
  removeThought: removeThought,
  listThoughts: listThoughts
};
