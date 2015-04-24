'use strict';

angular.module('ToDoApp1')
.factory('Task', ['$rootScope','$firebaseArray', function($rootScope, $firebaseArray){

  var fbTasks;
  var afTasks;



  function init(){
     fbTasks = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/tasks');
     afTasks = $firebaseArray(fbTasks);

   }

      function add(task){
        init();
        return  afTasks.$add(task);
      }
      return {add: add};
  }]);
