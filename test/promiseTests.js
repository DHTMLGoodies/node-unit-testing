'use strict';

var Promise = require("bluebird"),
    chai = require("chai"),
    chaiAsPromised = require("chai-as-promised"),
    should = chai.should();

chai.use(chaiAsPromised);

var student = {
    name: "John Doe", id: 3
};

var dataAccess = {

    getStudent: function (id) {
        if (id === 3) return Promise.resolve(student);
        return Promise.reject("Invalid student id");
    }
}

describe("getStudent", function () {

    it("uses the done function", function (done) {
        dataAccess.getStudent(3).then(function (student) {
            student.id.should.equal(3);
            done();
        });
    });

    it("fulfills promise", function () {
        return dataAccess.getStudent(3);
    });

    it("fulfills the promise with the correct student", function () {
        return dataAccess.getStudent(3).should.eventually.equal(student);
    });

});