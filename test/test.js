/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// var assert = require('assert');
// var expect  = require("chai").expect;
// var request = require("request");
// var requestURL ="http://localhost:3000";
// var testLongTimeout = 15000;
// var app = require('../app');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

  /*
 * Test the /POST route
 */
 describe('/POST moviesList', () => {
     it('it should not POST a moviesList without movie array field', (done) => {
       let parameters = {
           moviesname: "The Lord of the Rings"
       }
       chai.request(server)
           .post('/moviesList')
           .send(parameters)
           .end((err, res) => {
               res.should.have.status(200);
               res.body.should.be.a('array');
               done();
           });
     });
   });

   describe('/POST moviesfullList', () => {
       it('it should not POST a moviesfullList field', (done) => {
         let parameters = {
             keycode: "tt0120737"
         }
         chai.request(server)
             .post('/moviesfullList')
             .send(parameters)
             .end((err, res) => {
                 res.should.have.status(200);
                 done();
             });
       });
     });
