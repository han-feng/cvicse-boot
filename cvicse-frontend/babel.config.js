
const plugins = [
  [
    'component',
    {
      libraryName: 'element-ui',
      styleLibraryName: 'theme-chalk'
    }
  ]
]

if (process.env.NODE_ENV === 'test') {
  plugins.push('require-context-hook')
}

module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins
}
