const server = require('../server');
const request = require('supertest');

// close the server after each test
afterEach(() => {
  server.close();
});
describe('routes: index', () => {
  it('should respond as expected', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('text/html');
  });
});
