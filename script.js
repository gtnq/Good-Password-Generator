// Assignment code here

let num = "0123456789"

function prompt_question(text, valuetype) {
  let request 
  return request
}



function generatePassword() {
  let max_length, min_length, lower, upper, num, spec;
  
  max_length = prompt_question("How long do you want your password?", "int")
  min_length = prompt_question("How long do you want your password?", "int")



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
