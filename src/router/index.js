import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PageNotFound from "../views/NotFound.vue";
import store from "../store/index";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    beforeEnter(to, from, next) {
      const { token } = store.state;
      if (token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
