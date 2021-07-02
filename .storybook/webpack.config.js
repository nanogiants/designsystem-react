const path = require('path');

module.exports = ({ config }) => {
  const fileLoaderRule = config.module.rules.find(
    (rule) => !Array.isArray(rule.test) && rule.test.test('.svg')
  );
  fileLoaderRule.exclude = /\.svg$/;
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
