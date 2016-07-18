// Libs
import {Meteor} from 'meteor/meteor';
import VueMdl from 'vue-mdl';
import {Vue} from 'meteor/akryum:vue';

Vue.use(VueMdl);
// Main app
//import MaterializeMdl from '/imports/ui/MaterializeMdl.vue';
import Inspinia from '/imports/ui/Inspinia.vue';
import Box from '/imports/ui/Box.vue';
import Popover from '/imports/ui/Popover.vue';
import Motor from '/imports/ui/Motor.vue';

Meteor.startup(() => {
  new Vue({
    el: 'body',
    replace: false,
    components: {
      //MaterializeMdl, 
      Inspinia, 
      Box,
      Popover,
      Motor
    }
  });
});