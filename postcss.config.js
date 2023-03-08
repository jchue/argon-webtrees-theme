const path = require('node:path');

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
    'postcss-import': {
      path: [
        'vendor/fisharebest/webtrees/resources/css',
        'src/scss',
      ],
    },

    /**
     * TODO: Reconsider inlining font faces and instead defining them on page;
     * would need to figure out how to exclude fontawesome.css from PostCSS processing
     */
    'postcss-url': {
      url: 'inline',
      basePath: [
        path.resolve('node_modules/@fortawesome/fontawesome-free/webfonts'),
        path.resolve('vendor/fisharebest/webtrees/resources/css'),
      ],
    },
  },
});
