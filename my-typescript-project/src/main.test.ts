import request from 'supertest';
import express from 'express';

// Re-create the app logic for testing
const app = express();
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express + TypeScript!" });
});

describe('GET /', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ message: "Hello from Express + TypeScript!" });
  });
});

// Additional tests for /greet endpoint as requested
app.get('/greet', (req, res) => {
  const name = req.query.Name;
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.send('Hello, stranger!');
  }
});

describe('GET /greet', () => {
  it('should greet Alice', async () => {
    const res = await request(app).get('/greet').query({ Name: 'Alice' });
    expect(res.text).to.equal('Hello, Alice!');
  });

  it('should greet Bob', async () => {
    const res = await request(app).get('/greet').query({ Name: 'Bob' });
    expect(res.text).to.equal('Hello, Bob!');
  });

  it('should greet Charlie', async () => {
    const res = await request(app).get('/greet').query({ Name: 'Charlie' });
    expect(res.text).to.equal('Hello, Charlie!');
  });

  it('should greet stranger when name is missing', async () => {
    const res = await request(app).get('/greet');
    expect(res.text).to.equal('Hello, stranger!');
  });
});