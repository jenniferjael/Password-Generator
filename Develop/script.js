// Assignment Code
// Store an array of lowercase chars in a variable
// store an array of numeric characters in a variable
// stoer an array of uppercase chars in a variable
// Store an array of spqcial chars in a variable

// function to promp the user for thier password options
// viriable to store the length of the password
// conditiional statement to check if the password length is a true number
// check to see if the password is atleast 8 chars and not more than 127
// Need 4 confirms to check what chars user would like to use in the password
// conditional statement ot check if user does not include anytypes of chars the generation will end

// create and object to store user input

// Assignment of code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var lower = "abcdefghijklmnopqrstuvwxyz";

  var numbers = "0123456789";

  var symbols = "!@#$%^&*+";

 var length = parseInt(prompt("how long is your password?"));
  var userUpper = confirm("Do you want upper case letters in your password?");
  var userLower = confirm("Do you want lower letters in your password?");
  var userNumbers = confirm("Do you want numbers in your password?");
  var userSymbols = confirm("Do you want symbols in your password?");

  var userCharacters = "";
  if (userUpper) {
    userCharacters = userCharacters + upper;
  }
  if (userLower) {
    userCharacters = userCharacters + lower;
  }
  if (userNumbers) {
    userCharacters = userCharacters + numbers;
  }
  if (userSymbols) {
    userCharacters = userCharacters + symbols;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    password =
      password +
      userCharacters[Math.floor(Math.random() * userCharacters.length)];
  }
  return password;
}
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText = document.querySelector("password");
  password.value = generatePassword();
}

generateBtn.addEventListener("click", writePassword);
