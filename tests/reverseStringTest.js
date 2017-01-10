'use strict'
var chai = require('chai');
var expect = chai.expect;
var myApp = require('../apps/StringReverse.js');

describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(myApp.reverseString('')).to.equal(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(myApp.reverseString('anna')).to.equal(true);
    });

    it("should return true for `NaN`", function() {
      expect(myApp.reverseString('NaN')).to.equal(true);
    });

    it("should return true for `civic`", function() {
      expect(myApp.reverseString('civic')).to.equal(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(myApp.reverseString('books')).to.equal('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(myApp.reverseString('solomon')).to.equal('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(myApp.reverseString('misc')).to.equal('csim');
    });

  });

});