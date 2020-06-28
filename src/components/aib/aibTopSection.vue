<template>
  <div class="aibTopSection" :class="{ 'navbar-hidden': !showNavbar }">
    <div class="top1"></div>
    <div class="top2"></div>
    <div class="logo">
      <a href="https://www.aib.edu.au/" class="logo">
        <img
          src="https://www.aib.edu.au/wp-content/uploads/2019/03/AIB_logo.svg"
          alt="=australian institue of business"
        />
      </a>
    </div>
    <div class="nav1">
      <ul>
        <li>
          <a href>Call Us | 1300 304 820</a>
        </li>
        <li>
          <a href>The Practical Business School</a>
        </li>
        <li>
          <a href>Student Learning Portal</a>
        </li>
        <li>
          <a href>Contact</a>
        </li>
        <li>
          <a href>Enquire Now...</a>
        </li>
      </ul>
    </div>
    <div class="top3"></div>
    <div class="nav2">
      <ul>
        <li>
          <a href>Courses</a>
        </li>
        <li>
          <a href>Study with us</a>
        </li>
        <li>
          <a href>Students</a>
        </li>
        <li>
          <a href>Research</a>
        </li>
        <li>
          <a href>About Us</a>
        </li>
        <li>
          <a href>Alumni</a>
        </li>
        <li>
          <a href>Blog</a>
        </li>
        <li>
          <a href>
            <i class="fa fa-search"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 5) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
});
</script>
<style lang="scss" scoped>
</style>