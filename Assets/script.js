// Assignment code here
var desiredLength = window.prompt('How long do you want your password? Must be 8 - 128 characters.');
var includeB = window.confirm('Include uppercase?');
var includeNum = window.confirm('Include Numbers?');
var includeSpec = window.confirm('Include special characters?');

const alphaA = arrayValues(97, 122)
const alphaB = arrayValues(65,90)
const numeric = arrayValues(48, 57)
const specials = arrayValues(32, 47).concat(arrayValues(58,64)).concat(arrayValues(91,96)).concat(arrayValues(123,126))

function generatePassword(alphaA, alphaB, numeric, specials) {
  String.fromCharCode
  let charCodes = alphaA;
  if (includeB === true) {
    charCodes= charCodes.concat(alphaB)}
  if (includeNum === true){
    charCodes = charCodes.concat(numeric)
  }
  if (includeSpec === true){
    charCodes = charCodes.concat(specials)
  }
  const passChar = []
  for (let i=0; i<desiredLength; i++){
    const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)]
    passChar.push(String.fromCharCode(characterCode))
  }
  return passChar.join('')
};
  
function arrayValues(low, high) {
  const array=[]
  for (let i=low; i < high; i++){
  array.push(i)
  }
  return array
};
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(alphaA, alphaB, numeric, specials);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


writePassword();



