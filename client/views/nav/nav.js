'use strict';

angular.module('ToDoApp1')
.controller('NavCtrl',['$scope', 'User','$state','$rootScope', function($scope, User,$state,$rootScope){
console.log($scope.afAuth);
  $scope.afAuth.$onAuth(function(data){
    if(data){
        $rootScope.activeUser = data;
      }else{
        $rootScope.activeUser = null;
      }
      $state.go('home');
  });


  $scope.logout = function(){
    User.logout();
  };
}]);
