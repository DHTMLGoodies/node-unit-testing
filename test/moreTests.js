'use strict';

// jshint expr: true

var chai = require("chai"),
    expect = chai.expect;


chai.should();

describe("more tests", function () {
    it("should be true", function () {
        expect(true).to.be.true;
    })
});

describe("async test", function () {

    it("should wait until callback", function (done) {

        var a = 0;
        setTimeout(function () {
            a = 1;

            a.should.equal(1);

            done();
        }, 100);
    });

});