const debugMode = true;
const log = debugMode ? console.log.bind(console) : () => {};

module.exports = {
  log,
};
