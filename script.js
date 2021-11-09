// Assignment Code
//Select button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Code to ask the user questions about the complexity of the password to be generated

function writePassword() {

  //Ask the user the password length (using function above called WritePassword) - what is the difference between while and else if?

  var length = window.prompt ("Enter password length between 8 and 128 characters")
  while (length <= 7 || length > 128){
    var length = window.prompt("Please pick a number between 8 and 128 characters")
  }
  //Ask the user if he wants upper case

  var uppercase = window.prompt("Do you wish to include uppercase letters? Choose (Y / N)").toLowerCase()
  while (uppercase != "y" && uppercase != "n"){
    var uppercase = window.prompt("Please enter Y or N to select uppercase letters")
  }

  //Ask the user if he wants lower case

  var lowercase = window.prompt("Do you wish to include lowercase letters? Choose (Y / N)").toLowerCase()
  while (lowercase != "y" && lowercase != "n"){
    var lowercase = window.prompt("Please enter Y or N to select lowercase letters")
  }

  //Ask the user if he wants special characters

  var specialchars = window.prompt("Do you wish to include special characters? Choose (Y / N)").toLowerCase()
  while (specialchars != "y" && specialchars != "n"){
    var specialchars = window.prompt("Please enter Y or N to select lowercase letters")
  }

  //Ask the user if he wants numbers

  var numbers = window.prompt("Do you wish to include numbers? Choose (Y / N)").toLowerCase()
  while (numbers != "y" && numbers != "n"){
    var numbers = window.prompt("Please enter Y or N to select lowercase letters")
  }

  //include all the variables that were selected above

  var password = generatePassword(length, uppercase, lowercase, specialchars, numbers);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(length, uppercase, lowercase, specialchars, numbers) {
  var password = ''

    //includes uppercase, lowercase, special characters & numbers
    
    //If all four answers are no - validate at least one selection was made

    if (uppercase == 'n' && lowercase == 'n' && specialchars == 'n' && numbers == 'n'){
      choices = alert("You must choose at least one Yes criteria");
    }

    //If all four answers are yes

    else if (uppercase =='y' && lowercase == 'y' && specialchars == 'y' && numbers == 'y'){
      var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&()*+,-./:;<=>?@^_`{|}~1234567890'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
      
    }
    return password

    //If three answers are yes

  }else if (uppercase =='y' && lowercase == 'y' && specialchars == 'y' && numbers == 'n'){
      var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&()*+,-./:;<=>?@^_`{|}~'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
      
    }
    return password

  }else if (uppercase =='y' && lowercase == 'y' && specialchars == 'n' && numbers == 'y'){
      var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
    
    }
    return password

  }else if (uppercase =='y' && lowercase == 'n' && specialchars == 'y' && numbers == 'y'){
      var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@^_`{|}~1234567890'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
    
    }
    return password

  }else if (uppercase =='n' && lowercase == 'y' && specialchars == 'y' && numbers == 'y'){
      var character = 'abcdefghijklmnopqrstuvwxyz!"#$%&()*+,-./:;<=>?@^_`{|}~1234567890'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
  
    }
    return password
    
    //If two answers are yes

  }else if (uppercase =='y' && lowercase == 'y' && specialchars == 'n' && numbers == 'n'){
      var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
    
    }
    return password

  }else if (uppercase =='n' && lowercase == 'n' && specialchars == 'y' && numbers == 'y'){
      var character = '!"#$%&()*+,-./:;<=>?@^_`{|}~1234567890'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
    
    }
    return password

  }else if (uppercase =='y' && lowercase == 'n' && specialchars == 'n' && numbers == 'y'){
      var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
    
    }
    return password

  }else if (uppercase =='n' && lowercase == 'y' && specialchars == 'y' && numbers == 'n'){
      var character = 'abcdefghijklmnopqrstuvwxyz!"#$%&()*+,-./:;<=>?@^_`{|}~'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]

    }
    return password

  }else if (uppercase =='y' && lowercase == 'n' && specialchars == 'y' && numbers == 'n'){
      var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@^_`{|}~'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
  
    }
    return password

  }else if (uppercase =='n' && lowercase == 'y' && specialchars == 'n' && numbers == 'y'){
      var character = 'abcdefghijklmnopqrstuvwxyz1234567890'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]

    }
    return password
  
      //If one answer is yes
  
  
  }else if (uppercase =='y' && lowercase == 'n' && specialchars == 'n' && numbers == 'n'){
      var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
    
    }
    return password

  }else if (uppercase =='n' && lowercase == 'y' && specialchars == 'n' && numbers == 'n'){
      var character = 'abcdefghijklmnopqrstuvwxyz'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]

    }
    return password

  }else if (uppercase =='n' && lowercase == 'n' && specialchars == 'y' && numbers == 'n'){
      var character = '!"#$%&()*+,-./:;<=>?@^_`{|}~'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]
  
    }
    return password

  }else if (uppercase =='n' && lowercase == 'n' && specialchars == 'n' && numbers == 'y'){
      var character = '1234567890'

      for (let i = 0; i < length; i++) {
        password += character[Math.floor(Math.random() * character.length)]

    }
    return password
  
  }

}

//Items to do:
//1) make the cancel button reset the page - cancel button does not work
//2) how can I ensure that if they say yes to all criteria, it must contain at least one upper, one lower, one number and one special?
//  2 a) use https://www.net-comber.com/charset.html for javascript character set. Example: lowercase is from   97 to 122. Right now I have chosen the characters to use.
//3) how can I use the javascript characters represented by a number, instead of specifically defining those characters?
//4) if they say no to all, how do I get this to restart at select length?
//5) how can I use an array to define possibilities, rather than individually listing out each possible character set?
//6) How can I ensure to use the whole special character set? I tried to use in characters and had to remove brackets and apostophe " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" (some of these are missing)
//7)If all four answers are no - send error message - can we make this restart to prompt 1?


