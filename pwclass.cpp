#include <iostream>
#include <vector>
using namespace std;

int solve(int idx, int remaining, int nWalls, vector<int> &cost, vector<int> &time, vector<vector<int>> &memo)
{
  if (remaining <= 0)
    return 0;

  if (idx == nWalls)
    return 1e9;

  if (memo[idx][remaining] == -1)
    return memo[idx][remaining];

  int paint = cost[idx] + solve(idx + 1, remaining - 1 - time[idx], nWalls, cost, time, memo);
  int dontPaint = solve(idx + 1, remaining, nWalls, cost, time, memo);

  memo[idx][remaining] = min(paint, dontPaint);

  return memo[idx][remaining];
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
