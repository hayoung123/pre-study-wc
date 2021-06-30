import { createElement } from '../../util/util.js';
import BoardSquare from './BoardSquare.js';

class Board {
  constructor({ boardModel, turnModel, scoreModel }) {
    this.$target;
    this.boardModel = boardModel;
    this.turnModel = turnModel;
    this.scoreModel = scoreModel;
    this.isFinish = false;
    this.init();
  }
  init() {
    this.boardModel.subscribe(this.render.bind(this));
    this.$target = createElement({ tagName: 'div', className: ['board__container'] });
    this.$target.addEventListener('click', this.handleClick.bind(this));
    this.render();
  }
  render() {
    const board = this.boardModel.getBoard();
    this.$target.innerHTML = this.getElement(board);
  }
  getElement(board) {
    const boardElement = board.reduce((acc, boardRow, row) => {
      const squareList = boardRow.reduce(
        (acc, value, col) => (acc += new BoardSquare({ row, col, value }).$target),
        ''
      );

      const boardRowElement = `<div class='board__row'>${squareList}</div>`;

      return (acc += boardRowElement);
    }, '');

    return `<div class='board'>${boardElement}</div>`;
  }
  handleClick({ target: { dataset } }) {
    const board = this.boardModel.getBoard();
    const row = +dataset.row;
    const col = +dataset.col;
    const turn = this.turnModel.getTurn();

    if (this.isFinish || board[row][col]) return;

    this.boardModel.setBoard(row, col, turn);
    this.turnModel.setTurnOver();
  }
}

export default Board;
