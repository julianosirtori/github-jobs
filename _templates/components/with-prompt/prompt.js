// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Qual o nome do component ?',
  },
  {
    type: 'select',
    name: 'type',
    message: 'Qual o tipo do component ?',
    limit: 1,
    choices: ['atoms', 'molecules', 'organisms'],
  },
];
