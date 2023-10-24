var maxMoves = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  // Initialize the dp array with zeros
  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }

  // Loop through the grid column by column, right to left
  for (let j = n - 2; j >= 0; j--) {
    for (let i = 0; i < m; i++) {
      // Initialize the maximum moves from this cell to be 0
      dp[i][j] = 0;

      // Check the three possible moves (up, down, and stay in the same row)
      for (let k = -1; k <= 1; k++) {
        const newRow = i + k;
        if (newRow >= 0 && newRow < m && grid[newRow][j + 1] > grid[i][j]) {
          dp[i][j] = Math.max(dp[i][j], 1 + dp[newRow][j + 1]);
        }
      }
    }
  }

  // Find the maximum value in the first column (starting positions)
  let maxResult = 0;
  for (let i = 0; i < m; i++) {
    maxResult = Math.max(maxResult, dp[i][0]);
  }

  return maxResult;
};

const grid1 = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]];
console.log(maxMoves(grid1)); // Output: 3

const grid2 = [[3, 2, 4], [2, 1, 9], [1, 1, 7]];
console.log(maxMoves(grid2)); // Output: 0

