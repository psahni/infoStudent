angular.module('infoStudent')
    .directive('ensureUnique', function(StudentManager){
        return{
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl){
                var student_details = StudentManager.query();
                   
                element.bind('keyup blur', function(event){  
                    var found;
                    var current_text = event.target.value;   
                    if(!scope.student_detail_form && attrs.elementIndex){                            
                           found = student_details.filter(function(student_detail, i){                            
                            return (i!=attrs.elementIndex && (student_detail.name.toLowerCase().replace(/\s+/, '') == current_text.toLowerCase().replace(/\s+/, '')));
                           });
                        }else{
                           found = student_details.filter(function(student_detail, i){                            
                            return (student_detail.name.toLowerCase().replace(/\s+/, '') == current_text.toLowerCase().replace(/\s+/, ''));
                        }); 
                    }
                    (found.length > 0) ? ctrl.$setValidity('unique', false) : ctrl.$setValidity('unique', true);
                    scope.$apply();
                });
            }
        }
    });