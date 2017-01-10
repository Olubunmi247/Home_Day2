'use strict'

module.exports = {
 
  reverseString: function(str){
    var str1 = str;
    var newString = "";

    if (str === ''){
      return null
    }
    else{
      for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
      }
      if (str === newString){
        return true
      }
      else{
        return newString;
      }
      
    }
    
  }
}