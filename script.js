// Assignment code here

let numbers = "0123456789";
let lower_letters = "abcdefghijklmnopqrstuvwxyz"
let upper_letters = lower_letters.toUpperCase()
let special = "!@#$%^&*()"
let higherend = 0;

function int_test(text){
  let input = "please enter a number", num = 0;
  
  while(true) {
    num = prompt(text,input)
    console.log(num)
    num = parseInt(num)
    
    if ( num) { // positive input
      if (higherend == 0) {   //if upper limit not set, set up upper limit
        higherend = num
        return higherend
      } else { //upper limit already set up

        if (num >= higherend ) {   //makesure upperlimit is larger than the new input
          input = "please input a number than max length or a positive number"
        } else 
          return num;
      }
    } else {
      input = "Plase use a positive number"
    }
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
  let max_length, min_length, lower, upper, num, spec, data = "",output = '';
  
  max_length = prompt_question("How long do you want your password?", "int")
  min_length = prompt_question("How short do you want your password?", "int")
  while (true) {
    lower = prompt_question("Do you want to include lowercase letters?", "str")
    upper = prompt_question("Do you want to include uppercase letters?", "str")
    num = prompt_question("Do you want to include number?", "str")
    spec = prompt_question("Do you want to use special?", "str")
    if (lower || upper || num || spec) {
      break;
    } else
      alert("Please say yes for at least one option ")
  }

  let len = Math.floor(Math.random()*(max_length - min_length)) + min_length

  console.log(len, "length of pw")

  if (lower)                      //adding all the stuff for the customer needed
    data= data + lower_letters
  if (upper)
    data = data + upper_letters
  if (num)
    data = data + numbers
  if (spec)
    data = data + special

  console.log(data,"added stuff")
  let loc //init of random location storing variable
  for (let i = 0; i < len; i++) {
    loc = Math.floor(Math.random()*(data.length))
    console.log('loc$(loc)')
    output += data[loc]     //loop for adding the random stuff from the data
  }
  console.log("output", output)
  higherend = 0 //reset max number
  return output
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
