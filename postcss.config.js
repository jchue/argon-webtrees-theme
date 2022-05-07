module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
            removeAll: true,
        },
      }],
    }),
    require('postcss-url')({ url: 'inline', basePath: '../../src/scss' }),
  ],
}
