import Vue from "vue";
import App from "./App";
//import router from "./router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
Vue.use(VueMaterial);
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
