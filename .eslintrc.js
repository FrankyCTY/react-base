module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  extends: ['@frankycty/eslint-config-react'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 1,
    'no-shadow': 0,
    'react-hooks/exhaustive-deps': 2,
    'import/no-cycle': 0,
    'dot-notation': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '**/node_modules', 'src'],
      },
    },
  },
}
