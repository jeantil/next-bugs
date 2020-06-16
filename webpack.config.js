const TerserWebpackPlugin = require("terser-webpack-plugin");

const baseConfig = {
  entry: {
    purejs: "./src/main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      { test: /\.css$/, use: "css-loader" },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  mode: "development",
  optimization: {
    usedExports: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            passes: 3,
          },
        },
      }),
    ],
  },
  stats: {
    // Examine all modules
    maxModules: Infinity,
    // Display bailout reasons
    optimizationBailout: true,
  },
};
const serverConfig = {
  ...baseConfig,
  target: "node",
  output: { ...baseConfig.output, path: __dirname + "/dist/server" },
};
const webConfig = {
  ...baseConfig,
  target: "web",
  output: { ...baseConfig.output, path: __dirname + "/dist" },
};
module.exports = [serverConfig, webConfig];
