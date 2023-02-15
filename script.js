// Assignment code here

let numbers = "0123456789";
let lower_letters = "abcdefghijklmnopqrstuvwxyz"
let upper_letters = lower_letters.toUpperCase()
let special = "!@#$%^&*()"

function prompt_question(text, valuetype) {
  let request;
  return request
}



function generatePassword() {
  let max_length, min_length, lower, upper, num, spec;
  
  max_length = prompt_question("How long do you want your password?", "int")
  min_length = prompt_question("How long do you want your password?", "int")
  lower = prompt_question("Do you want to include lowercase letters?", "str")
  upper = prompt_question("Do you want to include uppercase letters?", "str")
  num = prompt_question("Do you want to include number?", "str")
  spec = prompt_question("Do you want to use special?", "str")

  let len = Math.floor(Math.random()*(max_length - min_length)) + min_length



  return "akfjashdflkasjdh"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  password = "asbdakjbfsadfkh"

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
