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

});

