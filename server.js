//om express te gebruiken
const express = require('express');

//nieuwe instantie van express is gestart, om zaken uit te voeren op de express instantie
const app = express();

//definiëren welke port the backend mag openen om te kunnen gebruiken
const port = 3000;

app.get('/', (req, res)=> {
    res.send("hallo world");
})

app.get('/mct', (req, res)=> {
    res.send("hall");
})
app.post('/test', (req, res)=> {
    const body = req.body;
    console.log(body)
    res.sendStatus(200)
})


app.listen(port,()=> {
 console.log(`Server listening at: http://localhost:${port}`);
})

