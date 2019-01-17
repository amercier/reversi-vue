const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const WebpackFixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const constants = require('./src/config');

/**
 * Vue.js configuration
 *
 * @see Configuration Reference: https://cli.vuejs.org/config/
 */
module.exports = {
  /**
   * Global SCSS.
   */
  css: {
    loaderOptions: {
      sass: {
        data: Object.entries(constants).reduce(
          (data, [name, value]) => `${data}$${name}: ${value};\n`,
          '',
        ),
      },
    },
  },

  /**
   * Inline critical CSS.
   */
  configureWebpack: config => {
    // Add critical entry point.
    config.entry.critical = ['./src/assets/critical.scss'];
  },
  chainWebpack: config => {
    // Prevent webpack JS boilerplate being included even if critical.js contains only CSS.
    config
      .plugin('fix-style-only-entries')
      .use(WebpackFixStyleOnlyEntriesPlugin);

    // Remove <link rel=preload as=script> for inlined scripts and stylesheets.
    config.plugin('preload').tap(args => {
      args[0].fileBlacklist.push(/critical(\..*)?\.(css|js)$/);
      return args;
    });

    // Register html-webpack-inline-source-plugin plugin.
    config.plugin('inline-source').use(HtmlWebpackInlineSourcePlugin);

    // Tell html-webpack-plugin to use html-webpack-inline-source-plugin plugin for critical assets.
    config.plugin('html').tap(args => {
      args[0].inlineSource = '/critical(\\..*)\\.(css|js)$';
      return args;
    });
  },
};
