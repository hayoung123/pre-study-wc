import Observable from '../util/observer.js';
import { deepCloneArray } from '../util/util.js';

class BoardModel extends Observable {
  constructor() {
    super();
    this.board = Array.from(new Array(3), (x) => new Array(3).fill(null));
  }
  getBoard() {
    return this.board;
  }
  setBoard(row, col, turn) {
    const mark = turn ? 'O' : 'X';
    const board = deepCloneArray(this.board);
    board[row][col] = mark;
    this.board = board;
    this.notify();
  }
  resetBoard() {
    this.board = Array.from(new Array(3), (x) => new Array(3).fill(null));
    this.notify();
  }
}

export default BoardModel;
