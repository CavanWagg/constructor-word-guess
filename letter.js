// write this first

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


// letter constructor
function Letter(string) {
  this.string = string;
  this.visible = !/[a-z1-9]/i.test(string);

}
Letter.prototype.toString = function() {
  if (this.visible === true) {
    return this.string;
  } 
  return "_";
}

Letter.prototype.getSolution = function() {
  return this.string;
}

Letter.prototype.checkGuess = function() {
  if (userGuess == this.string)
}

//split words up map through them. for each character, new letter, 
