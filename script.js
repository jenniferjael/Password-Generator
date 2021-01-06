
// Assignment of code
var generateBtn = document.querySelector("#generate");
  // Store an array of lowercase, upper case, numeri, and special characters
  //create a fuction to geneerate password
function generatePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var lower = "abcdefghijklmnopqrstuvwxyz";

  var numbers = "0123456789";

  var symbols = "!@#$%^&*+";
// Create to promp the user for thier password options
 var length = parseInt(prompt("how long is your password?"));
  var userUpper = confirm("Do you want upper case letters in your password?");
  var userLower = confirm("Do you want lower letters in your password?");
  var userNumbers = confirm("Do you want numbers in your password?");
  var userSymbols = confirm("Do you want symbols in your password?");


  // conditiional statements
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
// viriable to store the length of the password
// create and object to store user input
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
