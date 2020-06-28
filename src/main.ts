import Vue from "vue";
import App from "./App.vue";
import store from "./store";



/**aib sections */
import aibLandingPage from './components/aib/aibLandingPage.vue';
import aibFooter from './components/aib/aibFooter.vue';
import aibTopSection from './components/aib/aibTopSection.vue';
import aibSlider from './components/aib/aibSlider.vue';
import aibShowCase from './components/aib/aibShowCase.vue';
import aibShowCasePart from './components/aib/aibShowCasePart.vue';
import aibPartnerships from './components/aib/aibPartnerships.vue';


Vue.component('aibLandingPage', aibLandingPage);
Vue.component('aibFooter', aibFooter);
Vue.component('aibTopSection', aibTopSection);
Vue.component('aibSlider', aibSlider);
Vue.component('aibShowCase', aibShowCase);
Vue.component('aibShowCasePart', aibShowCasePart);
Vue.component('aibPartnerships', aibPartnerships);


import "font-awesome/css/font-awesome.css";
import router from "./router";


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount("#app");
