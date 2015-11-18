/* jshint node: true */
'use strict';

module.exports = {
  name: 'roundcube-notifications',
  isDevelopingAddon: function() {
    return true;
  },
  included: function (app) {
    this._super.included(app);
  }
};
