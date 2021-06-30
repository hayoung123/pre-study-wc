import Observable from '../util/observer.js';

class TurnModel extends Observable {
  constructor() {
    super();
    this.turn = true; //true - HOME Ture
  }
  getTurn() {
    return this.turn;
  }
  setTurnOver() {
    this.turn = !this.turn;
    this.notify();
  }
  resetTurn() {
    this.turn = true;
    this.notify();
  }
}

export default TurnModel;
