import Observable from '../util/observer.js';

class ScoreModel extends Observable {
  constructor() {
    super();
    this.score = { home: 0, away: 0 };
  }
  getScore() {
    return this.score;
  }
  setScore(turn) {
    this.score = { ...this.score, [turn]: this.score[turn] + 1 };
    this.notify(this.score);
  }
  resetScore() {
    this.score = { home: 0, away: 0 };
  }
}

export default ScoreModel;
