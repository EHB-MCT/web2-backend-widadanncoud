//om express te gebruiken
const express = require('express')
const {
  MongoClient
} = require('mongodb');
const bodyParser =  require ('body-parser')
//nieuwe instantie van express is gestart, om zaken uit te voeren op de express instantie
const app = express()

//definiëren welke port the backend mag openen om te kunnen gebruiken
const port = process.env.PORT || 4000
const username = "admin"
const password = "admin"

//folder where we get data is going to be called public
app.use(express.static('public')) 
app.use(bodyParser.json())


//Create the mongo client use
const uri = `mongodb+srv://${username}:${password}@cluster0.hsfsz.mongodb.net/web2CP?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});




//CRUD FUNCTIONALITY

app.get('/', (req, res)=> {
    //res.send("hallo world");
    res.status(300).redirect('info.html');
})

app.get('/mct', (req, res)=> {
    res.send("hall");
})

//Return all challenges from database
app.get('/challenges', async (req, res) => {
  try {
    //connect to the database
    await client.connect();
    const db = client.db("web2CP");
    // Use the searchCriteria "web2CP"
    const collection = db.collection("searchCriteria");
    // Find document
    const data = await collection.find({}).toArray();

    // Print to the console
    console.log(data);

    res.status(200).send(data)
  } catch (err) { //catch an error
    console.log(err.stack);
  } finally {
    await client.close();
  }
});

app.post('/test', (req, res)=> {
    const body = req.body;
    console.log(body)
    res.sendStatus(200)
})

app.listen(port,()=> {
 console.log(`Server listening at: http://localhost:${port}`);
})

