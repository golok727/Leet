#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
  void helper(int idx, vector<int> &nums, vector<vector<int>> &res)
  {
    if (idx == nums.size())
    {
      res.push_back(nums);
      return;
    }

    for (int i = idx; i < nums.size(); i++)
    {
      swap(nums[idx], nums[i]);
      helper(idx + 1, nums, res);
      swap(nums[idx], nums[i]);
    }
  }

  vector<vector<int>> permute(vector<int> &nums)
  {
    vector<vector<int>> res;
    helper(0, nums, res);
    return res;
  }
};

int main(int argc, char const *argv[])
{
  cout << "Radhey Shyam" << endl;
  vector<int> nums = {1, 2, 3};
  Solution sol;
  auto res = sol.permute(nums);
  for (auto const &row : res)
  {
    for (auto const num : row)
      cout << num << " ";
    cout << endl;
  }
  return 0;
}
