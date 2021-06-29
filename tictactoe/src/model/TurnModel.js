import Observable from '../util/observer';

class TurnModel extends Observable {
  constructor() {
    super();
    this.turn = true; //true - HOME Ture
  }
  getTurnState() {
    return this.turn;
  }
  setTurnOver() {
    this.turn = !this.turn;
    this.notify(this.turn);
  }
}
