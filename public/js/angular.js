var app = angular.module('myApp', [])
.config(function($sceDelegateProvider) {
   $sceDelegateProvider.resourceUrlWhitelist([
     'self',
     '*://www.youtube.com/**'
   ]);
 });
app.controller('myCtrl', function($scope,$http) {
$scope.myMovieDetails ="";
$scope.keyUpsearch= function(keycode){
$scope.data.keycode=keycode;
if(keycode.length >0)
{
  $http({
        url: 'http://localhost:3000/moviesList',
        method: 'POST',
        data: $scope.data
    }).then(function (httpResponse) {
        $scope.myMovie = httpResponse.data;
    })
}
else
{
  $scope.data.moviesname = "";
  $scope.myMovie ="";
  $scope.myMovieDetails="";
  $scope.url ="";

}
}
$scope.submit= function(keycode,years){
$scope.data.keycode=keycode;
$scope.data.years=years;
$http({
      url: 'http://localhost:3000/moviesfullList',
      method: 'POST',
      data: $scope.data
  }).then(function (httpResponse) {
      $scope.myMovieDetails = httpResponse.data;

      $http({
            url: 'http://api.themoviedb.org/3/movie/'+httpResponse.data.imdb.id+'/videos?api_key=0b21db9dd71b04fdb863111e1ef9a56d',
            method: 'get',
            data: $scope.data
        }).then(function (httpResponse) {

          if(httpResponse.data.results[0] !==undefined)
          {
            $scope.video = {
              youtubeid: httpResponse.data.results[0].key
            }
            $scope.getUrl = function (id) {
              return '//www.youtube.com/embed/'+id+'?rel=0'
            }
            $scope.url = $scope.getUrl(httpResponse.data.results[0].key)
          }
          else
          {
            $scope.url ="";
          }

      })
  })
 }





});
