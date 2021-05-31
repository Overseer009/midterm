// load .env data into process.env
require("dotenv").config();
// Web server config
const express = require("express");
const request = require("request")
const router = express.Router();


//------Google Places API GET-----//
router.get("/restaurants", (req, res) => {
  const userInput = req.query.input;
  const endpointRestaurants = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${userInput}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${process.env.keyRestaurants}`

  request(endpointRestaurants, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.json(body)
  });
});

//------Google Books API GET-----//
router.get("/books", (req, res) => {
  const userInput = req.query.input;
  const endpointBooks = `https://www.googleapis.com/books/v1/volumes?q=${userInput}&key=${process.env.keyBooks}`

  request(endpointBooks, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.json(body)
  });
});

//------Open Movie Database API GET-----//
router.get("/movies", (req, res) => {
  const userInput = req.query.input;
  const endpointMovies = `http://www.omdbapi.com/?apikey=${process.env.keyMovies}&t=${userInput}`

  request(endpointMovies, function (error, response, body){
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.json(body)
  });
});

  //------Rainforest Products API GET-----//
  router.get("/products", (req, res) => {
    const userInput = req.query.input;
    const endpointProducts = `https://api.rainforestapi.com/request?api_key=${process.env.keyProducts}&type=search&amazon_domain=amazon.com&search_term=${userInput}`

    request(endpointProducts, function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      res.json(body)
    });
  });

module.exports = router;
