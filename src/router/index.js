import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("../layout/Layout"),
    children: [
      {
        path: "/findmusic",
        name: "findmusic",
        component: () => import("../views/FindMusic/Index"),
      },
      {
        path: "/fm",
        name: "fm",
        component: () => import("../views/FM/Index"),
      },
      {
        path: "/video",
        name: "video",
        component: () => import("../views/Video/Index"),
      },
      {
        path: "/attention",
        name: "attention",
        component: () => import("../views/Attention/Index"),
      },
    ],
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
