// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function writePassword() {
  var lenght = prompt("how long is the password?")

  //var upper = confirm("do you want upperLetter?")
  //console.log(upper);
  
  var password = "";
  for (var i = 0; i < lenght; i++) {
    password = password + getRandomInt(10);

  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

