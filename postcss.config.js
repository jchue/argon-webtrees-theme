module.exports = (ctx) => ({
  map: false,
  plugins: {
    autoprefixer: ctx.env === 'production' ? {} : false,
    cssnano: ctx.env === 'production' ? {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    } : false,
    'postcss-import': { path: ['src/scss'] },
    'postcss-url': {
      url: 'inline',
      basePath: ['../../node_modules/leaflet/dist'],
    },
  },
});
