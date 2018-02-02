//===========
// Model
//===========

// Parent class to instantiate 4 'crystal#' objects
class Crystal {

  constructor() {
    this._pointValue;
    this.newPointValue();
  }
  
  get pointValue() {
    return this._pointValue;
  }

  newPointValue() {
    this._pointValue = Math.floor((Math.random() * 12) + 1); // Between 1-12
  }
}

// Parent class to instantiate game object
class Game {

  constructor() {
    this._playerScore = 0;
    this.winCount = 0;
    this.lossCount = 0;
    this.randomNumber;
    this.generateRandomNumber();
  }

  set playerScore(pointsToAdd) {
    if (typeof pointsToAdd === 'number') {
      this._playerScore += pointsToAdd;
    } else {
      console.log(`Invalid argument. '${pointsToAdd}' is not a number`);
    }
  }

  get playerScore() {
    return this._playerScore;
  }

  generateRandomNumber() {
    let number = Math.floor((Math.random() * 102) + 19); // between 19-120
    this.randomNumber = number;
  }

  incrementWinCount() {
    this.winCount++;
  }

  incrementLossCount() {
    this.lossCount++;
  }

  didUserWin() {
    if (this._playerScore === this.randomNumber) return true;
    else return false;
  }

  didUserLose() {
    if (this._playerScore > this.randomNumber) return true;
    else return false;
  }

  startNewRound() {
    this._playerScore = 0;
    this.generateRandomNumber();
  }
}

//===========
// View 
//===========

const DOM = {
  render(component) {

    switch (component) {

      case 'score':
        $("#js-score").text(crystalGameProps.playerScore);
        break;

      case 'winCount':
        $("#js-win-count").text(crystalGameProps.winCount);
        break;

      case 'lossCount':
        $("#js-loss-count").text(crystalGameProps.lossCount);
        break;

      case 'randomNumber':
        $("#js-random-number").text(crystalGameProps.randomNumber);
        break;

      case 'newRound':
        $("#js-random-number").text(crystalGameProps.randomNumber);
        $("#js-score").text(crystalGameProps.playerScore);
        break;

      default:
        console.log(`Error: ${component} did not render to DOM.`);
        break;
    }
  }
};

//===========
// Controller
//===========

const gameEngine = {

  controller(crystalClicked) {

    // Add crystal's point value to score
    switch(crystalClicked) {

      case 'crystal1':
        crystalGameProps.playerScore = crystal1.pointValue;
        DOM.render('score');
        break;

      case 'crystal2':
        crystalGameProps.playerScore = crystal2.pointValue;
        DOM.render('score');
        break;

      case 'crystal3':
        crystalGameProps.playerScore = crystal3.pointValue;
        DOM.render('score');
        break;

      case 'crystal4':
        crystalGameProps.playerScore = crystal4.pointValue;
        DOM.render('score');
        break;

      default:
        console.log(`Error: '${crystalClicked}'' is an unknown 'click' event`);
    }

    // Test if user lost
    if (crystalGameProps.didUserLose()) {
      crystalGameProps.incrementLossCount();
      DOM.render('lossCount');
      alert(`You lost that round! Try again!`);
      this.newRound();
    }

    // Test if user won
    if (crystalGameProps.didUserWin()) {
      crystalGameProps.incrementWinCount();
      DOM.render('winCount');
      alert(`You won that round! Great Job!`);
      this.newRound();
    }
  },

  newRound() {
    crystalGameProps.startNewRound();
    crystal1.newPointValue();
    crystal2.newPointValue();
    crystal3.newPointValue();
    crystal4.newPointValue();
    DOM.render('newRound');
  }
};

// Shorthand for $( document ).ready(function() {...});
$(function() {

  gameEngine.newRound();

  $("#js-crystal-1").on('click', () => {
    gameEngine.controller("crystal1");
  });

  $("#js-crystal-2").on('click', () => {
    gameEngine.controller("crystal2");
  });

  $("#js-crystal-3").on('click', () => {
    gameEngine.controller("crystal3");
  });

  $("#js-crystal-4").on('click', () => {
    gameEngine.controller("crystal4");
  });
});

// Instantiate crystal objects
const crystal1 = new Crystal();
const crystal2 = new Crystal();
const crystal3 = new Crystal();
const crystal4 = new Crystal();

// Instantiate game object
const crystalGameProps = new Game();
