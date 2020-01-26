const express = require('express');
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://TestAdmin:Bestpassword135@perryprocesses-tmtzr.mongodb.net/test';
const client = new MongoClient(url);
client.connect();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  res.status(200).send('API Workin\n');
  next();
});
app.listen(5000); // start Node + Express server on port 5000