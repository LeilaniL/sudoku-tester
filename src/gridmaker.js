export function createGrid(x, y, data = -1) {
  let grid = [];
  for (let row = 0; row < y; row++) {
    grid[row] = [];
    for (let column = 0; column < x; column++) {
      grid[row][column] = data;
    }
  }
  return grid;
}