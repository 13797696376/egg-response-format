'use strict';

const mock = require('egg-mock');

describe('test/response-format.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/response-format-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, responseFormat')
      .expect(200);
  });
});
