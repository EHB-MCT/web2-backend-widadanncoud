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
const uri = `mongodb+srv://${username}:${password}@cluster0.hsfsz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
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
app.get('/searchCriteria', async (req, res) => {
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
    // const body = req.body;
    // console.log(body)
    let example = {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_09b4dbdf0c7244c462a4d2622d88958e",
      "label": "Pasta Frittata Recipe",
      "image": "https://www.edamam.com/web-img/5a5/5a5220b7a65c911a1480502ed0532b5c.jpg",
      "source": "Food Republic",
      "url": "http://www.foodrepublic.com/2012/01/21/pasta-frittata-recipe",
      "shareAs": "http://www.edamam.com/recipe/pasta-frittata-recipe-09b4dbdf0c7244c462a4d2622d88958e/pasta/alcohol-free/balanced/591-722-cal",
      "yield": 2,
      "dietLabels": [
          "Balanced",
          "Low-Sodium"
      ],
      "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
      ],
      "cautions": [],
      "ingredientLines": [
          "2 cups leftover pasta",
          "4 eggs beaten",
          "2 tablespoons butter",
          "1/2 cup whichever cheese the pasta called for"
      ],
      "ingredients": [
          {
              "text": "2 cups leftover pasta",
              "quantity": 2,
              "measure": "cup",
              "food": "pasta",
              "weight": 210,
              "foodCategory": "grains",
              "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
              "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
              "text": "4 eggs beaten",
              "quantity": 4,
              "measure": "<unit>",
              "food": "eggs",
              "weight": 172,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
              "text": "2 tablespoons butter",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "butter",
              "weight": 28.4,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
              "text": "1/2 cup whichever cheese the pasta called for",
              "quantity": 0.5,
              "measure": "cup",
              "food": "pasta",
              "weight": 52.5,
              "foodCategory": "grains",
              "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
              "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
      ],
      "calories": 1423.463,
      "totalWeight": 462.9,
      "totalTime": 0,
      "cuisineType": [
          "italian"
      ],
      "mealType": [
          "lunch/dinner"
      ],
      "dishType": [
          "main course",
          "egg"
      ],
      "totalNutrients": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1423.463,
              "unit": "kcal"
          },
          "FAT": {
              "label": "Fat",
              "quantity": 43.35619,
              "unit": "g"
          },
          "FASAT": {
              "label": "Saturated",
              "quantity": 20.692356999999998,
              "unit": "g"
          },
          "FATRN": {
              "label": "Trans",
              "quantity": 0.9963119999999999,
              "unit": "g"
          },
          "FAMS": {
              "label": "Monounsaturated",
              "quantity": 12.710598999999998,
              "unit": "g"
          },
          "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 5.631632,
              "unit": "g"
          },
          "CHOCDF": {
              "label": "Carbs",
              "quantity": 197.26419000000004,
              "unit": "g"
          },
          "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
          },
          "FIBTG": {
              "label": "Fiber",
              "quantity": 8.4,
              "unit": "g"
          },
          "SUGAR": {
              "label": "Sugars",
              "quantity": 7.66219,
              "unit": "g"
          },
          "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 56.074600000000004,
              "unit": "g"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 700.9,
              "unit": "mg"
          },
          "NA": {
              "label": "Sodium",
              "quantity": 263.11400000000003,
              "unit": "mg"
          },
          "CA": {
              "label": "Calcium",
              "quantity": 158.261,
              "unit": "mg"
          },
          "MG": {
              "label": "Magnesium",
              "quantity": 160.33300000000003,
              "unit": "mg"
          },
          "K": {
              "label": "Potassium",
              "quantity": 829.551,
              "unit": "mg"
          },
          "FE": {
              "label": "Iron",
              "quantity": 6.42818,
              "unit": "mg"
          },
          "ZN": {
              "label": "Zinc",
              "quantity": 5.945609999999999,
              "unit": "mg"
          },
          "P": {
              "label": "Phosphorus",
              "quantity": 843.5010000000001,
              "unit": "mg"
          },
          "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 469.45599999999996,
              "unit": "µg"
          },
          "VITC": {
              "label": "Vitamin C",
              "quantity": 0,
              "unit": "mg"
          },
          "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.30647,
              "unit": "mg"
          },
          "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.953196,
              "unit": "mg"
          },
          "NIA": {
              "label": "Niacin (B3)",
              "quantity": 4.603428,
              "unit": "mg"
          },
          "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.666002,
              "unit": "mg"
          },
          "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 128.942,
              "unit": "µg"
          },
          "FOLFD": {
              "label": "Folate (food)",
              "quantity": 128.942,
              "unit": "µg"
          },
          "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
          },
          "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.57908,
              "unit": "µg"
          },
          "VITD": {
              "label": "Vitamin D",
              "quantity": 3.8659999999999997,
              "unit": "µg"
          },
          "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.75363,
              "unit": "mg"
          },
          "VITK1": {
              "label": "Vitamin K",
              "quantity": 2.7664999999999997,
              "unit": "µg"
          },
          "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
          },
          "WATER": {
              "label": "Water",
              "quantity": 162.06045999999998,
              "unit": "g"
          }
      },
      "totalDaily": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 71.17314999999999,
              "unit": "%"
          },
          "FAT": {
              "label": "Fat",
              "quantity": 66.70183076923077,
              "unit": "%"
          },
          "FASAT": {
              "label": "Saturated",
              "quantity": 103.46178499999999,
              "unit": "%"
          },
          "CHOCDF": {
              "label": "Carbs",
              "quantity": 65.75473000000002,
              "unit": "%"
          },
          "FIBTG": {
              "label": "Fiber",
              "quantity": 33.6,
              "unit": "%"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 112.14920000000001,
              "unit": "%"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 233.63333333333333,
              "unit": "%"
          },
          "NA": {
              "label": "Sodium",
              "quantity": 10.963083333333334,
              "unit": "%"
          },
          "CA": {
              "label": "Calcium",
              "quantity": 15.8261,
              "unit": "%"
          },
          "MG": {
              "label": "Magnesium",
              "quantity": 38.17452380952382,
              "unit": "%"
          },
          "K": {
              "label": "Potassium",
              "quantity": 17.650021276595744,
              "unit": "%"
          },
          "FE": {
              "label": "Iron",
              "quantity": 35.71211111111111,
              "unit": "%"
          },
          "ZN": {
              "label": "Zinc",
              "quantity": 54.050999999999995,
              "unit": "%"
          },
          "P": {
              "label": "Phosphorus",
              "quantity": 120.50014285714286,
              "unit": "%"
          },
          "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 52.16177777777778,
              "unit": "%"
          },
          "VITC": {
              "label": "Vitamin C",
              "quantity": 0,
              "unit": "%"
          },
          "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 25.53916666666667,
              "unit": "%"
          },
          "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 73.32276923076924,
              "unit": "%"
          },
          "NIA": {
              "label": "Niacin (B3)",
              "quantity": 28.771425,
              "unit": "%"
          },
          "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 51.23092307692308,
              "unit": "%"
          },
          "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 32.2355,
              "unit": "%"
          },
          "VITB12": {
              "label": "Vitamin B12",
              "quantity": 65.79500000000002,
              "unit": "%"
          },
          "VITD": {
              "label": "Vitamin D",
              "quantity": 25.77333333333333,
              "unit": "%"
          },
          "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 18.357533333333333,
              "unit": "%"
          },
          "VITK1": {
              "label": "Vitamin K",
              "quantity": 2.3054166666666664,
              "unit": "%"
          }
      },
      "digest": [
          {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 43.35619,
              "hasRDI": true,
              "daily": 66.70183076923077,
              "unit": "g",
              "sub": [
                  {
                      "label": "Saturated",
                      "tag": "FASAT",
                      "schemaOrgTag": "saturatedFatContent",
                      "total": 20.692356999999998,
                      "hasRDI": true,
                      "daily": 103.46178499999999,
                      "unit": "g"
                  },
                  {
                      "label": "Trans",
                      "tag": "FATRN",
                      "schemaOrgTag": "transFatContent",
                      "total": 0.9963119999999999,
                      "hasRDI": false,
                      "daily": 0,
                      "unit": "g"
                  },
                  {
                      "label": "Monounsaturated",
                      "tag": "FAMS",
                      "schemaOrgTag": null,
                      "total": 12.710598999999998,
                      "hasRDI": false,
                      "daily": 0,
                      "unit": "g"
                  },
                  {
                      "label": "Polyunsaturated",
                      "tag": "FAPU",
                      "schemaOrgTag": null,
                      "total": 5.631632,
                      "hasRDI": false,
                      "daily": 0,
                      "unit": "g"
                  }
              ]
          },
          {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 197.26419000000004,
              "hasRDI": true,
              "daily": 65.75473000000002,
              "unit": "g",
              "sub": [
                  {
                      "label": "Carbs (net)",
                      "tag": "CHOCDF.net",
                      "schemaOrgTag": null,
                      "total": 0,
                      "hasRDI": false,
                      "daily": 0,
                      "unit": "g"
                  },
                  {
                      "label": "Fiber",
                      "tag": "FIBTG",
                      "schemaOrgTag": "fiberContent",
                      "total": 8.4,
                      "hasRDI": true,
                      "daily": 33.6,
                      "unit": "g"
                  },
                  {
                      "label": "Sugars",
                      "tag": "SUGAR",
                      "schemaOrgTag": "sugarContent",
                      "total": 7.66219,
                      "hasRDI": false,
                      "daily": 0,
                      "unit": "g"
                  },
                  {
                      "label": "Sugars, added",
                      "tag": "SUGAR.added",
                      "schemaOrgTag": null,
                      "total": 0,
                      "hasRDI": false,
                      "daily": 0,
                      "unit": "g"
                  }
              ]
          },
          {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 56.074600000000004,
              "hasRDI": true,
              "daily": 112.14920000000001,
              "unit": "g"
          },
          {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 700.9,
              "hasRDI": true,
              "daily": 233.63333333333333,
              "unit": "mg"
          },
          {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 263.11400000000003,
              "hasRDI": true,
              "daily": 10.963083333333334,
              "unit": "mg"
          },
          {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 158.261,
              "hasRDI": true,
              "daily": 15.8261,
              "unit": "mg"
          },
          {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 160.33300000000003,
              "hasRDI": true,
              "daily": 38.17452380952382,
              "unit": "mg"
          },
          {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 829.551,
              "hasRDI": true,
              "daily": 17.650021276595744,
              "unit": "mg"
          },
          {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 6.42818,
              "hasRDI": true,
              "daily": 35.71211111111111,
              "unit": "mg"
          },
          {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 5.945609999999999,
              "hasRDI": true,
              "daily": 54.050999999999995,
              "unit": "mg"
          },
          {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 843.5010000000001,
              "hasRDI": true,
              "daily": 120.50014285714286,
              "unit": "mg"
          },
          {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 469.45599999999996,
              "hasRDI": true,
              "daily": 52.16177777777778,
              "unit": "µg"
          },
          {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": true,
              "daily": 0,
              "unit": "mg"
          },
          {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.30647,
              "hasRDI": true,
              "daily": 25.53916666666667,
              "unit": "mg"
          },
          {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.953196,
              "hasRDI": true,
              "daily": 73.32276923076924,
              "unit": "mg"
          },
          {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 4.603428,
              "hasRDI": true,
              "daily": 28.771425,
              "unit": "mg"
          },
          {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.666002,
              "hasRDI": true,
              "daily": 51.23092307692308,
              "unit": "mg"
          },
          {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 128.942,
              "hasRDI": true,
              "daily": 32.2355,
              "unit": "µg"
          },
          {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 128.942,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
          },
          {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
          },
          {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.57908,
              "hasRDI": true,
              "daily": 65.79500000000002,
              "unit": "µg"
          },
          {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 3.8659999999999997,
              "hasRDI": true,
              "daily": 25.77333333333333,
              "unit": "µg"
          },
          {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 2.75363,
              "hasRDI": true,
              "daily": 18.357533333333333,
              "unit": "mg"
          },
          {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 2.7664999999999997,
              "hasRDI": true,
              "daily": 2.3054166666666664,
              "unit": "µg"
          },
          {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
          },
          {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 162.06045999999998,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
          }
      ]
    }

    
    // res.sendStatus(200)
})

app.listen(port,()=> {
 console.log(`Server listening at: http://localhost:${port}`);
})

