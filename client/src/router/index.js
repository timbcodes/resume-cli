import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Routes go here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
