<template>
  <div class="aib-slider">
    <div class="slideshow-container">
      <div
        :id="'silde'+index"
        class="mySlides fade"
        :class="{'active':slideIndex===index}"
        v-for="(item, index) in slideList"
        :key="index"
      >
        <transition name="fade">
          <div v-if="slideIndex===index">
            <div class="numbertext">{{index + 1}} / {{slideList.length}}</div>
            <img :src="item.url" alt />

            <div class="slideContent" :class="{'odd-background':index%2===1}">
              <h2>{{item.header}}</h2>
              <p>{{item.content}}</p>
              <a :href="item.target">{{item.targetCaption}}</a>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="dot-container">
      <span
        :class="{'active': index===slideIndex}"
        class="dot"
        v-for="(dot,index) in slideList"
        :key="index"
        @click="selectSlide(index)"
      ></span>
    </div>
  </div>
</template>
<script >
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      slideIndex: 0
    };
  },
  props: {
    slideList: Array
  },
  methods: {
    /**Initila slideing or
     * show the next slide
     */
    showSlides() {
      this.slideIndex++;
      if (this.slideIndex >= this.slideList.length) {
        this.slideIndex = 0;
      }
      /**we need to show the next slide after 10s */
      setTimeout(this.showSlides, 10000); // Change image every 2 seconds
    },
    /**select the slide by passing the index */
    selectSlide(index) {
      this.slideIndex = index;
    }
  },
  mounted() {
    /**initial sliding */
    this.showSlides();
  }
});
</script>
<style lang="scss" scoped>
</style>