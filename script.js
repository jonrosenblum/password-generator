// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created Arrays of Possible Character Choices
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var special = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Created function to ask user which options and made conditional statements to ensure minimum option requirements were met.
function questions() {
  var length = prompt(
    "Please choose a password length between 8 and 128 characters."
  );
  if (length < 8 || length > 128) {
    alert("Choose number between 8 and 128");
    return questions();
  }
  var askNumbers = confirm("Do you want your password to include numbers?");
  var askLowerCase = confirm(
    "Do you want your password to include lower case letters?"
  );
  var askUpperCase = confirm(
    "Do you want your password to include upper case letters?"
  );
  var askSpecial = confirm(
    "Do you want your password to include special characters?"
  );
  var responses = {
    length: length,
    askNumbers: askNumbers,
    askLowerCase: askLowerCase,
    askUpperCase: askUpperCase,
    askSpecial: askSpecial,
  };
  if (!askNumbers && !askLowerCase && !askUpperCase && !askSpecial) {
    alert("Must choose at least one type.");
    return questions();
  }
  return responses;
}
// This function joins all the user responses and then creates the result - a strong password.
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.askNumbers) {
    possibleCombo = possibleCombo.concat(numbers);
  }
  if (passwordOptions.askLowerCase) {
    possibleCombo = possibleCombo.concat(lowerCase);
  }
  if (passwordOptions.askUpperCase) {
    possibleCombo = possibleCombo.concat(upperCase);
  }
  if (passwordOptions.askSpecial) {
    possibleCombo = possibleCombo.concat(special);
  }

  console.log(possibleCombo);

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword +=
      possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
