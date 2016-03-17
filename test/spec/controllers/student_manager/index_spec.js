'use strict';

describe('Controller: IndexController', function () {

  // load the controller's module
  beforeEach(module('infoStudent'));

  var IndexController,
    scope,
    StudentManager,
    createData;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _StudentManager_) {
    scope = $rootScope.$new();
    StudentManager = _StudentManager_ ;      
    IndexController = $controller('IndexController', {
      $scope: scope,
      StudentManager: StudentManager           
    });

    createData = function(){
      var student_detail1 = {name: 'Prashant', grade: 75}
      StudentManager.create(student_detail1);
      var student_detail2 = {name: 'Ravi', grade: 80}
      StudentManager.create(student_detail2);
      var student_detail3 = {name: 'Akash', grade: 65}
      StudentManager.create(student_detail3);
    };

  }));


 it("should load student details successfully", function(){
      createData();
      scope.loadDetails();
      expect(scope.student_details).toBeTruthy();
      expect(scope.student_details.length).toEqual(3);
  });

  it("should find min, max, avg grade", function(){
    scope.loadDetails();
    expect(scope.min_grade).toEqual(65);
    expect(scope.max_grade).toEqual(80);
    expect(scope.avg_grade).toEqual('73.33');
  });
 

});
