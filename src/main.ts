import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionApi from "@vue/composition-api";
import vuetify from "./plugins/vuetify";
import hooks from "@u3u/vue-hooks";

Vue.config.productionTip = false;

Vue.use(hooks);
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
