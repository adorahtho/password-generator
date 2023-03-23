// Assignment Code
//put all variables here
//const locks in the value, can't change later
//let can change value later

var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharEl = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePasswordQs () {

  var charLength = window.prompt("Please enter a digit between 8-128 to determine the desired length of the password.")

  if (charLength >= 8 && charLength <= 128) {
    console.log("character length: " + charLength)
    } else if (charLength < 8 || charLength > 128) { 
      window.alert("Invalid entry. The characters must be between 8-128.")
      console.log("invalid entry")
      generatePasswordQs();
    }

  var lowerCase = window.confirm("Click OK if you want lowercase letter(s) in your password.")

  if(lowerCase === true) {
    console.log("lowercase letter(s): " + lowerCase)
  }else if (lowerCase === false) {
    console.log("lowercase letter(s): " + lowerCase)
  }
  
  var upperCase = window.confirm("Click OK if you want uppercase letter(s) in your password.")

  if(upperCase === true) {
    console.log("uppercase letter(s): " + upperCase)
  }else if (upperCase === false) {
    console.log("uppercase letter(s): " + upperCase)
  }

  var number = window.confirm("Click OK if you want number(s) in your password.")

  if(number === true) {
    console.log("number(s): " + number)
  }else if (number === false) {
    console.log("number(s): " + number)
  }

  var specialChar = window.confirm("Click OK if you want special character(s) in your password.")

  if(specialChar === true) {
    console.log("special character(s): " + specialChar)
  }else if (specialChar === false) {
    console.log("special character(s): " + specialChar)
  }

  const passwordChoices = {
    charNumber: +charLength, 
    lowerCaseLetter: lowerCase,
    upperCaseLetter: upperCase,
    numericValue: number,
    special: specialChar
  }
  console.log("password choices set", passwordChoices) 

  return passwordChoices //this "return" will save the function name "generate password choices" as the value of "passwordChoices" so when you call the function that will be the value.

} 

function randomPassword(array) {
  var index = Math.floor(Math.random() * array.length)

  var element = array[index]

  return element
}
console.log(randomPassword(lowerCaseChar))

function generatePassword() {
  const passwordChoices = generatePasswordQs()

  var password = ""
//this will generate more than 10 characters in the password !!! NEED TO FIGURE OUT HOW TO GET JUST 10
  for(var i=0; i < passwordChoices.charNumber; i++){  
    password += randomPassword(possibleCharacters)

    var possibleCharacters = lowerCaseChar.concat(upperCaseChar, numericChar, specialCharEl)

    if (passwordChoices.lowerCaseLetter) {
      possibleCharacters = possibleCharacters.concat(lowerCaseChar)
    } 
    if (passwordChoices.upperCaseLetter) {
      possibleCharacters = possibleCharacters.concat(upperCaseChar)
    }
    if (passwordChoices.numericValue) {
      possibleCharacters = possibleCharacters.concat(numericChar)
    }
    if (passwordChoices.special) {
      possibleCharacters = possibleCharacters.concat(specialCharEl)
    }
    console.log("password: " + password)
//add for loops for rest of password choices
  }
  return password 
  //if states if they based on user's pick
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//build useable character array. if password choices.lowercase letters are true then create new array possible characters.
//declare new array w/ the users possible choices. include all the characters. concat array method. 
//var possibleCharacters = [];
// if (passwordChoices.lowerCaseLetter) {
//   possibleCharacters = possibleCharacters.concat(lowerCaseLetterArr);
// }
//create for loop