const app = require('../backend/app');
const request = require('supertest');

describe('testing /', () => {
  it('should respond thats good', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(JSON.stringify(res.body)).toBe('{"testing":"good"}')
  });
});

describe('testing /api/post', () => {
  it('should respond thats good', async () => {
    const res = await request(app).get('/api/post');
    expect(res.status).toBe(200);
  });
});