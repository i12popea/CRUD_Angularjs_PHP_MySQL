var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {

  $routeProvider.when('/listar', {

    templateUrl: "listar.html",

    controller: "ListarController"

  });

  $routeProvider.when('/insertar', {

    templateUrl: "insertar.html",

    controller: "InsertarController"

  });

  $routeProvider.otherwise({

    redirectTo: '/'

  });

}]);

app.controller("ListarController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  $http.get("select_personas.php")
  .success(function(data){
    $scope.data = data;
  })
  .error(function() {
    $scope.data = "error in fetching data";
  });

  $scope.deleteInfo = function(info){
    $http.post("delete_personas.php", {"del_id":info.id})
    .success(function(data){
      $location.path("#/listar");
    })
    .error(function() {
      
    });
  }

  $scope.editInfo = function(info){
    $scope.currentUser = info;
    //$scope.currentUser.id = info.id;
    //$scope.currentUser.nombre = info.nombre;
    //$scope.currentUser.nif = info.nif;
    //$scope.currentUser = {"id":"nada"};
//alert($scope.currentUser.id);
  }

  $scope.updateInfo = function(info){
    $http.post("update_personas.php", {"id":info.id, "nombre":info.nombre,"nif":info.nif})
    .success(function(data){
      $location.path("#/listar");
    })
    .error(function() {
      
    });
  }
}]);

app.controller("InsertarController", ["$scope", "$http", "$location", function($scope, $http, $location) {

$scope.insertInfo = function(info){
  $http.post("insert_personas.php", {"nombre":info.nombre,"nif":info.nif})
  .success(function(data){
    $location.path("#/listar");
  })
  .error(function() {
    
  });
}
}]);