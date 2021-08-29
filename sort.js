const { genCase, it } = require("./utils/sortTest");

const utils = {};

function quickSort(arr) {
  function swap(list, l, r) {
    [list[l], list[r]] = [list[r], list[l]];
  }

  // 不包括r的索引
  function partition(list, l, r) {
    let p = list[r - 1];
    let index = l;
    for (let i = l; i < r - 1; i++) {
      if (list[i] < p) {
        swap(list, index, i);
        index += 1;
      }
    }
    swap(list, index, r - 1);
    return index;
  }

  let pivot = partition(arr, 0, arr.length);
  partition(arr, 0, pivot);
  partition(arr, pivot + 1, arr.length);
  return arr;
}

function main() {
  for (let i = 0; i < 100; i++) {
    let inputs = genCase(100, -1000, 1000);
    it(inputs, quickSort(inputs));
  }
}

main();
