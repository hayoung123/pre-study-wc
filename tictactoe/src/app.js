import BoardModel from './model/BoardModel.js';
import ScoreModel from './model/ScoreModel.js';
import TurnModel from './model/TurnModel.js';

import Header from './components/header/Header.js';
import Score from './components/score/Score.js';

class App {
  constructor() {
    this.root = document.querySelector('#root');
    this.scoreModel = new ScoreModel();
    this.boardModel = new BoardModel();
    this.turnModel = new TurnModel();
  }
  init() {
    this.render();
  }
  render() {
    this.root.appendChild(new Header().$target);
    this.root.appendChild(
      new Score({ scoreModel: this.scoreModel, turnModel: this.turnModel }).$target
    );
  }
}

export default App;
