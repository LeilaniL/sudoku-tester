import { Sudoku } from '../src/sudoku.js';
import { createGrid } from './../src/gridmaker.js'


describe("Sudoku", () => {
  let blankPuzzle;
  let goodPuzzle;
  let badPuzzle;

  beforeEach(() => {
    blankPuzzle = new Sudoku();
    goodPuzzle = new Sudoku();
    badPuzzle = new Sudoku();

    let goodPuzzleGrid = [
      [1, 5, 2, 4, 8, 9, 3, 7, 6],
      [7, 3, 9, 2, 5, 6, 8, 4, 1],
      [4, 6, 8, 3, 7, 1, 2, 9, 5],
      [3, 8, 7, 1, 2, 4, 6, 5, 9],
      [5, 9, 1, 7, 6, 3, 4, 2, 8],
      [2, 4, 6, 8, 9, 5, 7, 1, 3],
      [9, 1, 4, 6, 3, 7, 5, 8, 2],
      [6, 2, 5, 9, 4, 8, 1, 3, 7],
      [8, 7, 3, 5, 1, 2, 9, 6, 4]
    ];

    let badPuzzleGrid = [
      [1, 5, 2, 3, 8, 9, 3, 7, 6],
      [7, 3, 9, 2, 5, 6, 8, 4, 1],
      [4, 6, 8, 3, 7, 1, 3, 9, 5],
      [3, 8, 6, 1, 2, 4, 6, 5, 9],
      [5, 9, 1, 7, 6, 3, 6, 2, 8],
      [2, 4, 6, 8, 9, 5, 7, 1, 3],
      [9, 1, 4, 6, 3, 7, 5, 8, 2],
      [3, 2, 5, 9, 4, 8, 3, 3, 7],
      [8, 7, 3, 5, 1, 2, 9, 6, 4]
    ];

    goodPuzzle.setData(goodPuzzleGrid);
    badPuzzle.setData(badPuzzleGrid);
  });


  it('should start as an empty 9x9 array', () => {
    expect(blankPuzzle.data.length).toEqual(9);
    expect(blankPuzzle.data[0].length).toEqual(9);
  });
  //test
  it('should have a setData() method that takes a 9x9 grid as new data', () => {
    let grid = createGrid(9, 9, 3);
    blankPuzzle.setData(grid);
    expect(blankPuzzle.data).toEqual(grid);
  });

  it('should only accept a 9x9 grid for setData()', () => {
    let badGrid = "potato";
    blankPuzzle.setData(badGrid);
    expect(blankPuzzle.data).not.toEqual(badGrid);

    badGrid = createGrid(10, 10, 4);
    blankPuzzle.setData(badGrid);
    expect(blankPuzzle.data).not.toEqual(badGrid);
  });

  it('should only accept numerical data for setData()', () => {
    let badGrid = createGrid(9, 9, "cats");
    blankPuzzle.setData(badGrid);
    expect(blankPuzzle.data).not.toEqual(badGrid);
  });

  it('should only accept values in the range of 1-9 for setData()', () => {
    let badGrid = createGrid(9, 9, 4);
    badGrid[5][5] = 7590;
    blankPuzzle.setData(badGrid);
    expect(blankPuzzle.data).not.toEqual(badGrid);
  });

  it('should have a checkRow() method that returns false if a row has duplicate numbers', () => {
    expect(badPuzzle.checkRow(0)).toEqual(false);
    expect(goodPuzzle.checkRow(0)).toEqual(true);
  });

  it('should have a checkColumn() method that returns false if a column has duplicate numbers', () => {
    expect(badPuzzle.checkColumn(0)).toEqual(false);
    expect(goodPuzzle.checkColumn(0)).toEqual(true);
  });

  it('should have a validate() method that checks if every row and column in the puzzle is legal', () => {
    expect(badPuzzle.validate()).toEqual(false);
    expect(goodPuzzle.validate()).toEqual(true);
  });

});

