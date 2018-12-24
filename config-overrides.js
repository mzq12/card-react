 const {
     injectBabelPlugin
 } = require('react-app-rewired');

 const rewireTypescript = require('react-app-rewire-typescript')
 const rewireCssModules = require('react-app-rewire-css-modules')
 module.exports = function override(config, env) {
     config = injectBabelPlugin(
         ['import', {
             libraryName: 'antd',
             libraryDirectory: 'es',
             style: 'css'
         }],
         config,
     );
     config = rewireTypescript(config, env)
     config = rewireCssModules(config, env)
     return config;
 };