const { concatthem } = require("./strings");

exports.handler = function(event, context) {
  console.log("concatthem of 2 & 3 is" + concatthem("2", "3"));
  context.succeed(concatthem("2", "3"));
};
