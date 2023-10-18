from typing import *
from functools import cache

class Solution:
    def paintWalls(self, cost: List[int], time: List[int]) -> int:
      n = len(cost)
      @cache
      def solve(i, rest): 
        if rest <= 0: 
          return 0

        if i == n: 
          return float('inf')
        
        paint = cost[i] + solve(i + 1, rest - 1 - time[idx])
        dontPaint = solve(i + 1, rest)

        return min(paint, dontPaint)

      return solve(1, n)


cost = [1, 2, 3, 2]
time = [1, 2, 3, 2]

sol = Solution()
val = sol.paintWalls(cost, time)
print(val)




