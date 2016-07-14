<template>
  <div class="app">
    <h1>Vue Meteor simple example</h1>
    <p>
      You pressed the button {{count}} times.
    </p>
    <motor></motor>
    <my-button :label="buttonLabel" @click="addOne"></my-button>

    <mdl-button>Button</mdl-button>
    <mdl-button v-mdl-ripple-effect>Ripple Effect</mdl-button>
    <mdl-button disabled>Disabled</mdl-button>
    
    <mdl-button fab primary icon>
      <i class="material-icons">star</i>
    </mdl-button>

    <mdl-anchor-button href="http://vuejs.org/api" target="_blank">Open Vuejs doc</mdl-anchor-button>
    
    <my-material-card icon="star" color="red"></my-material-card>
    <!--<div-tester concat-string="concat string"></div-tester>-->
    <!--<my-date-picker :time.sync="starttime" :option="option" :limit="limit"></my-date-picker>-->
    <!--Date picker: <date-picker :time.sync="starttime" :option="option" :limit="limit"></date-picker>--<
  </div>
</template>

<script>
  import {Session} from 'meteor/session';
  import myDatepicker from 'vue-datepicker'
  //import myDatepicker from 'vue-datepicker'
  //import myDatePicker from 'vue-datepicker'

  Session.setDefault("counter", 0);
  
  let labels = ['Click me!', 'Click me again!', 'Here! Click here!', 'Again! Again!',
  'Don\'t click me! No, I\'m just kidding. You can.', 'You like that?',
  'Can you stratch me in the back please?', 'You are soooo nice! Click!',
  'Hmmmm...', 'You know, you are wasting time clicking me.',
  'No really, you can click me as much as you want.', 'Click me to level up!'];
  
  export default {
    data() {
      return {
        buttonLabel: 'Click me!',
        count: 0
      }
    },
    meteor: {
      data: {
        count() {
          return Session.get('counter');
        }
      }
    },
    methods: {
      addOne() {
        Session.set('counter', this.count + 1);
        this.buttonLabel = labels[Math.round(Math.random()*(labels.length - 1))];
      }
    }
  }
</script>