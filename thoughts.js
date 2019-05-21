const fs = require('fs');

const getThoughts = () => {
  return "These are some of my thoughts so far...";
}

const addThought = (heading, body) => {
  const thoughts = loadExistingThoughts()
  const redundantThoughts = thoughts.filter((thought) => {
    return thought.heading === heading
  })
  if(redundantThoughts.length === 0) {
    thoughts.push({
      heading: heading,
      body: body
    })
    saveThoughts(thoughts);
    console.log('Original thought added')
  } else {
    console.log('That\'s not an original thought!')
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

module.exports = {
  getThoughts: getThoughts,
  addThought: addThought
};
