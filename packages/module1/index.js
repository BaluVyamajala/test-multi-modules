const { sum } = require("./math");

exports.handler = function(event, context) {
  console.log("add of 2 & 3 is" + sum(2, 3));
  context.succeed(sum(2, 3));
};
