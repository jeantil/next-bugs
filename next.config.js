const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = withBundleAnalyzer({
  experimental: {
    modern: false,
  },
  webpack: function (config) {
    config.optimization.minimizer.forEach((p) => {
      if (p.options && p.options.terserOptions) {
        p.options.terserOptions.compress.passes = 30;
      }
    });
    config.optimization.usedExports = true;
    config.mode = "development";
    return config;
  },
});
