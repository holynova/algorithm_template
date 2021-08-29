const { log } = require("./debug");
const rand = require("./rand");

function genCase(n = 100, min = 0, max = 100) {
  return new Array(n).fill(0).map((x) => {
    return rand.int(min, max);
  });
}

function it(arr, res, showLog = false) {
  let clone1 = [...arr];
  // let clone2 = [...arr];
  let rightAns = clone1.sort((a, b) => a - b).join(",");
  let isRight = rightAns === res.join(",");
  if (showLog) {
    log(`测试结果:${isRight ? "正确" : "错误"}`);
    if (!isRight) {
      log("正确结果", rightAns);
      log("目前结果", res.join(","));
    }
  }
  return isRight;
}

function testSort(sortMethod, times = 100, showLog = false) {
  if (typeof sortMethod !== "function") {
    throw new Error("sortMethod不是函数");
    return;
  }

  let correct = 0;
  let error = 0;
  let errorCases = [];
  for (let i = 0; i < times; i++) {
    let inputs = genCase(10, -1000, 1000);
    let clone = [...inputs];
    if (it(inputs, sortMethod(clone), showLog)) {
      correct++;
    } else {
      errorCases.push(inputs);
      error++;
    }
  }
  log(
    `通过${correct}, 未通过${error}, 通过率${Math.floor(
      (correct * 100) / times
    )}%`
  );
}

module.exports = {
  genCase,
  it,
  testSort,
};
