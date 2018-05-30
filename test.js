'use strict';

// jshint expr: true

var chai = require("chai"),
    expect = chai.expect;


chai.should();

function isEven(num){
    return num % 2 === 0;
}

describe("is even", function(){

    it("should return true when number is even", function(){
        isEven(4).should.be.true;
    });

    it("should return false when numer is odd", function(){
        expect(isEven(5)).to.be.false;
    });
});

function add(num1, num2){
    return num1 + num2;
}

describe("with setUp and tearDown", function(){

    var num;

    beforeEach(function(){
        num = 5;
    });

    afterEach(function(){

    });

    it("should be 10 when adding 5 to 5", function(){
        num = add(num, 5);
        num.should.equal(10);
    });

    it("shoudl be 12 when adding 7 to 5", function(){
        num = add(num, 7);
        num.should.equal(12);
    });
});