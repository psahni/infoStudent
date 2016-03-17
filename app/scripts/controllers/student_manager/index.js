'use strict';
angular.module('infoStudent')
  .controller('IndexController', function ($scope, StudentManager) {  
      
    $scope.loadDetails = function(){  	
        $scope.student_details = StudentManager.query() || [];  	        
        var stats = StudentManager.find_min_max_avg();
        $scope.min_grade = stats.min_grade;
        $scope.max_grade = stats.max_grade;
        $scope.avg_grade = stats.avg_grade;
    };
    
    $scope.loadDetails();
    
});