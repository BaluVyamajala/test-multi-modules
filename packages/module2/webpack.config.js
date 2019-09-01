const path = require("path");
module.exports = {
  entry: ["./index.js"],
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : "development",
  // optimization: {
  //   minimize: true
  // },
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd"
  }
};
