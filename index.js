module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['sort-keys-fix'],
  rules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: ['block-like'],
        prev: '*',
      },
      {
        blankLine: 'always',
        next: ['*'],
        prev: ['block-like'],
      },
    ],
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowNullableBoolean: true,
        allowNullableNumber: true,
        allowNullableString: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    curly: 'error',
    eqeqeq: 'error',
    'multiline-comment-style': ['error', 'separate-lines'],
    'no-console': ['warn', { allow: ['error', 'info', 'table', 'warn'] }],
    'no-else-return': 'error',
    'no-extra-boolean-cast': 'error',
    'no-floating-decimal': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-rename': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'spaced-comment': 'error',
    yoda: 'error',
  },
};
