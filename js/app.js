var app = angular.module("myApp", ['ngRoute', 'LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('Nune-multiview');
});
 
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/first', {
            templateUrl: 'templates/first.html',
            controller: 'MainController'
        })
    
        .when('/second', {
            templateUrl: 'templates/second.html',
            controller: 'SecondController'
        })
    
        .when('/third', {
            templateUrl: 'templates/third.html',
            controller: 'ThirdController'
        })
        .otherwise({
            redirectTo: '/first'
        });
}]);

    app.controller('MainController', ['$scope', 'localStorageService', function($scope, localStorageService ) {
        
       //initialize my first todo list, if there is items in localstorage get it or initialize empty array.
        if(localStorageService.get('list1') == null)
        {
          $scope.todos= [];  
        }
        else
        {
           $scope.todos = localStorageService.get('list1'); 
        }
        
      $scope.text = '';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.todos.push(this.text);
          $scope.text = '';
          localStorageService.set('list1', $scope.todos);
        }
      };
        
        $scope.remove = function(x){
        $scope.todos.splice(x, 1);
            
        };  
}]);

app.controller('SecondController', ['$scope','localStorageService', function($scope, localStorageService) {
     if(localStorageService.get('list2') == null)
        {
          $scope.todos= [];  
        }
        else
        {
           $scope.todos = localStorageService.get('list2'); 
        }
        
      $scope.text = '';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.todos.push(this.text);
          $scope.text = '';
          localStorageService.set('list2', $scope.todos);
        }
      };
        
        $scope.remove = function(x){
        $scope.todos.splice(x, 1);
            
        };  
}]);

app.controller('ThirdController', function($scope, $routeParams, localStorageService){
   if(localStorageService.get('list3') == null)
        {
          $scope.todos= [];  
        }
        else
        {
           $scope.todos = localStorageService.get('list3'); 
        }
        
      $scope.text = '';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.todos.push(this.text);
          $scope.text = '';
          localStorageService.set('list3', $scope.todos);
        }
      };
        
        $scope.remove = function(x){
        $scope.todos.splice(x, 1);
            
        };    
});



