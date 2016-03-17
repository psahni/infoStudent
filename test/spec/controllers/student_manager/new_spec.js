'use strict';

describe('Controller: NewController', function () {
    
    
  // load the controller's module
  beforeEach(function(){
      module('infoStudent');      
  });
  
  var NewController,
    scope,
    StudentManager;
    
    // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _StudentManager_) {
    scope = $rootScope.$new();
    StudentManager = _StudentManager_ ;  
    
    NewController = $controller('NewController', {
      $scope: scope,
      StudentManager: StudentManager           
    });

  }));


  it("should submit student detail successfully - valid case", function(){
     StudentManager.destroy_all();
     scope.student_detail_form = {}
     scope.student_detail_form.$valid = true;
     scope.student_detail = {name: 'Prashant', grade: '90'}
     scope.submitDetail();
     var student_details = StudentManager.query();
     expect(student_details.length).toEqual(1);
  });
    
  it("should submit student detail successfully - Invalid case", function(){
     StudentManager.destroy_all();
     scope.student_detail_form = {}
     scope.student_detail_form.$invalid = true;     
     scope.submitDetail();
     var student_details = StudentManager.query();
     expect(student_details.length).toEqual(0);
  });
  
});