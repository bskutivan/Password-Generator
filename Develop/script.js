// Assignment code here

// Character Codes for Lowercase, Uppercase, & Symbols
const upperCaseCharCodes = arrayFromLowToHigh(65, 72).concat(
  arrayFromLowToHigh(74, 78)
).concat(
    arrayFromLowToHigh(80, 90)
)
const lowerCaseCharCodes = arrayFromLowToHigh(97, 107).concat(
  arrayFromLowToHigh(109, 122)
)
const numberCharCodes = arrayFromLowToHigh(48, 57)
const specialCharCodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function generatePassword(charAmount, uppercaseConfirm, lowercaseConfirm, numbersConfirm, symbolsConfirm) {
// Prompt to ask how many characters
  
  // capture response
  // if < 8, prompt user to put in a number greater than 8 and < 45
  // return to start of function to get correct input



// Confirm for lowercase
  // capture response

// Confirm for uppercase
  // capture response

// Confirm for numeric
  // capture response

// Confirm for special characters
  // capture response
};

// generatePassword();


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
