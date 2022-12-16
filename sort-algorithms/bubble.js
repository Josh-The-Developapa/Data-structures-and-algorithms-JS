function bubble(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubble([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
