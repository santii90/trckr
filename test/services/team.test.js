const assert = require('assert');
const app = require('../../src/app');

describe('\'team\' service', () => {
  it('registered the service', () => {
    const service = app.service('team');

    assert.ok(service, 'Registered the service');
  });
});
