// Assignment code here


//array of lower case character
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//array of upper case characters
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//array of number characters
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//array of special characters
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "<", ">", ";", "/"];

//function for password option
var getPasswordOptions = function () {
  var length = parseInt(
    window.prompt("How many character would you like in your password")
  );
  //alert if a number is not entered
  if (isNaN(length) === true) {
    window.alert("Numbers only");
    return;
  }
  //alert if characters are not from 8 to 128
  if (length < 8) {
    window.alert("Password must contain minimum of 8 characters!");
    return;
  }
  if (length > 128) {
    window.alert("Password must contain less than 128 characters!");
    return;
  }
  //confirming if they want the option presented or not
  var confirmLowercaseCharacters = confirm(
    "Click Ok to include lowercase characters."
  );
  var confirmUppercaseCharacters = confirm(
    "Click Ok to include uppercase characters"
  );
  var confirmNumericCharacters = confirm(
    "Click Ok to include number characters"
  );
  var confirmSpecialCharacters = confirm(
    "Click Ok to include special characters"
  );
  //alert if no characters were chosen
  if (confirmLowercaseCharacters === false &&
    confirmUppercaseCharacters === false &&
    confirmNumericCharacters === false &&
    confirmSpecialCharacters === false) {
    window.alert("At least one character must be selected")
    return;
  }
  //object will store if clicked ok on prompts
  var passwordOptions = {
    length: length,
    confirmLowercaseCharacters: confirmLowercaseCharacters,
    confirmUppercaseCharacters: confirmUppercaseCharacters,
    confirmNumericCharacters: confirmNumericCharacters,
    confirmSpecialCharacters: confirmSpecialCharacters
  };

  return passwordOptions;
}
//function for getting random characters
function getRandomCharacters(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomCharacters = array[randomIndex];
  return randomCharacters;
}


var generatePassword = function() {
  
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
