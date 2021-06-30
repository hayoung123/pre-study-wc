class BoardSquare {
  constructor({ row, col, value }) {
    this.$target;
    this.row = row;
    this.col = col;
    this.value = value;
    this.init();
  }
  init() {
    this.$target = this.render();
  }
  render() {
    const value = this.value === 1 ? 'O' : this.value === 0 ? 'X' : '';
    return `<div data-row=${this.row} data-col=${this.col}>
                ${value}
            </div>`;
  }
}

export default BoardSquare;
