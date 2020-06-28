<template>
  <div id="landing-page">
    <aib-top-section></aib-top-section>
    <aib-slider :slideList="slideList"></aib-slider>
    <aib-show-case></aib-show-case>
    <!-- show case start -->
    <div class="mba-listing">
      <div class="mba-listing-left">
        <a
          href="/study-with-us/industry-partnerships/martin-herbst/"
          class="image-box lazy"
          style="display: none; background-image: url(&quot;/wp-content/uploads/2019/03/men2.jpeg&quot;);"
        ></a>
        <div class="mba-listing-left-content">
          <h3>Featured guest lecturer</h3>
          <div class="user-details">
            <h4>Martin Herbst</h4>
            <p c>GM, Asia Pacific, eBay Classifieds Group</p>
          </div>
        </div>
      </div>
      <div id="mba-listing-second" class="mba-listing-right">
        <h3>Australia’s No. 1 Online MBA*</h3>
        <div class="mba-second-contnet">
          <img src="https://www.aib.edu.au/wp-content/uploads/2019/03/upwards-trend-icon.svg" alt />
          <p>*AIB is Australia’s largest provider of Online MBAs; Source: 2017 Higher Education Statistics, Australian Department of Education and Training (provided December 2018)</p>
        </div>
      </div>
      <div id="mba-listing-third" class="mba-listing-right">
        <h3>SALARY INCREASE GOALS ACHIEVED</h3>
        <div class="mba-second-contnet">
          <img src="https://www.aib.edu.au/wp-content/uploads/2019/03/upwards-trend-icon.svg" alt />
          <div>
            <p>74% of AIB MBA alumni surveyed achieved their salary increase goals</p>
            <a
              href="https://www.aib.edu.au/wp-content/uploads/2020/04/AIB-MBA-Alumni-Insights-2019.pdf"
              target="_blank"
            >2019 AIB MBA Alumni Insights Report</a>
          </div>
        </div>
      </div>
    </div>
    <!-- show case end -->
    <!-- media section start -->
    <div id="media-section">
      <div>
        <h3>Fully Accredited in Australia. Internationally Recognised.</h3>
        <p>AIB’s programmes are accredited by TEQSA within the Australian Qualifications Framework (AQF) and internationally recognised</p>
        <a href="https://www.aib.edu.au/about-us/accreditations-and-memberships/">Read More</a>
      </div>
      <div class="media-img"></div>
    </div>
    <!-- media section end -->
    <!-- partnership section -->
    <aib-partnerships :partnershipObject="partnershipObject"></aib-partnerships>
    <!-- show case second start -->
    <div class="showcase-second">
      <div class="aibVideoParlalax"></div>
      <div class="paralax-content">
        <i class="fa fa-play-circle"></i>
        <h2>HERE’S WHY THE AIB MBA IS SO POPULAR</h2>
      </div>
    </div>
    <!-- show case second end -->
    <!-- contact section -->
    <div class="contact-section">
      <h2>CONTACT A COURSE ADVISOR</h2>
      <div class="enquire">
        <a href="https://www.aib.edu.au/enquire-now/">Enquire Now</a>
      </div>
    </div>
    <!-- contanct section end -->
    <!-- stundent section start -->
    <div class="stundent-section">
      <h2>OUR STUDENTS ARE GLOBAL</h2>
      <div>
        <p>Our graduates join an alumni community that today represents more than 90 countries</p>
      </div>
      <div class="static-section">
        <div class="static-number">
          <h2>48%</h2>
          <p>International</p>
        </div>
        <div class="static-map"></div>
        <div class="static-number">
          <h2>52%</h2>
          <p>Australia</p>
        </div>
      </div>
    </div>
    <!-- end of student section -->
    <!-- start of graduate section -->
    <div class="graduate-container">
      <div class="graduate-section">
        <div class="note">
          <i class="fa-quote-left fa"></i>

          <p>For me, I can’t wait to see where this MBA is going to take me. It’s not only given me a validation of my own abilities and skills, but the confidence to move forward in my career. Every second of this journey has been worth it because now that I have this MBA, nothing can stop me.</p>
          <i class="fa-quote-right fa"></i>
        </div>
        <div class="bio">
          <div>
            <img src="https://www.aib.edu.au/wp-content/uploads/2019/03/Image-3.jpg" />
          </div>
          <div class="name-position">
            <h4>Julie Jardine</h4>
            <p>Supply Chain Manager Hoshizaki Lancer</p>
          </div>
        </div>
      </div>
      <div>
        <a href="https://www.aib.edu.au/study-with-us/student-stories/">See what graduate are saying</a>
      </div>
    </div>
    <!-- end of graduate section -->
    <!-- start of review section -->
    <div class="review-section">
      <div>
        <img src="https://www.aib.edu.au/wp-content/uploads/2019/03/logo-product-review.svg" />
      </div>
      <div class="review-start">
        <img src="https://www.aib.edu.au/wp-content/uploads/2019/03/star-rating-4-2.png" />
      </div>
      <div>
        <span>
          <strong>
            <span class="name" itemprop="name">Australian Institute of Business (AIB)</span>
          </strong> is
          <span>
            rated&nbsp;
            <strong>
              <span>4.3</span> out of
              <span>5</span>
            </strong> by
            <span>170</span> students and alumni.
          </span>
        </span>
      </div>
    </div>
    <!-- end of review section -->
    <!-- footer section -->
    <aib-footer></aib-footer>
  </div>
