'use strict';
angular.module('infoStudent')
    .factory('StudentManager', function(localStorageService){
        var minGrade = 65,
        query = function(){
            return localStorageService.get('student_details');
        },
        refresh = function(student_details){
            localStorageService.set('student_details', student_details)	     				    		
        };
        return{
            create: function(detail){				
                var student_details = (query() || []);               
                student_details.push(detail);
                refresh(student_details);
            },
            update: function(index, field_name, field_value){
                var student_details = query();                
                student_details[index][field_name] = field_value;
                refresh(student_details);
            },
            destroy: function(index){
                var student_details = query();	
                student_details.splice(index, 1);	                                
                refresh(student_details);
            },
            destroy_all: function(){
              var student_details = [];
              refresh(student_details);
            },
            find_min_max_avg: function(){
                var sum = 0;
                var student_details = (query() || []);
                if(student_details.length == 0) return {};
                var grades = student_details.map(function(student_detail){
                    sum+=parseInt(student_detail.grade);
                    return student_detail.grade;
                });
                return { min_grade: Math.min.apply(null, grades), max_grade: Math.max.apply(null, grades), avg_grade:  (sum/student_details.length).toFixed(2) };
            },
            isFailed: function(student_detail){
                return student_detail.grade < minGrade;
            },
            query: query
        }		
});