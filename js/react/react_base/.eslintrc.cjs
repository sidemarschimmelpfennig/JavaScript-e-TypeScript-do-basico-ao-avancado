module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': 0,
  },
};
