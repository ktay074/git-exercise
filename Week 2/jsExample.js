


// function myFirstFunction() {
//     console.log('I just called my first function');
// }

// myFirstFunction (); 


// function greeter (string1, string2) {
//     console.log("It is " + string1 + " and " + string2 + " today");
// }

// greeter ("sunny", "windy");


// function textfunction (string1) {
//     if string1 = ""
//     console.log(false); 
//     console.log(true); 
//     return string1; 
    

// }

// textfunction ("yes");


/**
 * Write a function to find the double to a number
 * Eg, input => 10, output => 20
 */
//  function doubleNum(num) {
//     return num * 2;
//   }
//   const doubleNum1 = (num) => {
//     return num * 2;
//   }
//   const doubleNum2 = (num) => num * 2;
//   // We can remove the () if there is only one parameter.
//   const doubleNum3 = num => num * 2;
//  Using an escape character "\" to escape the string

// const firstSentence = "The exact phrase used was \"There is no way we will get there in time.\" "
// const secondSentence = 'Jane\'s favourite \
// class is English '

// console.log (firstSentence)
// console.log (secondSentence)

// console.log (firstSentence.length)

// const firstPart = " \"Concentrate all your thoughts" 
// const secondPart = "upon the work in hand. The sun\'s rays do not burn"
// const thirdPart = "until brought to a focus.\""
// const fourthPart = "- Alexander Graham Bell" 

// const combinedSentence = (firstPart + " " + secondPart + " " + thirdPart + " " + fourthPart)

// console.log (combinedSentence)
// console.log (combinedSentence.length) 


// My version 

// const userSentence = prompt("Enter a sentence");

// function messageCaseConverter (userSentence)  {
   
//     trimmedSentence = userSentence.trim(); 

//     if (trimmedSentence.length <= 10)  {
//         replyString = (trimmedSentence.toUpperCase());
        
//     }   
//     else if (trimmedSentence.length > 10) {
//         replyString = (trimmedSentence.toLowerCase());
        

//     }

//     console.log (replyString)

// }

// messageCaseConverter (userSentence)


// Sebin's version

// inputString = ‘   HeLlO EverYone    ‘
function messageCaseConverter(inputString) {
    const trimmedInputString = inputString.trim(); // 'HeLlO EverYone'
    const length = trimmedInputString.length;
    // If the length of the string is <= 10, return the uppercase version of the string
    if (length <= 10) {
      return trimmedInputString.toUpperCase();
    } else if (length > 10) {
      return trimmedInputString.toLowerCase();
    }
  }
  
  //  Prompt the user to enter a sentence and store the value in a variable .
  const userInput = prompt('Please enter a sentence');
  
  // Call the messageCaseConverter function and alert out the string returned
  const messageToUser = messageCaseConverter(userInput);
  alert(messageToUser);
