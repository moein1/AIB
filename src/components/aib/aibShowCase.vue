<template>
  <div class="aib-show-case">
    <h1>Why study with us</h1>
    <div class="aib-show-case-content">
      Australian Institute of Business (AIB) is the largest online MBA provider in Australia. AIB has over 30 years of excellence in tertiary education, and a global network of more than 16,000 students and alumni in over 90 countries. AIB’s programs are internationally recognised and fully accredited in Australia. The
      <a
        href="https://www.aib.edu.au/courses/aib-mba/"
      >AIB Master of Business Administration</a>&nbsp;degree is delivered online, and is industry focused with practical, flexible learning designed for today’s business world.
    </div>

    <div class="showcase-container">
      <aib-show-case-parts v-for="(showCase, index) in showCaseList" :key="index">
        <aib-show-case-part :showCasePart="showCase"></aib-show-case-part>
      </aib-show-case-parts>
    </div>
  </div>
</template>
<script >
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      test: "tsdf",
      showCaseList: [
        {
          id: 1,
          src:
            "https://cdn.aib.edu.au/public-website/uploads/2019/02/30-year-desktop-450x230.png",
          header: "30 years of history",
          content:
            "AIB has a rich history of excellence in tertiary education, academic expertise and online learning.",
          target: "https://www.aib.edu.au/about-us/about-aib/",
          targetCaption: "Read more"
        },
        {
          id: 2,
          src:
            "https://cdn.aib.edu.au/public-website/uploads/2019/02/Accredited-desktop-450x230.png",
          header: "Accredited and recognised",
          content:
            "The AIB MBA is fully accredited in Australia. Internationally recognised. And industry aligned.",
          target:
            "https://www.aib.edu.au/about-us/accreditations-and-memberships/",
          targetCaption: "Read more"
        },
        {
          id: 3,
          src:
            "https://cdn.aib.edu.au/public-website/uploads/2019/02/hightly-affordable-desktop-450x230.png",
          header: "Highly affordable",
          content:
            "The AIB MBA is amongst the most affordable in Australia for one simple reason – all our tuition is online.",
          target: "https://www.aib.edu.au/courses/aib-mba/#tag-course-fees",
          targetCaption: "Read more"
        },
        {
          id: 4,
          src:
            "https://cdn.aib.edu.au/public-website/uploads/2019/02/fully-flexible-desktop-450x230.png",
          header: "Fully flexible",
          content:
            "We put students first. Always. Our subjects fit around your needs as a working adult.",
          target:
            "https://www.aib.edu.au/courses/aib-mba/#tag-course-structure",
          targetCaption: "Read more"
        }
      ]
    };
  }
});
</script>
<style lang="scss" scoped>
</style>