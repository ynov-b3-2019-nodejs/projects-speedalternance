const app = require('../backend/app');
const request = require('supertest');

describe('testing /api/post', () => {
  it('should respond thats good', async done => {
    const res = await request(app).get('/api/post');
    expect(res.status).toBe(200);
    done();
  });
});
