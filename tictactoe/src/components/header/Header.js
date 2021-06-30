import { createElement } from '../../util/util.js';

class Header {
  constructor() {
    this.$target;
    this.init();
  }
  init() {
    this.$target = createElement({ tagName: 'header', className: ['header'] });
    this.render();
  }
  render() {
    this.$target.innerHTML = 'TIC TAC TOE';
  }
}

export default Header;
