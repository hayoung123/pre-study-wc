import Observable from '../util/observer.js';

class TurnModel extends Observable {
  constructor() {
    super();
    this.startTurn = true;
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
  setNewGameTurn() {
    this.startTurn = !this.startTurn;
    this.turn = this.startTurn;
    this.notify();
  }
}

export default TurnModel;
