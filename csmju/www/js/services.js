angular.module('app.services', [])

.factory('userService', [function(){

}])

.service('userServices', ['$http',function($http){
  var URL="http://172.17.20.191:1323";
  var users = [];
      return {
        getUsers:function(){
        return $http.get(URL+"/users")
        .then(function(response){
              users = response;
              return users;
        });
      },
      getUsersById:function(id){
        alert(id);
      return $http.get(URL+"/users/"+id)
      .then(function(response){
            users = response;
            return users;
      });
    },
      saveUser:function(user){
      return $http.post(URL+"/users",user)
      .then(function(response){
            users = response;
            return users;
      });
    },
      }
}]);
