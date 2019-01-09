import { createGrid } from './gridmaker.js'

export class Sudoku {
  constructor() {
    this.data = createGrid(9, 9), undefined;
  }

  setData(grid) {
    // confirm that data is good before setting

    //verify that data is a 2d array
    if (Array.isArray(grid) && Array.isArray(grid[0])) {
      //verify that grid is the right size
      if (grid.length === 9 && grid[0].length === 9) {
        //verify that data is numerical
        let numerical = grid.every((row) => {
          let rowIsNumerical = row.every((item) => {
            // return (typeof item === "number") && item > 0 && item < 10;
            if (typeof item === "number" && item > 0 && item < 10) {
              return true;
            } else {
              return false;
            }
          });
          return rowIsNumerical;
        });

        if (numerical) {
          this.data = grid;
          return true;
        }
      }
    }
    return false;
  }
  //should return false if row is not legal
  checkRow(rowNumber) {
    let rowToCheck = this.data[rowNumber];
    return this.hasNoDuplicates(rowToCheck);
  }

  checkColumn(colNumber) {
    let columnToCheck = [];
    for (let i = 0; i < 9; i++) {
      columnToCheck.push(this.data[i][colNumber]);
    }
    return this.hasNoDuplicates(columnToCheck);
  }

  //should return false if row has no duplicates
  hasNoDuplicates(array) {
    for (let i = 1; i <= 9; i++) {
      if (!array.includes(i)) {
        return false;
      }
    }
    return true;
  }

  validate() {
    for (let i = 0; i < 9; i++) {
      if (!this.checkColumn(i) || !this.checkRow(i)) {
        return false;
      }
    }
    return true;
  }
}