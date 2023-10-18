#include <iostream>
#include <vector>
#include <stack>
#include <unordered_set>

using namespace std;
class Solution
{
public:
  int findRoot(int n, vector<int> &leftChild, vector<int> &rightChild)
  {
    unordered_set<int> children;
    children.insert(leftChild.begin(), leftChild.end());
    children.insert(rightChild.begin(), rightChild.end());

    for (int i = 0; i < n; i++)
      if (children.find(i) == children.end())
        return i;

    return -1;
  }

  bool validateBinaryTreeNodes(int n, vector<int> &leftChild, vector<int> &rightChild)
  {
    int root = findRoot(n, leftChild, rightChild);

    if (root == -1)
      return false;

    stack<int>
        s;
    unordered_set<int> seen;

    s.push(root);
    seen.insert(root);

    while (!s.empty())
    {
      int node = s.top();
      s.pop();

      int children[] = {leftChild[node], rightChild[node]};
      for (int child : children)
      {
        if (child != -1)
        {
          if (seen.find(child) != seen.end())
            return false;
          s.push(child);
          seen.insert(child);
        }
      }
    }

    return seen.size() == n;
  }
};

int main(int argc, char const *argv[])
{
  cout << "Radhey Shyam" << endl;
  int n = 4;
  vector<int>
      leftChild = {1, -1, 3, -1},
      rightChild = {2, -1, -1, -1};

  Solution sol;
  bool res = sol.validateBinaryTreeNodes(n, leftChild, rightChild);

  cout << "isValid = " << res << endl;

  return 0;
}
