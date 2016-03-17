angular.module('infoStudent')
        .controller('studentDetailController', function($scope, StudentManager){
                  
            $scope.setEditable = function(){             
              $scope.detail.editstate = true;
            };                   

            $scope.isFail = function(){  			
                return StudentManager.isFailed($scope.detail);  			
            };                                       

            $scope.destroyDetail = function(){
              StudentManager.destroy($scope.elementIndex);    
              $scope.loadDetails();
            };
                    
        })
        .directive('studentDetail', function(){
            return{
                templateUrl: 'views/templates/student_detail.html',
                scope:{
                    elementIndex: '@',
                    detail: '=',
                    loadDetails: '&loadDetails'
                },
                controller: 'studentDetailController'              
            }
        });
        