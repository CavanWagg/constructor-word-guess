// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.
// That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function
//  on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)


const Letter = require('./Letter');

const Word = function (myWord) {
  // Take chosen word from list of words.
  this.myWord = myWord;
  // This is an array of letters which will allow us to display the number of underscores needed
  // for the chosen word
  this.underscores = [];
  // After we get a word from word list, use split to add letters
  this.splitWord = function () {
    this.letters = this.myWord.split('');
    console.log(this.letters);
    // Determine number of underscores displayed based on length of this.leters array in Word constructor.
    underscoresNeeded = this.letters.length;
    console.log(`Underscores: ${underscoresNeeded}`);

    console.log(this.underscores.join(' '));
  };
  this.generateLetters = function () {
    for (i = 0; i < this.letters.length; i++) {
      this.letters[i] = new Letter(this.letters[i]);
      this.letters[i].displayCharacter();
    }
  };
};

// test word constructor
const someWord = new Word('Burnsville');
someWord.splitWord();
someWord.generateLetters();

module.exports = Word;
