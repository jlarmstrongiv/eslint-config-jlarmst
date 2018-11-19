# eslint-config-jlarmst

## .eslint
`.eslintrc.js`
```JSX
module.exports = {
  'extends': ['eslint-config-jlarmst', ]
}
```
```JSX
module.exports = {
  'extends': ['jlarmst', ]
}
```

## Peer Packages
`yarn add --dev eslint eslint-plugin-react eslint-plugin-jest babel-eslint`

`npx install-peerdeps --dev eslint-config-jlarmst`

If `eslint` is installed globally, then `eslint-config-jlarmst` and its peer dependencies must also be installed globally.

## Future Additions
https://www.npmjs.com/package/eslint-plugin-import
https://www.npmjs.com/package/eslint-plugin-jsx-a11y

## Future Considerations
https://www.npmjs.com/package/eslint-config-airbnb
https://github.com/oclif/eslint-config-oclif
https://www.npmjs.com/package/eslint-plugin-html

## Resources
https://eslint.org/docs/developer-guide/shareable-configs
