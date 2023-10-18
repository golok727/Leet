from typing import List

class Solution:
    def findRoot(self, n, leftChild, rightChild):
        children = set(leftChild) | set(rightChild)

        for i in range(n):
            if i not in children:
                return i
        return -1

    def validateBinaryTreeNodes(self, n: int, leftChild: List[int], rightChild: List[int]) -> bool:
        root = self.findRoot(n, leftChild, rightChild)
        if root == -1:
            return False

        stack = []
        seen = set()

        stack.append(root)
        seen.add(root)

        while stack:
            node = stack.pop()

            children = [leftChild[node], rightChild[node]]

            for child in children:
                if child != -1:
                  if child in seen:
                      return False

                  stack.append(child)
                  seen.add(child)

        return len(seen) == n


n = 4
l = [1,-1,3,-1]
r = [2,-1,-1,-1]
sol = Solution()
res = sol.validateBinaryTreeNodes(n, l , r)
print(res)