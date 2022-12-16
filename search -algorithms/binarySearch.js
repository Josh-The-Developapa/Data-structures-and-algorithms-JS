const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] < val) {
      start = middle + 1;
    } else if (arr[middle] > val) {
      end = middle - 1;
    } else if (arr[middle] === val) {
      return middle;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
