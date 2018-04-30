// write this first


// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


let Letter = function (character) {
  // A string value to store the underlying character for the letter
  this.character = character.toUpperCase();
  // A boolean value that stores whether that letter has been guessed yet
  this.letterGuessed = false;
  // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
  this.displayCharacter = function () {
    if (this.letterGuessed) {
      console.log(this.character);
    } else {
      console.log('_');
    }
  };
};

// Test
// var letter1 = new Letter ("c");
// letter1.displayCharacter();


// export Letter constructor
module.exports = Letter
;