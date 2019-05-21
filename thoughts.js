const fs = require('fs');

const getThoughts = () => {
  return "These are some of my thoughts so far...";
}

const addThought = (heading, body) => {
  const thoughts = loadExistingThoughts()
  thoughts.push({
    heading: heading,
    body: body
  })
  console.log(thoughts);
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
