<template>
  <div class="aib-partnership">
    <h3>{{partnershipObject.header}}</h3>
    <p>{{partnershipObject.content}}</p>
    <div class="partnershipList">
      <div v-for="(partnership , index) in partnershipObject.partnerships" :key="index">
        <a href>
          <img :src="partnership.src" alt />
        </a>
      </div>
    </div>
    <a :href="partnershipObject.target">{{partnershipObject.targetCaption}}</a>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      test: "tdfsf"
    };
  },
  props: {
    partnershipObject: Object
  }
});
</script>
<style lang="scss" scoped>
</style>