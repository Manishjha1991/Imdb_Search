const express = require('express');
const router = express.Router();
const path = require('path');


/*******************************************All API's  **********************************/
/* Home Controller APIs */
const imdbObjAPI = require('../controllers/imdbController.js');

router.post('/moviesList', imdbObjAPI.moviesList);
router.post('/moviesfullList', imdbObjAPI.moviesfullList);


/*******************************************All Views **********************************/
router.get('/', function (req, res) {
  res.sendFile(path.resolve('./views/search.html'));
});

/******************Defult missmatched route for any request***********************************/
router.use(function (req, res) {
  res.sendFile(path.resolve('./views/search.html'));
});
module.exports = router;
