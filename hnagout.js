let readLine = require('readline-sync');
let dictionary = ['cica', 'macska', 'kutya', 'tigris', 'kenguru', 'antilop'];
let word = 0;
let guessedWord = [];
let life = 0;

const generateWord = (tomb) => {
  word = dictionary[Math.floor(Math.random() * dictionary.length)];
  for (let i = 0; i < word.length; i++) {
    guessedWord.push('_');
  }
  console.log(word);
  life = Math.floor(word.length / 2);
};
const printGame = (str) => {
  for (let i = 0; i < word.length; i++) {
    process.stdout.write(guessedWord[i] + ' ');
  }
  console.log('Életeid:', life);
};
const isSolved = (Boolean) => {
  for (let i = 0; i < guessedWord.length; i++) {
    if (guessedWord[i] === '_') {
      return false;
    } else {
      return true;
    }
  }
};
const makeGuess = (e) => {
  for (let i = 0; i < guessedWord.length; i++) {
    if (guessedWord[i] === e) {
      guessedWord[i] = e;
      return true;
    } else {
      return false;
    }
  }
};
const main = (e) => {
  generateWord();
  console.log('Guess out the word!');
  printGame();
  while (life > 0) {
    if (!makeGuess(readLine.keyIn())) {
      life--;
    }
    printGame();
    if (isSolved()) {
      console.log('Nyertél!');
      break;
    }
  }
  if (life === 0) {
    console.log('Vesztettél!');
  }
};
main();
