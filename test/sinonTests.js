'use strict';

// jshint expr: true

var chai = require("chai"),
    sinon = require("sinon"),
    expect = chai.expect;


chai.should();


describe("sinon test", function () {

    var student, schedule;

    beforeEach(function () {
        student = {
            dropClass: function (classId, cb) {
                // do stuff
                if (!!cb.dropClass) {
                    cb.dropClass();
                } else {
                    cb();
                }
            },

            addClass: function (schedule) {
                if (!schedule.classIsFull()) {
                    // do stuff
                    return true;
                } else {
                    return false;
                }
            }
        };

        schedule = {
            dropClass: function () {
                console.log("dropped out of schedule");
            },

            classIsFull: function () {
                return true;
            }
        };
    });

    describe("student.dropClass", function () {
        it("should call the callback", function () {
            var called = false;
            var callback = function () {
                called = true;
            }

            student.dropClass(1, callback);

            expect(called).to.be.true;
        });

        it("should call the callback - sinon", function () {
            var spy = sinon.spy();
            student.dropClass(1, spy);
            spy.called.should.be.true;
        });

        it("should call the callback and log to the console", function () {
            function onClassDropped() {
                console.log("dropped out of class");
            }

            var spy = sinon.spy(onClassDropped);

            student.dropClass(1, spy);

            spy.called.should.be.true;

        });

        it("should call the callback even when its member of an object", function () {

            var spy = sinon.spy(schedule, "dropClass");
            student.dropClass(1, schedule);
            schedule.dropClass.called.should.be.true;
        });


    });

    describe("student with stubs", function () {

        it("should call a stub method", function () {
            var stub = sinon.stub(schedule);
            student.dropClass(1, stub);

            stub.dropClass.called.should.be.true;

        });

        it("should return true when class is full", function () {

            var stub = sinon.stub(schedule);
            stub.classIsFull.returns(false);

            var returnValue = student.addClass(stub);
            returnValue.should.be.true;

        });

    });

    describe("Student with mocks", function () {


        it("mocks schedule", function(){
            // given
            var mockObject = sinon.mock(schedule);
            var expectation = mockObject.expects("classIsFull").once();

            // when
            student.addClass(schedule);

            // then
            expectation.verify();
        });
    });

});