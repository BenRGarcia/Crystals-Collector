//===========
// Model
//===========

// Parent class to instantiate 4 'crystal#' objects
class Crystal {

  constructor() {
    this._pointValue;
    newPointValue();
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
    generateRandomNumber();
  }

  set playerScore(points) {
    if (typeof points === 'number') {
      this._playerScore += points;
    } else {
      console.log(`Invalid argument. '${points}' is not a number`);
    }
  },

  get playerScore() {
    return this._playerScore;
  },

  generateRandomNumber() {
    let number = Math.floor((Math.random() * 102) + 19); // between 19-120
    this.randomNumber = number;
  },

  incrementWinCount() {
    this.winCount++;
  },

  incrementLossCount() {
    this.lossCount++;
  },

  didUserWin() {
    if (this._playerScore === randomNumber) return true;
    else return false;
  },

  didUserLose() {
    if (this._playerScore > randomNumber) return true;
    else return false;
  },

  startNewRound() {
    this._playerScore = 0;
    this.generateRandomNumber();
  }
}

// Instantiate crystal objects
const crystal1 = new Crystal();
const crystal2 = new Crystal();
const crystal3 = new Crystal();
const crystal4 = new Crystal();

// Instantiate game object
const crystalGameProps = new Game();

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

    if (/*crystal1 was clicked*/) {
      // add point value of crystal1 to score
    }

    if (/*crystal1 was clicked*/) {
      // add point value of crystal1 to score
    }

    if (/*crystal1 was clicked*/) {
      // add point value of crystal1 to score
    }

    if (/*crystal1 was clicked*/) {
      // add point value of crystal1 to score
    }

    // test if user lost
      // if yes, alert user to lost round, increment loss and start new round

    // test if user won
      // if yes, alert user to win, increment win and start new round

  }
};

$(document).ready( () => {

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
