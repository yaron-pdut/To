// Filename: src/main.test.ts
import request from 'supertest';
import express from 'express';
import { expect } from 'chai';

// Re-create the app for testing (copy from main.ts)
const app = express();
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