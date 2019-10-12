const getWebpackConfig = require('ocular-dev-tools/config/webpack.config');

module.exports = env => {
  const config = getWebpackConfig(env);
  // Unfortunately, ocular-dev-tool swallows logs...
  // console.error(JSON.stringify(config, null, 2));
  require('fs').writeFileSync('/tmp/ocular.log', JSON.stringify(config, null, 2));
  return config;
};
