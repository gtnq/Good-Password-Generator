// Assignment code here

let numbers = "0123456789";
let lower_letters = "abcdefghijklmnopqrstuvwxyz"
let upper_letters = lower_letters.toUpperCase()
let special = "!@#$%^&*()"

function int_test(text){
  let input = "please enter a number", num;
  
  while(true) {
    num = prompt(text,input)
    console.log(num)
    num = parseInt(num)
    if ( num )
    
      return num;
    input = "Plase use a number"
  }
}

function str_test(text){
  let note = "Yes or No only please", bool;
  while (true) {
    bool = prompt(text, note)
    console.log(bool)
    switch(bool) {
      case "Yes":
        return true;
      case "yes":
        return true;
      case "YES":
        return true;
      case "NO":
        return false;
      case "no":
        return false;
      case "No":
        return false; 
    }
    note = "Please use Yes or No"
  }
  
}

function prompt_question(text, valuetype) {
  let request;
  switch(valuetype) {
    case "int":
      request = int_test(text);
      break;
    case "str":
      request = str_test(text);
  }
  return request
}



function generatePassword() {
  let max_length, min_length, lower, upper, num, spec;
  
  max_length = prompt_question("How long do you want your password?", "int")
  min_length = prompt_question("How short do you want your password?", "int")
  lower = prompt_question("Do you want to include lowercase letters?", "str")
  upper = prompt_question("Do you want to include uppercase letters?", "str")
  num = prompt_question("Do you want to include number?", "str")
  spec = prompt_question("Do you want to use special?", "str")

  let len = Math.floor(Math.random()*(max_length - min_length)) + min_length

  console.log(len)

  return 
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
