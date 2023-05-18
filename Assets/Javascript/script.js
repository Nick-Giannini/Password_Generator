// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var PwLength = prompt("How long do you want?");

  if (PwLength === null) {
    return;
  }
  else if (PwLength < 8 || PwLength > 128 || isNaN(PwLength)) {
    alert("Password length must be atleast 8 characters. Please try again");
    generatePassword();
  }
  
  var newPass = " ";

  var SpecialChar = confirm("Should Password include Special Characters? i.e. %,@,!,*,&...");

  var lowerCase = confirm("Should Password include lower case characters? i.e. a,b,c,d...");

  var upperCase = confirm("Should Password include upper case characters? i.e. A,B,C,D...");

  var containNumbers = confirm("Should Password include numbers? i.e. 1,2,3,4...");

  if(SpecialChar == false && lowerCase == false && upperCase == false && containNumbers == false){
    alert("Make sure to select atleast 1 character type!");
    return;
  }


  var numOptions = "0123456789";
  var specOptions = "!@#$%^&*-+_=<>/[{}]|";
  var charOptionsLow = "abcdefghijklmnopqrstuvwxyz";
  var charOptionsUp = charOptionsLow.toUpperCase();

    while (newPass.length <= PwLength) {
      var choiceSelects = Math.floor(Math.random() * 4)

      if (containNumbers && choiceSelects == 0) {
        newPass += numOptions.charAt(Math.floor(Math.random() * numOptions.length));
      }
      else if (SpecialChar && choiceSelects == 1) {
        newPass += specOptions.charAt(Math.floor(Math.random() * specOptions.length));

      }
      else if (upperCase && choiceSelects == 2) {

        newPass += charOptionsUp.charAt(Math.floor(Math.random() * charOptionsUp.length));
      }
      else if (lowerCase && choiceSelects == 3) {
        newPass += charOptionsLow.charAt(Math.floor(Math.random() * charOptionsLow.length));
      }
    }
    return newPass; 
}