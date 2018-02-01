// Variables needed
/*
 * win counter
 * loss counter
 * random number
 * player score
 * crystal 1 click point-value
 * crystal 2 click point-value
 * crystal 3 click point-value
 * crystal 4 click point-value
 * 
 */
//

// Functions needed
/*
 * increase win count
 * increase loss count
 * random point value generator (1-12 for crystals, 19-120 for random number)
 * update DOM (js-random-number ,js-score ,js-win-count js-loss-count )
 * listen for click events (js-button-1, js-button-2, js-button-3, js-button-4)
 * add value of crystal clicked to player's score
 * test if user won
 * test if user lost
 * navigate logic decisions of game play
 */
// 

// Event listeners
/*
 * listen for click events (js-button-1, js-button-2, js-button-3, js-button-4)
 */
//

// OOP thoughts
/*
 * 4 'crystals' that have the same properties, but different values
 * Sounds like inheritance
 */
//

// MVC thoughts
/*
 * View:
 *     - 1 object to handle view (DOM.render(component))
 * 
 * Model:
 *     - 1 parent class of 'crystal', 4 children objects: crystal1, crystal2...
 *       where each crystal object manages its own 'points' property value
 *       while using method from parent class to generate number
 *     - 1 object that manages game properties of random #, score, wins, losses,
 *       and required game play logic
 * 
 * Controller:
 *     - 1 object that evaluates game play logic
 * 
 */
//

//===========
// Model
//===========
class Crystal {
  constructor() {
    this._pointValue = Math.floor((Math.random() * 12) + 1);
  }
  
  // parent class for crystal objects
  /*
   * 1) method for random # between 1-12
   * 2) property/value ex.: points: 1,
   * 
   * 
   */
}

// instantiate crystal objects
const crystal1 = new Crystal();
const crystal2 = new Crystal();
const crystal3 = new Crystal();
const crystal4 = new Crystal();


// properties of the game
const gameProps = {
  _playerScore: 0,
  winCount: 0,
  lossCount: 0,
  randomNumber: 0,

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
    // between 19-120
    let number = Math.floor((Math.random() * 102) + 19);
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
};


//===========
// View 
//===========





//===========
// Controller
//===========

