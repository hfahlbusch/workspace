import { Request, Response } from 'express';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());

const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBldGVyIn0.3UAFVZ-vbu9HtwjXnU2UDxwGC-oxBYiJ0sARLXqRpP8';

app.post('/api/login', (req: Request, res: Response) => {
  if (req.body && req.body.username === 'peter' && req.body.password === 'fancy-pw') {
    res.json({token: jwt});
  }
  res.status(401).end();
});

app.get('/api/auth', (req: Request, res: Response) => {
  if (req.header('authorization')) {
    const token = req.header('authorization').split(' ')[1];
    if (token === jwt) {
      res.status(200).end();
    }
  }
  res.status(401).end();
});

const port = 3000;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});