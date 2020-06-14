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
    "Click Ok to include specal characters"
  );


  if (confirmLowercaseCharacters, confirmUppercaseCharacters, confirmNumericCharacters, confirmSpecialCharacters === false) {
    window.alert("At least one character must be selected")
    return;
  }
};

var generatePassword = function() {
  getPasswordOptions();
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
