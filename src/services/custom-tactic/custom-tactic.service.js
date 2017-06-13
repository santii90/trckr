// Initializes the `customTactic` service on path `/custom-tactic`
const createService = require('feathers-mongodb');
const hooks = require('./custom-tactic.hooks');
const filters = require('./custom-tactic.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/custom-tactic', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('custom-tactic');

  mongoClient.then(db => {
    service.Model = db.collection('custom-tactic');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
