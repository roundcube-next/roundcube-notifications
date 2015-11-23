import Ember from 'ember';
import layout from '../templates/components/roundcube-notifications-main';
import Notify from 'ember-notify';

export default Ember.Component.extend({
  layout: layout,
  pubsub: Ember.inject.service(),
  notify: Ember.inject.service('notify'),
  setup: function() {
    var pubsub = this.get('pubsub'),
        notify = this.get('notify');

    pubsub.on('shell.notify', function (message) {
      notify.info(message + '', {
        closeAfter: 5000
      });
    });
  }.on('init')
});
