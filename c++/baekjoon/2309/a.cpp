#include <bits/stdc++.h>

using namespace std;

vector<int> dwarfs(9);

int main(){
  for(int i = 0; i < 9; i++) cin >> dwarfs[i];
  sort(dwarfs.begin(),dwarfs.end());
  for (int i = 0; i < 7; i++) {
      cout << dwarfs[i] << ' ';
  }
  return 0;
}