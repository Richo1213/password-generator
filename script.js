// // // Assignment Code
// // var generateBtn = document.querySelector("#generate");

// // variables internas
var charsLower = "abcdefghijklmnopqrstuvwxyz"
var lower= charsLower.split('');
var charsUpper = charsLower.toUpperCase()
var upper=charsUpper.split('');
var charsNumbers = "0123456789"
var numbers=charsNumbers.split('');
var charsSpecial = "!@#$%^&*()_+"
var special=charsSpecial.split('');
// // TODO from user prompt

 function userOptions () {
   console.log ("button is working")
   var length =  parseInt(prompt ("how many characters") );
   if (isNaN(length) === true) {
      alert ("password length must be a number")
     return
    }
    if (length <8 || length > 128) {
      alert ("password length must be < 8 and > 128")
      return
   }
   var lowerConfirm = confirm("Do you want it to contain lower case characters?");
   
   // Check if upper
   var upperConfirm = confirm("Do you want it to contain upper case characters?");
   
  // Check if special
  var specialConfirm = confirm("Do you want it to contain special case characters?");
   
    //Check if numeric
   var numericConfirm = confirm("Do you want it to contain numbers?");
   var userOptions={
    userLength:length,
    expectLowercaseChars:lowerConfirm,
    expectUppercaseChars:upperConfirm,
    expectNumericChars:numericConfirm,
    expectSpecialChars:specialConfirm
    

  }

 
  // Check that at least one is true
  if (lowerConfirm == true || upperConfirm == true || specialConfirm == true || numericConfirm == true){
      alert("Great! You have selected one or more of the prompts to create your password!");
  }

  
   else {
      alert("Select one of the choices to generate your password!");
       getUserOptions();
   }
       
   return userOptions;

  }

  function generatePassword(){
    
    var UserAnswers= userOptions();

    var finalCharacters=[];
                  // 0,1,2,3,4,5,6,7,8,9,10       
    var endPassword=[];

      // If lower
      if (UserAnswers.expectLowercaseChars){
        // add lowerCharsArray to userOptionalChars
          finalCharacters=finalCharacters.concat(lower);
        }

        // If upper
        if (UserAnswers.expectUppercaseChars){
          // add lowerCharsArray to userOptionalChars
            finalCharacters=finalCharacters.concat(upper);
          }

          if (UserAnswers.expectNumericcaseChars){
            // add lowerCharsArray to userOptionalChars
              finalCharacters=finalCharacters.concat(numbers);
            }

            if (UserAnswers.expectSpecialcaseChars){
              // add lowerCharsArray to userOptionalChars
                finalCharacters=finalCharacters.concat(special);
              }
       

              for(var i=0;i<UserAnswers.userLength;i++){
                  var index=Math.floor(Math.random()*finalCharacters.length);
                  var finalCharacter =finalCharacters[index];
                  endPassword.push(finalCharacter);
              }

              return endPassword.join('');
            }
   //Utilizar objeto useranswers para anadir arrays de caracteres a finalCharacters usando if y else, (array.concat method)
   //randomzizar final characters con un for loop de acuerdo al useranswers.length esto lo vas a meter a endpassword
   //vas a convertir el endpassword en un string
//Array.join



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

// Add event listener to generate button

  }
 
  var generateBtn = document.querySelector('#generate');

  generateBtn.addEventListener('click', writePassword);








// // TODO userLower/userUpper/userNums/userSpecial from confirm boxes.
// // if else statements
// // build the random picker string based on user prompts
// // var charSet =( userLower ? charsLower : '' )
// //             +( userUpper ? charsUpper : '' )
// //             +( userNums  ? charsNumbers : '' )
// //             +( userSpecial ? charsSpecial : '' )



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


//   // generate the string
// var password = ""
// for( var i=0; i<userLength; i++ ){
//     var charPick = Math.floor(Math.random()*charSet.length)
//     password += charSet[charPick]

// }
// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// // now plug this into the DOM


