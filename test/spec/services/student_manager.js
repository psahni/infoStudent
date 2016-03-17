'use strict';

describe('Service: StudentManager', function(){
   
    var studentManager;
    
    beforeEach(module('infoStudent'));
    
    beforeEach(inject(function (_StudentManager_){
        studentManager = _StudentManager_;
    }));
    
    afterEach(function() {
        studentManager.destroy_all();
    });


    it("should create student detail successfully", function(){
        var student_details =   studentManager.query();
        expect(student_details.length).toEqual(0);
        studentManager.create({name: 'Prashant', grade: '90'});
        student_details =   studentManager.query();
        expect(student_details.length).toEqual(1);
    });
    
    it("should update student detail successfully", function(){
        var data;
        studentManager.create({name: 'Prashant', grade: '90'});
        var student_details =   studentManager.query();
        expect(student_details[0].name).toEqual('Prashant');
        data = { field_value: 'Prashant Sahni', field_name: 'name' }
        studentManager.update(0, data.field_name, data.field_value);
        student_details =   studentManager.query();
        expect(student_details[0].name).toEqual('Prashant Sahni');
        data = { field_value: 95, field_name: 'grade' }
        studentManager.update(0, data.field_name, data.field_value);
        student_details =   studentManager.query();
        expect(student_details[0].grade).toEqual(95);
    });
    
    it("should destroy student detail successfully", function(){
        studentManager.create({name: 'Prashant', grade: '90'});
        var student_details =   studentManager.query();
        expect(student_details.length).toEqual(1);
        studentManager.destroy(0)
        student_details =   studentManager.query();
        expect(student_details.length).toEqual(0);
    });
    
    it("should find min, max, avg correctly", function(){
        studentManager.destroy_all();
        studentManager.create({name: 'Prashant', grade: '90'});
        studentManager.create({name: 'Ravi', grade: '80'});
        studentManager.create({name: 'Ankur', grade: '70'});
        var result = studentManager.find_min_max_avg();
        expect(result.avg_grade).toEqual('80.00');
        expect(result.min_grade).toEqual(70);
        expect(result.max_grade).toEqual(90);
    });
    
});