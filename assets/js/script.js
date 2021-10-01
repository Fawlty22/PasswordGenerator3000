/*Define strings for characters*/
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowercase = 'abcdefghijklmnopqrstuvwxyz'
let numbers = '0123456789'
let specialcase = '!@#$%^&*'
let newPasswordPre = ''
let newPassword = ''
/*Scope-problem Variables*/
let trueUppercase = false
let trueLowercase = false
let trueNumbers = false
let trueSpecialcase = false
let passLength = ''

/*Generate Length Function*/
function generateLength() {
    passLength = parseInt(prompt('How many characters should your password include?'), 10)

    if (isNaN(passLength)){      
        alert('Please enter a number.')
        generateLength();
    }

    if (passLength < 8 || passLength > 128) {
        confirm('Please choose a length between 8 and 128 characters.')
        generateLength();
    }
}

/*Generate Character Types Function*/
function generateCharacterTypes() {
    
    trueUppercase = confirm('Would you like to include uppercase characters?')
    trueLowercase = confirm('Would you like to include lowercase characters?')
    trueNumbers = confirm('Would you like to include numbers?')
    trueSpecialcase = confirm('Would you like to include special characters?')
}

/*Generate Password Function*/
function generatePassword() {
    generateLength();
    generateCharacterTypes();

    /*Only Uppercase Chosen*/
    if (trueUppercase && !trueLowercase && !trueNumbers && !trueSpecialcase) {
        for (i = 0; i < passLength; i++) {
            var randomNumber = Math.floor(Math.random() * uppercase.length);
            newPassword += uppercase[randomNumber];
        }
    }

    /*Only Lowercase Chosen*/
    else if (!trueUppercase && trueLowercase && !trueNumbers && !trueSpecialcase) {
        for (i = 0; i < passLength; i++) {
            var randomNumber = Math.floor(Math.random() * lowercase.length);
            newPassword += lowercase[randomNumber];
        }
    }

    /*Only Special Chosen*/
    else if (!trueUppercase && !trueLowercase && !trueNumbers && trueSpecialcase) {
        for (i = 0; i < passLength; i++) {
            var randomNumber = Math.floor(Math.random() * specialcase.length);
            newPassword += specialcase[randomNumber];
        }
    }

    /*Only Numbers Chosen*/
    else if (!trueUppercase && !trueLowercase && trueNumbers && !trueSpecialcase) {
        for (i = 0; i < passLength; i++) {
            var randomNumber = Math.floor(Math.random() * numbers.length);
            newPassword += numbers[randomNumber];
        }
    }  

    /* Multiple Chosen*/
    else if (trueUppercase || trueLowercase || trueNumbers || trueSpecialcase) {
        for (i = 0; i < passLength; i++){
            if (trueUppercase) {
                var randomNumber = Math.floor(Math.random() * uppercase.length);
                newPasswordPre += uppercase[randomNumber];
            }
            if (trueLowercase) {
                var randomNumber = Math.floor(Math.random() * lowercase.length);
                newPasswordPre += lowercase[randomNumber];
            }
            if (trueNumbers) {
                var randomNumber = Math.floor(Math.random() * numbers.length);
                newPasswordPre += numbers[randomNumber];
            }
            if (trueSpecialcase) {
                var randomNumber = Math.floor(Math.random() * specialcase.length);
                newPasswordPre += specialcase[randomNumber];
            }
        }

        for (i = 0; i < passLength; i++){
            var randomNumber = Math.floor(Math.random() * newPasswordPre.length);
            newPassword += newPasswordPre[randomNumber];
        }
    }

    /* Nothing Chosen */
    else {
        alert('Please choose at least ONE character type.')
        generatePassword();
    }



return newPassword;
}




// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
