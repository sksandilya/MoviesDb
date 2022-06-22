var express = require('express');
var router = express.Router();
var movies = require('./Models/movies');

router.get('/movies', async(req, res)=>{
    const imovie = await movies.find();
    res.send(imovie);
})

module.exports = router