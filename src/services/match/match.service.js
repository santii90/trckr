// Initializes the `match` service on path `/match`
const createService = require('feathers-mongodb');
const hooks = require('./match.hooks');
const filters = require('./match.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/match', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('match');

  mongoClient.then(db => {
    service.Model = db.collection('match');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
