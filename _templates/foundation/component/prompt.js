module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "What's the name of your component?",
  },
  {
    type: "select",
    choices: ["containers","embed", "forms", "informational", "inline-text", "links","listing","logo","modules","navigaton","sections","teasers","utils"],
    name: 'type',
    message: "What's the type of your component?",
  },
  {
    type: 'toggle',
    name: 'css',
    message: "Include CSS?",
  }
]



