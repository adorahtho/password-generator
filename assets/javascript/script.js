//Variables of different character types used to generate a random password.
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharEl = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];


var generateBtn = document.querySelector("#generate");

// The writePassword function will run the generatePassword function to find the value for the variable password. Once the value for generatePassword function is complete the random password will appear in the html textarea element with id="password". That text area will contain the password that displays on the webpage. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//This function will run the pop up windows asking the user their desired character length. If the answer is not between 8-128 characters, an alert will pop up for the user to enter again. The user will have to click "Generate Password" button again to enter in a valid number. Once the condition is met, additional windows will pop up asking if the user wants lowercase or uppercase letters, numbers, and/or special characters.
function generatePasswordQs () {

  var charLength = window.prompt("Please enter a digit between 8-128 to determine the desired length of password.")

  if (charLength >= 8 && charLength <= 128) {
    console.log("character length: " + charLength)
    } else { 
      window.alert("Invalid entry. The characters must be between 8-128.")
      console.log("invalid entry " + charLength)
      return charLength
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
//The object variable will collect all the user's choices.
  const userChoices = {
    charNumber: +charLength, 
    lowerCaseLetter: lowerCase,
    upperCaseLetter: upperCase,
    numericValue: number,
    special: specialChar
  }
  console.log("user choices set", userChoices) 
  //The collected results for userChoices will be returned back to the function and the next function will run.
  return userChoices 
} 

//This function will randomize everything in the possibleCharacters array when called.
function randomPassword(array) {
  var index = Math.floor(Math.random() * array.length)

  var element = array[index]

  return element
}

//The generatePassword function will run generatePasswordQs to find the value for userChoices. Once the value has been fulfilled by the generatePasswordQs function the if statements will collect all the true values for each character type and concat thenm into the possibleCharacters array eliminating character types with a false value.
function generatePassword() {
  const userChoices = generatePasswordQs()

  var password = ""

    var possibleCharacters = [].concat(lowerCaseChar, upperCaseChar, numericChar, specialCharEl);

    if (userChoices.lowerCaseLetter) {
      possibleCharacters = possibleCharacters.concat(lowerCaseChar)
    } 
    if (userChoices.upperCaseLetter) {
      possibleCharacters = possibleCharacters.concat(upperCaseChar)
    }
    if (userChoices.numericValue) {
      possibleCharacters = possibleCharacters.concat(numericChar)
    }
    if (userChoices.special) {
      possibleCharacters = possibleCharacters.concat(specialCharEl)
    }
//Once all desired characters have been collected in the possibleCharacters array, the for loop will run the randomPassword function for possibleCharacters by adding 1 random character each time it goes through the for loop until the character number (charNumber) that the user input has been met. 
    for(var i=0; i < userChoices.charNumber; i++){  
      password += randomPassword(possibleCharacters)
  }
  //This will return the value for the password variable to the generatePassword function.
  return password 
}

// Event listener to generate button when run the function writePassword when it hears the user "click" the button.
generateBtn.addEventListener("click", writePassword);