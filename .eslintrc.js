module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: false, endOfLine: 'auto' }],
  },
};