import Observable from '../util/observer.js';

class ScoreModel extends Observable {
  constructor() {
    super();
    this.score = { home: 0, away: 0 };
  }
  getScore() {
    return this.score;
  }
  setScore(newScore) {
    this.score = newScore;
    this.notify();
  }
  resetScore() {
    this.score = { home: 0, away: 0 };
    this.notify();
  }
}

export default ScoreModel;
