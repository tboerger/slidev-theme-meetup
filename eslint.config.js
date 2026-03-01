const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    ignores: ['.github/**'],
  },
  {
    files: ['example.md'],
    rules: {
      'markdown/no-multiple-h1': 'off',
    },
  },
)
