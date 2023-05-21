// This function implements the ROT13 cipher algorithm to encode or decode a given string.
function rot13(str) {
    // break up the string homie
  
    const splitArr = str.split('');
    // console.log(splitArr);
  
    // this is gonna hold our numbers
    const newArr = [];
  
    // Iterate over each character in the string
    for (let i = 0; i < splitArr.length; i++) {
  
      // Get the Unicode value of the current character
      let numChar = splitArr[i].charCodeAt(0);
  
      // Check if the character is an uppercase letter
      if (numChar > 64 && numChar < 91) {
        // Perform ROT13 encryption/decryption on uppercase letters
  
        // Subtract 13 from the Unicode value
        let deci = numChar - 13;
  
        // If the result is less than the Unicode value of 'A' (65),
        // wrap around to the end of the alphabet
        if (deci < 65) {
          let howmany = 65 - deci;
          deci = 91 - howmany;
        }
  
        // Convert the Unicode value back to a character and add it to the new array
        newArr.push(String.fromCharCode(deci));
        
      } else {
        // If the character is not an uppercase letter, leave it unchanged and add it to the new array
        newArr.push(splitArr[i]);
      }  
    }
  
    // Join the array elements into a string and return it
    return newArr.join('');
  }
  
  // Example usage: Encode the string "SERR PBQR PNZC" using ROT13
  rot13("SERR PBQR PNZC");
  