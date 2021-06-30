import { createElement } from '../../util/util.js';

class GamePlayBtn {
  constructor({ boardModel, scoreModel, turnModel }) {
    this.$target;
    this.boardModel = boardModel;
    this.turnModel = turnModel;
    this.scoreModel = scoreModel;
    this.init();
  }
  init() {
    this.$target = createElement({ tagName: 'div', className: ['playBtn__container'] });
    this.$target.addEventListener('click', this.handleBtnClick.bind(this));
    this.render();
  }
  render() {
    const playBtn = createElement({ tagName: 'div', className: ['playBtns'] });
    const newGameBtn = createElement({
      tagName: 'div',
      className: ['playBtn', 'playBtn__new'],
      value: 'NEW GAME',
    });
    const resetGameBtn = createElement({
      tagName: 'div',
      className: ['playBtn', 'playBtn__reset'],
      value: 'RESET GAME',
    });
    playBtn.appendChild(newGameBtn);
    playBtn.appendChild(resetGameBtn);
    this.$target.appendChild(playBtn);
  }
  handleBtnClick({ target }) {
    if (!target.classList.contains('playBtn')) return;

    this.boardModel.resetBoard();

    if (target.classList.contains('playBtn__new')) this.turnModel.setNewGameTurn();

    if (target.classList.contains('playBtn__reset')) {
      this.turnModel.resetTurn();
      this.scoreModel.resetScore();
    }
  }
}

export default GamePlayBtn;
