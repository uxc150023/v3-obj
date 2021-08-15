import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import * as PageFactory from "../pages/factory.page";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: PageFactory.homePagePreloading,
  },
  {
    path: "/login",
    name: "Login",
    component: PageFactory.loginPagePreloading,
  },
];

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  return savedPosition || { el: "#app", top: 0 };
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

export default router;
