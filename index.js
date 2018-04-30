const Word = require('./word.js');

const inquirer = require('inquirer');

// npm package for determining if the user enters a letter of not (form validation).
const isLetter = require('is-letter');

// When user guesses correctly, set this variable to true for the given letter. default value is false
const userGuessedCorrectly = false;


const wordList = ['chrome', 'firefox', 'codepen', 'javascript', 'jquery',
  'twitter', 'github', 'wordpress', 'opera', 'sass', 'layout', 'standards',
  'semantic', 'designer', 'developer', 'module', 'component', 'website',
  'creative', 'banner', 'browser', 'screen', 'mobile', 'footer', 'header',
  'typography', 'responsive', 'programmer', 'css', 'border',
  'gulp', 'pixel', 'document', 'object', 'modernizr', 'bootstrap', 'react',
  'pattern', 'ajax', 'node', 'element', 'android', 'application', 'adobe',
  'apple', 'google', 'microsoft', 'bookmark', 'internet', 'icon', 'svg',
  'background', 'property', 'syntax', 'html', 'font', 'blog',
  'network', 'server', 'content', 'database', 'socket',
  'function', 'variable', 'link', 'stylus', 'query', 'proxy',
  'email', 'underscore', 'cloud'];

  // choose random word from wordList.

let randomWord;
let selectedWord;

// counters for wins. losses, and remaining guesses
const wins = 0;
const losses = 0;
const guesses = 7;

// create a varaible to hold the letter that user enters at the inquirer prompt.
const userGuess = '';

// creating a variable to hold letters user already guessed.
const lettersAlreadyGuessedList = '';
const lettersAlreadyGuessedListArray = [];

// Number of underscores/slots filled in with a letter.
// When the game starts or is reset, this value should be 0.
const slotsFilledIn = 0;

// Use inquirer package to display game confirmation prompt to user.
function confirmStart() {
  const readyToStartGame = [
    {
      type: 'text',
      name: 'playerName',
      message: 'What is your name?',
    },
    {
      type: 'confirm',
      name: 'readyToPlay',
      message: 'Are you ready to play Word Guess?',
      default: true,
    },
  ];

  inquirer.prompt(readyToStartGame).then((answers) => {
    // if user confirms to play, start game.
    if (answers.readyToPlay) {
      console.log(`Great! Welcome ${answers.playerName} Let us begin...`);
      startGame();
    } else {
      // If the user declines to play, exit game.
      console.log(`Okay, Good bye  ${answers.playerName}`);
    }
  });
}

// Start game function.
function startGame() {
  // Reset # of guesses remaining when user begins a new game.
  guessesRemaining = 7;
  // pick random word from word list.
  chooseRandomWord();
  // When game is reset, empty out list of already guessed letters.
  lettersAlreadyGuessedList = '';
  lettersAlreadyGuessedListArray = [];
}

// choose random word from list of cities in word bank array function

