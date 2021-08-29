const { log } = require("./debug");
const rand = require("./rand");

function genCase(n = 100, min = 0, max = 100) {
  return new Array(n).fill(0).map((x) => {
    return rand.int(min, max);
  });
}

function it(arr, res) {
  let rightAns = arr.sort((a, b) => a - b).join(",");

  log(`测试结果:${rightAns === res.join(",") ? "正确" : "错误"}`);
  log("结果", rightAns);
}

module.exports = {
  genCase,
  it,
};
