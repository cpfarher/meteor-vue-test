// Libs
import {Meteor} from 'meteor/meteor';
import VueMdl from 'vue-mdl';
import {Vue} from 'meteor/akryum:vue';

Vue.use(VueMdl);
// Main app
//import MaterializeMdl from '/imports/ui/MaterializeMdl.vue';
import Inspinia from '/imports/ui/Inspinia.vue';
import Inspinia from '/imports/ui/Box.vue';

Meteor.startup(() => {
  new Vue({
    el: 'body',
    replace: false,
    components: {
      //MaterializeMdl, 
      Inspinia, 
      Box
    }
  });
});