function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let min = parseInt((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = min + 1;
  }
  return -1;
}

const n = 10;
const target = 7;
const data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log(binarySearch(data, target, 0, n - 1));
