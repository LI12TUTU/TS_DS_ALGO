function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    // if (obstacleGrid[0][i] === 1) {
    //   for (; i < n; i++) dp[0][i] = 0
    // } else {
    //   dp[0][i] = 1
    // }
    if (obstacleGrid[0][i] === 1) break
    dp[0][i] = 1
  }
  for (let i = 0; i < m; i++) {
    // if (obstacleGrid[i][0] === 1) {
    //   for (; i < m; i++) dp[i][0] = 0
    // } else {
    //   dp[i][0] = 1
    // }
    if (obstacleGrid[i][0] === 1) break
    dp[i][0] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // if (obstacleGrid[i][j] === 1) dp[i][j] = 0
      if (obstacleGrid[i][j] === 1) continue
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}
