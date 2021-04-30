import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import firstpage from "./componets/pages/myFirstVue.vue";
import secondpage from "./componets/pages/secondVue.vue";
import hooks from "./componets/basics/hooks.vue";
import methods from "./componets/basics/methods.vue";

import home from "./componets/pages/home.vue";



const routes = [{
    path: "/my-new-route",
    component: firstpage
  },
  {
    path: "/second-route",
    component: secondpage
  },
  {
    path: "/hooks",
    component: hooks
  },
  {
    path: "/methods",
    component: methods
  },
  {
    path: "/",
    component: home
  }
];

export default new Router({
  mode: "history",
  routes
});