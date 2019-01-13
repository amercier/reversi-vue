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
};