function chooseRandomWord() {
  // Randomly generate word from wordList array.
  randomWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
  // Set the random word chosen from the word list to someWord
  selectedWord = new Word(randomWord);
  // Tell the user how many letters are in the word.
  console.log(`Your word contains ${randomWord.length} letters`);
  console.log('Word to Guess:');
  // Use the Word constructor in Word.js to split the word and generate letters.
  selectedWord.splitWord();
  selectedWord.generateLetters();
  guessLetter();
}
// function that will prompt the user to enter a letter. This letter is the user's guess.
function guessLetter() {
  // Keep prompting user to enter a letter if underscores or if there are guessesRemaining
  if (slotsFilledIn < someWord.letters.length || guessesRemaining > 0) {
    inquirer.prompt([
      {
        name: 'letter',
        message: 'Guess a letter:',
        // check if value is a letter
        validate(value) {
          if (isLetter(value)) {
            return true;
          }

          return false;
        },
      },
    ]).then((guess) => {
      // Convert to Upper Case
      guess.letter.toUpperCase();
      console.log(`You guessed: ${guess.letter.toUpperCase()}`);
      // Assume correct guess to be false at this point
      userGuessedCorrectly = false;
      // determine if letter was previously guessed. If true, notify the user to enter different letter

      if (lettersAlreadyGuessedListArray.indexOf(guess.letter.toUpperCase() > -1)) {
        // If user already guessed a letter, run inquirer again to prompt them to enter a different letter.
        console.log('You already guessed that letter. Try a different letter');
        guessLetter();
      }
      // If user entered a letter that was not already guessed...
      else if (lettersAlreadyGuessedListArray.indexOf(guess.letter.toUpperCase()) === -1) {
        // Add letter to list of already guessed letters.
        lettersAlreadyGuessedList = lettersAlreadyGuessedList.concat(` ${  guess.letter.toUpperCase()}`);
        lettersAlreadyGuessedListArray.push(guess.letter.toUpperCase());
        // Show letters already guessed to user
        console.log(`Letters already guessed: ${lettersAlreadyGuessedList}`);

        // loop through all of the letters in the word, determin if the user guess matches
        // any letter in the word.
        for (i = 0; i < selectedWord.letters.length; i++) {
          // If the user guess equals one of the letters/characters in the word and letterGuessedCorrectly
          // is equal to false for that letter...
          if (guess.letter.toUpperCase() === someWord.letters[i].character && someWord.letters[i].letterGuessedCorrectly === false) {
            // Set letterGuessedCorrectly property for that letter equal to true.
            someWord.letters[i].letterGuessedCorrectly === true;
            // set userGuessedCorrectly to true.
            userGuessedCorrectly = true;
            selectedWord.underscores[i] = guess.letter.toUpperCase();
            // someWord.underscores.join("");
            // console.log(someWord.underscores);
            // Increment the number of slots/underscores filled in with letters by 1
            slotsFilledIn++;
            console.log(`Number of slots remaining ${slotsFilledIn}`);
          }
        }
        console.log('Word To Guess:');
        selectedWord.splitWord();
        selectedWord.generateLetters();

        // If the user guessed correctly...
        if (userGuessedCorrectly) {
          // Tell user they are correct
          console.log('CORRECT!');
          // check if user won
          checkIfUserWon();
        }

        // Else if user guessed incorrecly...
        else {
          // Tell user they are incorrect
          console.log('INCORRECT');
          // Decrease # of guesses remaining by 1 and display # of guesses remaining
          guessesRemaining--;
          console.log(`You have ${guessesRemaining} guesses left.`);
          // check if user won
          checkIfUserWon();
        }
      }
    });
  }
}


// check if the user won or lost after user guess
function checkIfUserWon() {
  // If number of guesses remaining is 0, end game.
  if (guessesRemaining === 0) {
    console.log('You Lost. Better Luck Next Time.');
    console.log(`The word was ${randomWord}`);
    // Increment loss counter by 1
    losses++;
    // Display wins and losses totals
    console.log(`Wins: ${wins}`);
    console.log(`Losses: ${losses}`);
    // playAgain()
  }
  // else if # of slots/underscores that are filled in with a letter equals the number of letters in the word,
  // The user won.
  else if (slotsFilledIn === selectedWord.letters.length) {
    console.log('You Won!');
    // Increment win counter by 1.
    wins++;
    // Display wins and losses totals
    console.log(`Wins: ${wins}`);
    console.log(`Losses: ${losses}`);
    //  playAgain()
  } else {
    // If user did not win or lose, keep running inquirer.
    guessLetter('');
  }
}

// Create a function that will ask user if they want to play again at the end of the game.
// function playAgain() {
//   var playGameAgain = [
//     {
//       type: 'confirm',
//       name: 'playAgain',
//       message: 'Do you want to play again?',
//       default: true
//     }
//   ];
//   inquirer.prompt(playGameAgain).then(userWantsTo => {
//     if (userWantsTo.playAgain){
//       //Empty out the array that contains the letters already guessed.
//       lettersAlreadyGuessedList = ""

