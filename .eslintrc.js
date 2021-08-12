'use strict';

module.exports = {
  'env': {
    'node': true,
    'es2021': true,
    'mocha': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'script',
    'ecmaVersion': 12
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'rules': {
    'indent': ['error', 2],
    'prefer-const': ['error'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'strict': ['error', 'safe'],
  },
  'ignorePatterns': ['**/client'],
};
