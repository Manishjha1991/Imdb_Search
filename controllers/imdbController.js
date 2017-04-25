
const request = require('request');
const omdb = require('omdb');
const imdb = require('imdb');

var moviesList =(req, res) => {
  let moviesname =req.body.moviesname;
  omdb.search(moviesname, function(err, movies) {
    if(err) {
        return console.error(err);
    }
    if(movies.length < 1) {
        res.send('No movies were found!');
    }else {
        res.send(movies);
    }
    moviesname =null;
  });
};


var moviesfullList = (req, res) => {
  let titleCode =req.body.keycode;
  omdb.get(req.body.keycode,true, function(err, movie) {
      if(err) {
          return console.error(err);
      }
      if(!movie) {
          res.send('No movies were found!');
      }else{
          res.send(movie);
      }
    });
    titleCode =null;
};

module.exports = {
  moviesfullList:moviesfullList,
  moviesList:moviesList
};
