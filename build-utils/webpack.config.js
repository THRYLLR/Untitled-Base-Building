const path = require("path");

/**
 * @param {Boolean} [dev] - Whether or not webpack should run in development mode.
 **/
module.exports = (dev = true) => {
  return {
    mode: dev ? "development" : "production",
    entry: "../src/js/main.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: dev ? "bundle.dev.js" : "bundle.js",
      publicPath: "/",
      library: "umd",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, "src", "js")],
          use: {
            loader: "babel-loader",
            options: {
              configFile: "./.babelrc",
            },
          },
        },
      ],
    },
  };
};
