import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Team from "../views/Team.vue";
import Unfound from "../views/Unfound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "dasboard",
    component: Dashboard
  },
  {
    path: "/projects",
    name: "project",
    component: Projects
  },
  {
    path: "/team",
    name: "team",
    component: Team
  },
  {
    path: "*",
    name: "unfound",
    component: Unfound
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: Login
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: Register
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
  // {
  //   path: "*",
  //   name: "Notfound",
  //   component: Notfound
  // }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
