import { createRouter, createWebHistory } from "vue-router";
import MenuScreen from "@/views/MenuScreen.vue";
import MainResume from "@/views/MainResume.vue";
import LoginScreen from "@/views/LoginScreen.vue";

const routes = [
  {
    path: "/",
    name: "MenuScreen",
    component: MenuScreen,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/resume",
    name: "MainResume",
    component: MainResume,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "LoginScreen",
    component: LoginScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, _, next) => {
  const isAuthenticated = localStorage.getItem("jwtToken") !== null;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "LoginScreen" });
  } else if (
    (to.name === "LoginScreen" || to.name === "ResetPassword") &&
    isAuthenticated
  ) {
    next({ name: "MenuScreen" });
  } else {
    next();
  }
});

export default router;
