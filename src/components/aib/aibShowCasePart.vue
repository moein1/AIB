<template>
  <div class="show-case-part">
    <div class="show-case-img">
      <img :src="showCasePart.src" alt />
    </div>
    <h4>{{showCasePart.header}}</h4>
    <p>{{showCasePart.content}}</p>
    <a :href="showCasePart.target">{{showCasePart.targetCaption}}</a>
  </div>
</template>
<script >
import Vue from "vue";
export default Vue.extend({
  props: {
    showCasePart: Object
  }
});
</script>
<style lang="scss" scoped>
</style>