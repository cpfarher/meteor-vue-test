<template>
  <popover popover-title="Motor" id="#popover">
    <box></box>
  </popover>
<!--   <mdl-tooltip for="mood-button" large>
    Add something!Here is some <strong>custom</strong> <code>html</code><br/><i class="material-icons">mood</i>
    <mdl-card class="demo-card-welcome" title="Welcome" :supporting-text="supportingText" actions="actions" actions-text="Get started">
    </mdl-card>
  </mdl-tooltip>

  <mdl-button id="mood-button" fab primary></mdl-button> -->
</template>


<script>
  import Box from './Box.vue';
  import Popover from './Popover.vue';

  export default {
    name: 'motor', // redundante
    ready() {
      console.log("motor");
    },
    components: {
      Box,
      Popover
    },
    data: function() {
      return {};
    },
    props: {

    }
  }
</script>

<style>
</style>