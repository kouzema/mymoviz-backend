var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

const OWM_API_KEY = "65b384b643a139cb02d7da5882ce7ec1";

router.get("/movies", (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        res.json({result : true, movies : data})
    })

})


module.exports = router;
