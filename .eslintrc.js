module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  env: {
    'jest/globals': true,
  },
};
