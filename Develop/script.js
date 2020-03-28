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



function generatePassword(charAmount, upperCaseConfirm, lowerCaseConfirm, numbersConfirm, specialConfirm) {
// Prompt to ask how many characters

  var charAmount = prompt("How many characters would you like in the password? Password can be as short as 8 characters or as long as 44 characters.");
  // if < 8, prompt user to put in a number greater than 8 and < 45

  if (charAmount < 8 || charAmount > 45) {
    alert("Please input an amount greater than 8 characters and less than 45 characters.");
    // return to start of function to get correct input
    generatePassword();
  }
  // Confirm for uppercase
  var upperCaseConfirm = confirm("Would you like uppercase letters in your password?");
  if (upperCaseConfirm) {

  }
  // Confirm for lowercase
  var lowerCaseConfirm = confirm("Would you like lowercase letters in your password?");
  if (lowerCaseConfirm) {

  }
  // Confirm for numeric
  var numbersConfirm = confirm("Would you like numbers in your password?");
  if (numbersConfirm) {

  }
  // Confirm for special characters
  var specialConfirm = confirm("Would you like special characters in your password?");
  if (specialConfirm) {

  }
};

generatePassword();


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
