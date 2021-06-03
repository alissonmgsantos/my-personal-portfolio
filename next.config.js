module.exports = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$|svg/i,
      use: 'raw-loader',
    });
    return config;
  },
  images: {
    domains: ['raw.githubusercontent.com', 'avatars.githubusercontent.com'],
  },
};
