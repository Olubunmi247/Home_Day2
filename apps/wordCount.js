'use strict'

module.exports = {

words: function(string) {
  var frequency = Object.create(null); //creates a JSON object with no prototype, properties, and methods
  var wordList = string.split(/\s+/); //regular expression to use single space, tabs and newline characters as separators

  for(var i = 0; i < wordList.length; i++){
    frequency[wordList[i]] = (frequency[wordList[i]] || 0) + 1;
    }
      
      return frequency;
}
}