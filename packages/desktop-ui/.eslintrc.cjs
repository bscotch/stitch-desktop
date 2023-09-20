module.exports = {
  root: true,
  ignorePatterns: ['.svelte-kit/**/*'],
  env: {
    browser: true,
    es2020: true,
    mocha: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    camelcase: 'off',
    eqeqeq: 'off',
    'getter-return': 'off',
    'key-spacing': 'off',
    'no-constant-condition': 'off',
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: ['console'],
      },
    ],
    'no-unused-vars': 'off',
    quotes: 'off',
    'require-await': 'warn',
    'space-before-function-paren': 'off',
    'no-control-regex': 'warn',
    'no-misleading-character-class': 'warn',
  },
  overrides: [
    // {
    //   files: ['*/*/src/*.ts', '*/*/src/**/*.ts'],
    //   parserOptions: {
    //     ecmaVersion: 'latest',
    //     parser: '@typescript-eslint/parser',
    //     sourceType: 'module',
    //     project: ['**/tsconfig.json', '**/tsconfig.*.json'],
    //   },
    //   rules: {
    //     '@typescript-eslint/no-floating-promises': 'error',
    //   },
    // },
    {
      files: ['src/**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'svelte/valid-compile': 'warn',
      },
    },
    {
      files: ['test/**/*.ts', '*.test.ts'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
};
