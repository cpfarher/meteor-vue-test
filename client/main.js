// Libs
import {Meteor} from 'meteor/meteor';
import VueMdl from 'vue-mdl';
import {Vue} from 'meteor/akryum:vue';
Vue.use(VueMdl);
// Main app
import App from '/imports/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    el: 'body',
    replace: false,
    components: {
      App
    }
  });
});