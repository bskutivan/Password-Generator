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



function generatePassword() {
// Prompt to ask how many characters
  var charCode = [];
  var charAmount = prompt("How many characters would you like in the password? Password can be as short as 8 characters or as long as 44 characters.");
  // if < 8, prompt user to put in a number greater than 8 and < 45

  if (charAmount >= 8 && charAmount <= 44) {
    console.log(charAmount)
  }
    else {
      alert("Please input an amount greater than 8 characters and less than 45 characters.");
      // return to start of function to get correct input
      generatePassword();
  }
  // Confirm for uppercase
  var upperCaseConfirm = confirm("Would you like uppercase letters in your password?");
  if (upperCaseConfirm) charCode = upperCaseCharCodes;
  console.log(upperCaseConfirm);
  console.log(charCode);
  
  // Confirm for lowercase
  var lowerCaseConfirm = confirm("Would you like lowercase letters in your password?");
  if (lowerCaseConfirm) charCode = charCode.concat(lowerCaseCharCodes);
  console.log(lowerCaseConfirm);
  console.log(charCode);
  
  // Confirm for numeric
  var numbersConfirm = confirm("Would you like numbers in your password?");
  if (numbersConfirm) charCode = charCode.concat(numberCharCodes);
  console.log(numbersConfirm);
  console.log(charCode);
  
  // Confirm for special characters
  var specialConfirm = confirm("Would you like special characters in your password?");
  if (specialConfirm) charCode = charCode.concat(specialCharCodes);
  console.log(specialConfirm);
  console.log(charCode);
  
  // For loop and array to randomzie char code being selected for charCode array
  passwordChars = []
  for (let i = 0; i < charAmount; i++) {
    var passwordCodes = charCode[Math.floor(Math.random() * charCode.length)]
  passwordChars.push(String.fromCharCode(passwordCodes));
  }

  //return passwordChars.join('');
  console.log(passwordChars);
  //return(charAmount, upperCaseConfirm, lowerCaseConfirm, numbersConfirm, specialConfirm, charCode);

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
