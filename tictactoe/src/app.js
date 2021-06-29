import BoardModel from './model/BoardModel.js';
import ScoreModel from './model/ScoreModel.js';
import TurnModel from './model/TurnModel.js';

import Header from './components/Header.js';

class App {
  constructor() {
    this.root = document.querySelector('#root');
    this.scoreModel = new ScoreModel();
    this.boardModel = new BoardModel();
    this.turnModel = new TurnModel();
  }
  init() {
    this.root.innerHTML = this.render();
  }
  render() {
    return;
  }
}

export default App;
