angular.module('app.services', [])

.factory('userService', [function(){

}])

.service('userServices', ['$http',function($http){
  var users = [];
      return {
        getUsers:function(){
        return $http.get("http://localhost:1323/users",{ headers: { 'Cache-Control' : 'no-cache' } })
        .then(function(response){
              users = response;
              return users;
        });
      },
      }
}]);
