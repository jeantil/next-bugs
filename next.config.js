const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: function (config, { isServer }) {
    if (!isServer && process.env.ANALYZE === "true") {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "./analyze/client.html",
          generateStatsFile: true,
        })
      );
    }
    config.optimization.minimizer.forEach((p) => {
      if (p.options && p.options.terserOptions) {
        p.options.terserOptions.compress.passes = 30;
      }
    });
    config.optimization.usedExports = true;
    config.mode = "development";
    return config;
  },
};
