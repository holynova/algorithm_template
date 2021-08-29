const { log } = require("./utils/debug");
const { genCase, it, testSort } = require("./utils/sortTest");

const utils = {};

function mergeSort(arr) {
  function merge(leftArr = [], rightArr = []) {
    // log(leftArr, rightArr);
    let res = [];
    let p = 0;
    let q = 0;

    while (true) {
      let pValid = p < leftArr.length;
      let qValid = q < rightArr.length;

      if (pValid && qValid) {
        if (leftArr[p] < rightArr[q]) {
          res.push(leftArr[p]);
          p++;
        } else {
          res.push(rightArr[q]);
          q++;
        }
      } else if (pValid) {
        res.push(leftArr[p]);
        p++;
      } else if (qValid) {
        res.push(rightArr[q]);
        q++;
      } else {
        break;
      }
    }
    return res;
  }

  function sort(list) {
    // if (list.length < 5) {
    //   log(`sort,l=${l},r=${r},list=${list}`);
    // } else {
    //   log(`sort,l=${l},r=${r}`);
    // }
    if (list.length <= 1) {
      return list;
    }
    let mid = Math.floor((0 + list.length) / 2);
    let leftArr = list.splice(0, mid);
    let rightArr = list;
    return merge(sort(leftArr), sort(rightArr));
    // return merge(sort(list, l, mid), sort(list, mid + 1, r));
  }

  // return merge([1, 3, 5], [2, 4, 6]);

  if (arr.length <= 1) {
    return arr;
  }
  return sort(arr);
  // return sort([3, 2, 1], 0, 3);
  // return sort(arr, 0, arr.length);
}

function quickSort(arr) {
  function swap(list, l, r) {
    [list[l], list[r]] = [list[r], list[l]];
  }

  // 包括l, 不包括r
  function partition(list, l, r) {
    let lastValue = list[r - 1];
    let index = l;
    for (let i = l; i < r - 1; i++) {
      if (list[i] < lastValue) {
        swap(list, index, i);
        index += 1;
      }
    }
    swap(list, index, r - 1);
    return index;
  }

  function sort(list, l, r) {
    if (l >= r) {
      return list;
    }
    let pivot = partition(list, l, r);
    sort(list, 0, pivot);
    sort(list, pivot + 1, r);
  }

  sort(arr, 0, arr.length);
  return arr;
}

function main() {
  // log("结果", mergeSort([3, 2, 1]));
  testSort(quickSort, 1000, false);
  // testSort(mergeSort, 9999, true);
}

main();
