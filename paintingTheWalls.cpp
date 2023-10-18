#include <iostream>
#include <vector>
using namespace std;

/*

You are given two 0-indexed integer arrays, cost and time, of size n representing the costs and the time taken to paint n different walls respectively. There are two painters available:

A paid painter that paints the ith wall in time[i] units of time and takes cost[i] units of money.
A free painter that paints any wall in 1 unit of time at a cost of 0. But the free painter can only be used if the paid painter is already occupied.
Return the minimum amount of money required to paint the n walls.

*/

int solve(int i, int rest, const int n, vector<int> const &cost, vector<int> const &time, vector<vector<int>> &memo)
{
  if (rest <= 0)
    return 0;
  if (i == n)
    return 1e9;
  if (memo[i][rest] != -1)
    return memo[i][rest];

  int paint = cost[i] + solve(i + 1, rest - 1 - time[i], n, cost, time, memo);
  int dontPaint = solve(i + 1, rest, n, cost, time, memo);

  memo[i][rest] = min(paint, dontPaint);
  return memo[i][rest];
}

int paintWalls(vector<int> &cost, vector<int> &time)
{
  int n = cost.size();
  vector<vector<int>> memo(n, vector<int>(n + 1, -1));

  return solve(0, n, n, cost, time, memo);
}

int main(int argc, char const *argv[])

{
  cout << "Radhey Shyam" << endl;
  vector<int> cost = {1, 2, 3, 2};
  vector<int> time = {1, 2, 3, 2};
  cout << paintWalls(cost, time);
  return 0;
}
