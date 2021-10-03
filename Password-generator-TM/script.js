// Assignment Code
var generateBtn = document.querySelector("#generate");
var LengthDOM = document.getElementById("pLength");
var LowerDOM = document.getElementById("lowercase");
var UpperDOM = document.getElementById("uppercase");
var NumbersDOM = document.getElementById("numbers");
var SymbolsDOM = document.getElementById("symbols");
var passwordTxt = document.querySelector("#password");

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Generating character codes
var Uppers = arrayFromLowToHigh(65 , 90);
var Lowers = arrayFromLowToHigh(97 , 122);
var Numbers = arrayFromLowToHigh(48 , 57);
var Symbols = arrayFromLowToHigh(33 , 47).concat(arrayFromLowToHigh(58 , 64)).concat(arrayFromLowToHigh(91, 96));

// Add event listener to generate button
generateBtn.addEventListener("click", e => {
  e.preventDefault()
  var pwLength = LengthDOM.value;
  var iUpper = UpperDOM.checked;
  var iNumbers = NumbersDOM.checked;
  var iSymbols = SymbolsDOM.checked;
  var password = generatePassword(
    pwLength,
    iUpper,
    iNumbers,
    iSymbols,
  );

  passwordTxt.innerText = password;
})
 
// Generator function 
function generatePassword(pwLength, iUpper, iNumbers, iSymbols) {
  let cBank = Lowers;
  if (iUpper) cBank = cBank.concat(Uppers);
  if (iNumbers) cBank = cBank.concat(Numbers);
  if (iSymbols) cBank = cBank.concat(Symbols);
  var passwordText = [];
  for (let i = 0; i < pwLength; i++) {
    var asciCodes =
      cBank[Math.floor(Math.random() * cBank.length)];
    passwordText.push(String.fromCharCode(asciCodes));
  }
  return passwordText.join("");
}