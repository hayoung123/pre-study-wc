import { createElement } from '../../util/util.js';
import BoardSquare from './BoardSquare.js';

class Board {
  constructor({ boardModel, turnModel, scoreModel }) {
    this.$target;
    this.$resultTarget;
    this.boardModel = boardModel;
    this.turnModel = turnModel;
    this.scoreModel = scoreModel;
    this.init();
  }
  init() {
    this.boardModel.subscribe(this.render.bind(this));
    this.$target = createElement({ tagName: 'div', className: ['board__container'] });

    this.$resultTarget = createElement({ tagName: 'div', className: ['game__result'] });
    this.$target.appendChild(this.$resultTarget);

    this.$target.addEventListener('click', this.handleClick.bind(this));
    this.render();
  }
  render() {
    const board = this.boardModel.getBoard();
    const turn = this.turnModel.getTurn() ? 'home' : 'away';
    const score = this.scoreModel.getScore();

    this.$target.innerHTML = this.getElement(board);
    this.$target.appendChild(this.$resultTarget);

    if (this.isFinish(board)) {
      this.$resultTarget.innerHTML = `${turn.toUpperCase()}님이 승리하셨습니다!!!`;
      this.scoreModel.setScore({ ...score, [turn]: score[turn] + 1 });
    } else {
      this.$resultTarget.innerHTML = '';
    }
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
  handleClick({ target: { classList, dataset } }) {
    if (!classList.contains('square')) return;

    const board = this.boardModel.getBoard();
    const row = +dataset.row;
    const col = +dataset.col;
    const turn = this.turnModel.getTurn();

    if (this.isFinish(board) || board[row][col] !== null) return;

    this.boardModel.setBoard(row, col, turn);
    this.turnModel.setTurnOver();
  }
  isFinish(board) {
    const CHECK_LINE = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const checkBoard = board.reduce((acc, row) => {
      acc.push(...row);
      return acc;
    }, []);

    for (const [a, b, c] of CHECK_LINE) {
      if (checkBoard[a] && checkBoard[a] === checkBoard[b] && checkBoard[b] === checkBoard[c])
        return true;
    }

    return false;
  }
}

export default Board;
