import { createGrid } from '../src/gridmaker.js';

describe("createGrid", () => {
  it('should return a 2d array with the specified dimensions', () => {
    let grid = createGrid(4, 4);
    expect(grid.length).toEqual(4);
    expect(grid[0].length).toEqual(4);
  });

  it('should fill grid with provided data', () => {
    let grid = createGrid(4, 4, "beans");
    grid.forEach((row) => {
      row.forEach((item) => {
        expect(item).toEqual("beans");
      })
    })
  });
});
