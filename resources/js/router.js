import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import hooks from "./componets/basics/hooks.vue";
import methods from "./componets/basics/methods.vue";

import home from "./componets/pages/home.vue";
import tags from "./componets/pages/tags.vue";



const routes = [

  //projects routes

  {
    path: "/",
    component: home
  },

  {
    path: "/tags",
    component: tags
  },





  //basic concepts
  {
    path: "/hooks",
    component: hooks
  },
  {
    path: "/methods",
    component: methods
  },

];

export default new Router({
  mode: "history",
  routes
});