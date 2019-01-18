import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    /* eslint-disable no-console, jsdoc/require-example */

    /**
     * Function called when Service worker is active.
     *
     * @returns {undefined} Nothing.
     */
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB',
      );
    },

    /**
     * Function called when Service worker has been registered.
     *
     * @returns {undefined} Nothing.
     */
    registered() {
      console.log('Service worker has been registered.');
    },

    /**
     * Function called when content has been cached for offline use.
     *
     * @returns {undefined} Nothing.
     */
    cached() {
      console.log('Content has been cached for offline use.');
    },

    /**
     * Function called when new content is downloading.
     *
     * @returns {undefined} Nothing.
     */
    updatefound() {
      console.log('New content is downloading.');
    },

    /**
     * Function called when new content is available.
     *
     * @returns {undefined} Nothing.
     */
    updated() {
      console.log('New content is available; please refresh.');
    },

    /**
     * Function called when App is running in offline mode.
     *
     * @returns {undefined} Nothing.
     */
    offline() {
      console.log(
        'No internet connection found. App is running in offline mode.',
      );
    },

    /**
     * Function called when an error occurred during Service worker registration.
     *
     * @param {Error} error - The triggered error.
     * @returns {undefined} Nothing.
     */
    error(error) {
      console.error('Error during service worker registration:', error);
    },

    /* eslint-enable no-console, jsdoc/require-example */
  });
}
