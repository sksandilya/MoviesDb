var mongoose = require('mongoose');
var movieSearch = mongoose.Schema(()=>{
    name:String
    rating:String
})

module.exports = mongoose.model("movies", movieSearch);