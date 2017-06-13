const users = require('./users/users.service.js');
const team = require('./team/team.service.js');
const match = require('./match/match.service.js');
const customTactic = require('./custom-tactic/custom-tactic.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(team);
  app.configure(match);
  app.configure(customTactic);
};