</template>
<script >
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      slideList: [
        {
          id: 1,
          header: "AIB | MBA",
          url:
            "https://cdn.aib.edu.au/public-website/uploads/2020/03/Website-banner-template.jpg",
          content: "Australia’s No.1 Online MBA",
          tatget:
            'https://www.aib.edu.au/courses/aib-mba/" class="btn  btn-white',
          targetCaption: "Find out more"
        },
        {
          id: 2,
          header: "COVID-19 RELIEF SCHOLARSHIP",
          url:
            "https://cdn.aib.edu.au/public-website/uploads/2020/04/Website-banner-02.jpg",
          content:
            "This scholarship program offers future students, impacted by COVID-19, to receive their first and third subject fee-free.",
          target:
            "https://www.aib.edu.au/study-with-us/covid19-relief-scholarship/",
          targetCaption: "Find out more"
        },

        {
          id: 3,
          header: "GOALS ACHIEVED",
          url:
            "https://cdn.aib.edu.au/public-website/uploads/2020/03/AIB-Website-banner-5.jpg",
          content:
            "Our 2019 Alumni Insights Report describes what achievements our alumni sought and gained from our MBA",
          target:
            "https://www.aib.edu.au/wp-content/uploads/2020/04/AIB-MBA-Alumni-Insights-2019.pdf",
          targetCaption: "View Report"
        },
        {
          id: 4,
          header: "INDUSTRY PARTNERSHIPS",
          url:
            "https://cdn.aib.edu.au/public-website/uploads/2020/03/AIB-Website-banner-10.jpg",
          content:
            "Speakers and alumni from over 32 different companies seated worldwide",
          target: "https://www.aib.edu.au/study-with-us/partnerships/",
          targetCaption: "FIND OUT MORE"
        }
      ],
      partnershipObject: {
        header: "Industry Partnerships",
        content:
          "AIB is partnering with a series of prominent organisations to strengthen our practical linkage for our valued student community.",
        partnerships: [
          {
            id: 1,
            src:
              "https://www.aib.edu.au/wp-content/uploads/2019/03/Linkedin-e1554024072826.png"
          },
          {
            id: 2,
            src:
              "https://www.aib.edu.au/wp-content/uploads/2019/03/industry-partner-audi-logo.jpg"
          },
          {
            id: 3,
            src:
              "https://www.aib.edu.au/wp-content/uploads/2019/03/industry-partner-bdo.png"
          },
          {
            id: 4,
            src:
              "https://www.aib.edu.au/wp-content/uploads/2019/03/industry-partner-hays-canada-logo.jpg"
          },
          {
            id: 5,
            src:
              "https://www.aib.edu.au/wp-content/uploads/2019/03/industry-partner-kyocera.jpg"
          },
          {
            id: 6,
            src:
              "https://www.aib.edu.au/wp-content/uploads/2019/03/industry-partner-mercer-logo.jpg"
          }
        ],
        target: "https://www.aib.edu.au/study-with-us/partnerships/",
        targetCaption: "Read More"
      }
    };
  }
});
</script>
<style lang="scss" scoped>
</style>