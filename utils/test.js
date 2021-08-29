const { log } = require("./debug");

function run(func, args, maxTimes = 1e4, timeLimit = 3000) {
  let start = Date.now();
  let count = maxTimes;
  let res;
  for (let i = 0; i < maxTimes; i++) {
    if (Date.now() - start > timeLimit) {
      count = i;
      break;
    }
    res = func(...args);
  }

  let totalTime = Math.floor(Date.now() - start) / 1000;

  log(
    `${func.name} 运行${count}次, 共耗时${totalTime}s, 平均耗时${
      totalTime / count
    }s`
  );
  return res;
}

module.exports = {
  run,
};
