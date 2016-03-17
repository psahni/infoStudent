angular.module('infoStudent')
    .directive('inlineEditable', function(StudentManager){
        return{
                restrict: 'A',
                scope: {
                    fieldName: '@',
                    elementIndex: '@',
                    loadDetails: '&loadDetails'                    
                },
                require: '^form',
                link: function(scope, element, attrs, formCtrl){
                        element.bind('keyup blur', function(event){                              
                            if(event.which == 13 || event.type == 'blur'){
                                  var form  = formCtrl,
                                      field = form[scope.fieldName];                                                                       
                                scope.$apply(function(){
                                    field.$commitViewValue();
                                    field.$setTouched;
                                });                                                                
                                if((field.$dirty && field.$valid) || !field.$error || form.$pristine ){
                                   StudentManager.update(scope.elementIndex, scope.fieldName, field.$modelValue);	
                                   scope.$apply(function(){
                                     scope.loadDetails();	
                                   });
                                }  
                            }
                        });
                }
        }
});
