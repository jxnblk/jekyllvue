
'use strict';


var Soundcloud = Vue.extend({
  data: {
    play: function(i) {
      var url = this.$data.value;
      global.player.play(url, i);
    },
    pause: function() {
      global.player.pause();
    },
    playPause: function(i) {
      var url = this.$data.value;
      global.player.playPause(url, i);
    }
  },
  directives: {
    'src': function(value) {
      var self = this;
      self.vm.$data.value = value;
      var elements = document.querySelectorAll('[v-src]');
      for (var i = 0; i < elements.length; i++) {
        if (this.el == elements[i]) {
          self.vm.$data.index = i;
        }
      }
      global.player.get(value, function(response) {
        for (var key in response) {
          self.vm.$data[key] = response[key];
        }
      });
    }
  }
});

module.exports = Vue.component('soundcloud', Soundcloud);

