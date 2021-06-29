import { createElement } from '../../util/util.js';

class Score {
  constructor({ scoreModel, turnModel }) {
    this.$target;
    this.scoreModel = scoreModel;
    this.turnModel = turnModel;
    this.init();
  }
  init() {
    this.scoreModel.subscribe(this.render);
    this.turnModel.subscribe(this.render);
    this.$target = createElement({ tagName: 'div', className: ['score__container'] });
    this.render();
  }
  render() {
    const score = this.scoreModel.getScore();
    const turn = this.turnModel.getTurnState();
    this.$target.innerHTML = this.getElement({ score, turn });
  }
  getElement({ score, turn }) {
    const currentTurn = turn ? turn : this.turnModel.getTurnState();
    return `<div class='score'>
                <div>${score.home}</div>
                <div class="score__colon">:</div>
                <div>${score.away}</div>
                <div class="turn ${currentTurn ? 'turn__left' : 'turn__right'}"></div>
            </div>
            `;
  }
}

export default Score;
