module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module'
  },
  'extends': 'eslint:recommended',
  'plugins': ['babel'],
  'rules': {
    'import/no-unresolved': 'off',
    'semi': ['error', 'always'],
    'max-len': ['error', 120],
    'object-curly-spacing': ["error", "always"]
  },
  'globals': {
    'window': true, // for the browser
    'Promise': true, // polyfill added
    'fetch': true // polyfilled global function
  }
};
