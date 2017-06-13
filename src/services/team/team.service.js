// Initializes the `team` service on path `/team`
const createService = require('feathers-mongodb');
const hooks = require('./team.hooks');
const filters = require('./team.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/team', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('team');

  mongoClient.then(db => {
    service.Model = db.collection('team');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
