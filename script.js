// Assignment code here
var alphHigh = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var alphLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var arrayNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*',]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var results = "";
  var char = window.prompt("How many characters would you like your password contain");
  var charQty = parseInt(char);
  if (charQty >= 8 && charQty <= 128) {
    var upperCase = window.confirm("Click OK to confirm uppercase letters.")
    var lowerCase = window.confirm("Click OK to confirm lowercase")
    var speacilChar = window.confirm("Click OK to confirm speacil characters.")
    var numeric = window.confirm("Click OK to confirm including numeric characters.")
    var okayButton = [];
    if (upperCase == true) okayButton.push(alphHigh)
    if (lowerCase == true) okayButton.push(alphLow)
    if (numeric == true) okayButton.push(arrayNumeric)
    if (speacilChar == true) okayButton.push(specChar)

    for (var i = 0; i < charQty; i++) {
      var storeButton = Math.floor(Math.random() * okayButton.length);
      var selectedArray = okayButton[storeButton];
      results += selectedArray[Math.floor(Math.random() * selectedArray.length)];
      // results += arrayNumeric[Math.floor(Math.random() * 10)];
      // results += specChar[Math.floor(Math.random() * 10)];
    }

  } else {
    alert('Please provide a passowrd with eight of more characters')
    return;
  }
  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

