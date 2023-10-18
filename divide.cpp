#include <iostream>
#include <vector>
using namespace std;

int main(int argc, char const *argv[])

{
  cout << "Radhey Shyam" << endl;
  cout << (5 ^ 3) << endl;
  /*
  00  -> 0
  01  -> 1
  10  -> 2
  11  -> 3
  100 -> 4
  101 -> 5
  110 -> 6
  111 -> 7
  1000 -> 8
  1001 -> 9
  1010 -> 10
  1011 -> 11

  10 ^ 11 = 01

  101
  011
--------
  110

  */

  cout << (2 ^ 3) << endl;
  return 0;
}
