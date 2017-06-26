const assert = require('assert');
const app = require('../../src/app');

describe('\'customTactic\' service', () => {
  it('registered the service', () => {
    const service = app.service('custom-tactic');

    assert.ok(service, 'Registered the service');
  });
});
