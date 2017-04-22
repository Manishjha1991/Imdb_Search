var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {

$scope.keyUpsearch= function(keycode){
// console.log(keycode);
// return false;
$scope.data.keycode=keycode;


  $http({
      url: 'http://localhost:3000/moviesList',
      method: 'POST',
      data: $scope.data
  }).then(function (httpResponse) {
      console.log(httpResponse);
          $scope.myMovie = httpResponse.data;
      // console.log('response:', httpResponse);
      //  $window.location.href = '/index.html';

  })
 }
$scope.submit= function(keycode,years){


$scope.data.keycode=keycode;
$scope.data.years=years;

  $http({
      url: 'http://localhost:3000/moviesfullList',
      method: 'POST',
      data: $scope.data
  }).then(function (httpResponse) {
      console.log(httpResponse.data);
          // $scope.myMovie = httpResponse.data;


  })
 }
});
