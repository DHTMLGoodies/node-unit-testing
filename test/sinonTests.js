'use strict';

// jshint expr: true

var chai = require("chai"),
    sinon = require("sinon"),
    expect = chai.expect;


chai.should();


describe("sinon test", function(){

    var student;

    beforeEach(function(){
        student = {
            dropClass: function(classId, cb){
                // do stuff
                cb();
            }
        };
    });

    describe("student.dropClass", function(){
        it("should call the callback", function(){
            var called = false;
            var callback = function(){
                called = true;
            }

            student.dropClass(1, callback);

            expect(called).to.be.true;
        });

        it("should call the callback - sinon", function(){
            var spy = sinon.spy();
            student.dropClass(1, spy);
            spy.called.should.be.true;
        });

        it("should call the callback and log to the console", function(){
            function onClassDropped(){
                console.log("dropped out of class");
            }

            var spy = sinon.spy(onClassDropped);

            student.dropClass(1, spy);

            spy.called.should.be.true;

        });
    });

});