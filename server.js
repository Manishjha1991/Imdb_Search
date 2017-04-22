var fs = require('fs');
var express = require('express')
, app = express()
, http = require('http').createServer(app)
, io = require('socket.io').listen(http)
, db = require('mysql')
, bodyParser = require("body-parser")
var router = express.Router();
var request = require('request');

var omdb = require('omdb');
var imdb = require('imdb');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/search.html');
});

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/views/MoviesList.html');
});


app.post('/moviesList', (req, res) => {
  var moviesname =req.body.moviesname;
  omdb.search(moviesname, function(err, movies) {
    if(err) {
            // res.send(err);
        //return console.error(err);
    }

    if(movies.length < 1) {
        res.send('No movies were found!');
        //return console.log('No movies were found!');
    }
    else {
      res.send(movies);
    }


});
})

app.post('/moviesfullList', (req, res) => {

  var titleCode =req.body.keycode;
  var years = req.body.years;

  omdb.get(req.body.keycode,true, function(err, movie) {
      if(err) {
          return console.error(err);
      }

      if(!movie) {
          res.send('No movies were found!');
          // return console.log('Movie not found!');
      }
      else
      {
          res.send(movie);

      }

      // console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
      // console.log(movie.plot);

      // Saw (2004) 7.6/10
      // Two men wake up at opposite sides of a dirty, disused bathroom, chained
      // by their ankles to pipes. Between them lies...
  });

})
http.listen(3000);
