module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  rules: {
    'comma-dangle': 'off',
    'import/no-unresolved': 'off',
    'lines-between-class-members': 'off',
    'vue/max-attributes-per-line': 'off'
  }
};
