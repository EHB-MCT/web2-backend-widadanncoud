const express = require('express') //om express te gebruiken
const {
    MongoClient
} = require('mongodb');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express() //nieuwe instantie van express is gestart, om zaken uit te voeren op de express instantie


const port = process.env.PORT || 4000 //definiëren welke port the backend mag openen om te kunnen gebruiken
const username = "admin"
const password = "admin"


app.use(express.static('public')) //folder where we get data is going to be called public
app.use(bodyParser.json());
app.use(cors())
bodyParser.urlencoded({
    extended: false
});

//Create the mongo client use
const uri = `mongodb+srv://${username}:${password}@cluster0.hsfsz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



//CRUD FUNCTIONALITY

app.get('/', (req, res) => {
    res.status(300).redirect('info.html');
})



//Return all searchcriteria from database
app.get('/searchCriterias', async (req, res) => {
    try {
        await client.connect(); //connect to the database

        const db = client.db("web2CP"); // Use the searchCriteria "web2CP"
        const collection = db.collection("searchCriteria");

        const data = await collection.find({}).toArray(); // Find document

        console.log(data); // Print to the console
        res.status(200).send(data)

    } catch (err) { //catch an error
        console.log(err.stack);
    } finally {
        await client.close();
    }
});





//Save a searchcriteria in database
app.post('/saveSearchCriteria', async (req, res) => {
    console.log("POST /saveSearchCriteria called");
    console.log(req.body);

    if (!req.body.input || !req.body.diet || !req.body.cuisine || !req.body.meal) {
        res.status(400).json({
            message: "You forgot to fill one or multipple cases"
        })
        return;
    }

    try {
        await client.connect(); //connect to the database

        const db = client.db("web2CP"); // Use the searchCriteria "web2CP"
        const collection = db.collection("searchCriteria");

        const sc = await collection.findOne({
            input: req.body.input,
            diet: req.body.diet,
            cuisine: req.body.cuisine,
            meal: req.body.meal,
            user_id: req.body.user_id
        });

        if (sc) {
            res.status(400).json({
                message: `Bad request: searchcriteria already exists with ${req.body.input} ${req.body.diet} ${req.body.cuisine} ${req.body.meal} `
            });
            return;
        }

        let newSearchCriteria = {
            "input": req.body.input,
            "diet": req.body.diet,
            "cuisine": req.body.cuisine,
            "meal": req.body.meal,
            'user_id': req.body.user_id
        };

        let insertnewSC = await collection.insertOne(newSearchCriteria); //add new searchcritearia in database

        console.log(insertnewSC);
        res.status(200).json(insertnewSC)

    } catch (err) { //catch an error
        console.log(err.stack);
    } finally {
        await client.close();
    }

    console.log('body', req.body);
});





//Delete a searchcriteria
app.delete('/challenges/:id', async (req, res) => {
    response.send('DELETE OK');
  });


app.listen(port, () => {
    console.log(`Server listening at: http://localhost:${port}`);
})