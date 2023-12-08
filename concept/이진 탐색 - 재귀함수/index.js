function binarySearch(arr, target, start, end) {
  if (start > end) return -1;
  let mid = parseInt((start + end) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  else return binarySearch(arr, target, mid + 1, end);
}

const n = 10;
const target = 7;
const data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log(binarySearch(data, target, 0, n - 1));
