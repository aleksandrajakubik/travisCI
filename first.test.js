const request = require('supertest')
const app = require('./index.js')

describe('test GET', () => {
    it('should return GET', () => {
      const res = await request(app).get("/");
      expect(res.body.message).toBe('Hello from server!')
    })
});

describe('test POST', () => {
  it('should return POST', () => {
    const res = await request(app).post("/");
    expect(res.body.message).toBe('POST completed')
  })
});

describe('test PUT', () => {
  it('should return PUT', () => {
    const res = await request(app).put("/");
    expect(res.body.message).toBe('PUT done')
  })
});

describe('test DELETE', () => {
  it('should return DELETE', () => {
    const res = await request(app).delete("/");
    expect(res.body.message).toBe('DELETE')
  })
})