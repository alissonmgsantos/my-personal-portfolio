module.exports = {
  target: 'serverless',
  webpack: function (config, { isServer }) {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    config.module.rules.push({
      test: /\.md$/i,
      use: 'raw-loader',
    });
    return config;
  },
  images: {
    domains: ['raw.githubusercontent.com', 'avatars.githubusercontent.com'],
  },
};
