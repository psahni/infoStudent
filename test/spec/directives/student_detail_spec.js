describe('Directive: student_detail', function(){
    
    beforeEach(module('infoStudent')); 
    beforeEach(module('views/templates/student_detail.html'));
    
    var compile,
        scope,
        studentManager;
        
    beforeEach(inject(function($compile, $rootScope, StudentManager){
      compile = $compile;
      scope   = $rootScope.$new();      
    }));
    
    
    
    it("should render the student detail directive correctly", function(){
       scope.detail = JSON.stringify({name: 'Prashant', grade: 80} );
       scope.loadDetails = function(){};
       var element = angular.element("<student-detail detail=" + scope.detail + " element-index=0 load-details='loadDetails()'></student-detail>") 
       var element_html = compile(element)(scope); 
       scope.$digest();
       //console.log(element_html);       
       expect(element_html).not.toEqual('');
       expect(element_html.find("div.form").length).toEqual(1);
       expect(element.scope().detail).toEqual(scope.detail);
    });
    
});