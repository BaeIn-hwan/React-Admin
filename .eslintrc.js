module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'plugin:cypress/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    parser: 'babel-eslint',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  /*
    eslint 설정 시 off(0), warn(1), error(2) 문자열로 작성한다.
  */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': 'warn', // var 금지
    'no-unused-vars': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['<', '>', '{', '}'],
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        ignoreRestArgs: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
