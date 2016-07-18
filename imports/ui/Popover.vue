<template>
  <button class="btn btn-primary" type="button" @click="togglePopover">{{btnText}}</button>
  <div v-if="toggle">
    <div class="popover-heading">{{popoverTitle}}</div>
    <div class="popover-body">
      <slot></slot>
    </div>
  </div>

  <button class="btn btn-primary" type="button" data-toggle="popover" data-popover-content="#content" data-placement={{dataPlacement}}>{{btnText}}</button> 
  
  <div class="popover-body" class="hidden">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'popover',
    ready() {
     $("[data-toggle=popover]").popover({
      html : true,
      content: $('.popover-body'),
      title: this.popoverTitle
     });
 },
 trigger: 'manual',
 props: {
    popoverHtml: {
      type: String,
      default: ""
  },
  popoverTitle: {
      type: String,
      default: ""  
  },
  btnText: {
      type: String,
      default: "click"  
  },
  dataPlacement: {
      type: String,
      default: "bottom"
  }
},
data() {
    return {
      toggle: false
       // buttonLabel: 'Click me!',
       // count: 0
   }
},
meteor: {
      /*data: {
        count() {
          return Session.get('counter');
        }
    }*/
},
methods: {
  togglePopover: function() {
    this.toggle = !this.toggle;
},
      // addOne() {
      //   Session.set('counter', this.count + 1);
      //   this.buttonLabel = labels[Math.round(Math.random()*(labels.length - 1))];
      // }
  }
}
</script>