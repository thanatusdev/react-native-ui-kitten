const path = require('path');
const environment = require('./env');

const evaModules = {
  '@eva-design/eva': path.resolve(environment.EVA_PATH, 'eva'),
  '@eva-design/material': path.resolve(environment.EVA_PATH, 'material'),
  '@eva-design/processor': path.resolve(environment.EVA_PATH, 'processor'),
};

const frameworkModules = {
  '@ui-kitten-react-native/components': path.resolve(__dirname, '../components'),
  '@ui-kitten-react-native/date-fns': path.resolve(__dirname, '../date-fns'),
  '@ui-kitten-react-native/eva-icons': path.resolve(__dirname, '../eva-icons'),
  '@ui-kitten-react-native/moment': path.resolve(__dirname, '../moment'),
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...evaModules,
    ...frameworkModules,
  },
};

const presets = [
  'babel-preset-expo',
];

const plugins = [
  ['module-resolver', moduleResolverConfig],
  ["@babel/plugin-proposal-decorators", { 'legacy': true }],
  ["react-native-web", { commonjs: true }]
];

module.exports = function (api) {
  api.cache(true);
  return { presets, plugins };
};
