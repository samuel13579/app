const express = require('express');
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://TestAdmin:Bestpassword135@perryprocesses-tmtzr.mongodb.net/test?retryWrites=true&w=majority';
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
  app.post('/api/login', async(req, res, next) => 
  {
    const {login, password} = req.body;
    const db = client.db();
    // May need to change 'Users', Login:login and Password:password 
    // depending on the collection w/in MongoDB
    const results = await db.collection('Users').find({Login:login, Password:password}).toArray();
    
    var id = -1;
    var firstName = '';
    var lastName = '';

    
    if(results.length > 0){
      id = results[0].UserId;
      fName = results[0].FirstName;
      lName = results[0].LastName;
    }

    //Returns a json with the user information back to the frontend
    var ret = {id:id, firstName:fName, lastName:lName, error:''};
    res.status(200).json(ret);
  });
  res.status(200).send('API Workin\n');
  next();
});
app.listen(5000); // start Node + Express server on port 5000