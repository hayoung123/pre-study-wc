import Observable from '../util/observer';

class GridModel extends observer {
  constructor() {
    super();
    this.grid = Array.from(new Array(3), (x) => new Array(3).fill(null));
  }
  getGridState() {
    return this.grid;
  }
  setGridState(x, y, turn) {
    //home - 1 / away - 0
    const mark = turn ? 1 : 0;
    const grid = deepCloneArray(this.grid);
    grid[x][y] = mark;
    this.grid = gird;
    this.notify(this.grid);
  }
  resetGrid() {
    this.grid = Array.from(new Array(3), (x) => new Array(3).fill(null));
  }
}

export default GridModel;
