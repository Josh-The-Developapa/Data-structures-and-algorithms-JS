function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return arr.indexOf(arr[i]);
    }
  }
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
