'use strict';

var Student = require("../Student"),
    Course = require("../Course"),
    chai = require("chai"),
    should = chai.should(),
    expect = chai.expect;

describe("Course", function () {
    var courseName = "Introduction to awesomeness",
        courseCode = "AWE101",
        courseDescription = "This course will make you awesome";


    it("should create data correctly", function () {
        // given
        var course = Course.create(courseName, courseCode, courseDescription);

        console.log(course);
        
        // then
        should.exist(course.name);
        should.exist(course.code);
        should.exist(course.description);
        course.students.should.eql([]);
    });

});