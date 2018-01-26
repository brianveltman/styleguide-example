const rewireImport = require('react-app-rewire-import');
 
module.exports = function override (config, env) {
  config = rewireImport(config, env, {
    libraryName: 'styleguide',
    libraryDirectory: 'dist'
  });
  return config;
}
