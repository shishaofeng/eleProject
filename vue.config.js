const path = require("path");
const webpack = require("webpack");
const nodeEnv = process.env.nodeEnv;
module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  pages:{
    index: {
      entry:'src/main.js'
    }
  },
  outputDir: "./dist",
};
