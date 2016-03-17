'use strict';
angular.module('infoStudent')
  .controller('NewController', function ($scope, $location, StudentManager) {        
    $scope.submitDetail = function(){          
     if($scope.student_detail_form.$valid){
        StudentManager.create($scope.student_detail);  		 
        $location.path('/');
      } 		   		  
    };    
}); 
