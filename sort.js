const { log } = require("./utils/debug");
const { genCase, it } = require("./utils/sortTest");

const utils = {};

function quickSort(arr) {
  function swap(list, l, r) {
    [list[l], list[r]] = [list[r], list[l]];
  }

  // 包括l, 不包括r
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

function testSort(n = 99999, sortMethod) {
  let right = 0;
  let wrong = 0;
  let wrongCase = [];
  for (let i = 0; i < n; i++) {
    let inputs = genCase(100, -1000, 1000);

    if (it(inputs, quickSort(inputs))) {
      right++;
    } else {
      wrongCase.push(inputs);
      wrong++;
    }
  }
  log(`通过${right}, 未通过${wrong}, 通过率${Math.floor((right * 100) / n)}%`);
}

function main() {
  testSort();
}

main();
