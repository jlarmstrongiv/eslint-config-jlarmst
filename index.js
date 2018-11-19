module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
    mongo: true,
    node: true,
  },
  extends: [
    // oclif
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  globals: {
    document: true,
    localStorage: true,
    process: true,
    window: true,
  },
  rules: {
    'allowAllPropertiesOnSameLine': true,
    'comma-dangle': [1, 'always'],
    'indent': [2, 2, { SwitchCase: 1 }],
    'keyword-spacing': [1, {
      before: true,
      after: true
    }, ],
    'linebreak-style': [2, 'unix'],
    'no-case-declarations': 1,
    'no-console': 1,
    'no-unused-vars': [ 1, {
      varsIgnorePattern: 'res|next|^err',
      argsIgnorePattern: 'state|action|ownProps|dispatch|req|res|next|err|dispatch|getState'
    }, ],
    'object-curly-spacing': [1, 'always'],
    'object-property-newline': 1,
    'object-curly-newline': [2, { ObjectExpression: { minProperties: 2, }, }, ],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'space-before-blocks': [1, 'always'],
    'space-infix-ops': [1, { int32Hint: true, },],
    'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
    'react/jsx-max-props-per-line': [ 1, {
      maximum: 1,
      when: 'always'
    }, ],
    'react/jsx-space-before-closing': [1, 'always'],
    'react/jsx-tag-spacing': [1, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }, ],
    'react/no-children-prop': 0,
    'react/prop-types': [1],
  }
};
