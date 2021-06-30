import BoardModel from './model/BoardModel.js';
import ScoreModel from './model/ScoreModel.js';
import TurnModel from './model/TurnModel.js';

import Header from './components/header/Header.js';
import Score from './components/score/Score.js';
import Board from './components/board/Board.js';
import GamePlayBtn from './components/GamePlayBtn/GamePlayBtn.js';

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
    const header = new Header().$target;
    const score = new Score({ scoreModel: this.scoreModel, turnModel: this.turnModel }).$target;
    const board = new Board({
      boardModel: this.boardModel,
      scoreModel: this.scoreModel,
      turnModel: this.turnModel,
    }).$target;
    const gamePlayBtn = new GamePlayBtn({
      boardModel: this.boardModel,
      scoreModel: this.scoreModel,
      turnModel: this.turnModel,
    }).$target;

    this.root.appendChild(header);
    this.root.appendChild(score);
    this.root.appendChild(board);
    this.root.appendChild(gamePlayBtn);
  }
}

export default App;
