import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import * as PageFactory from "../pages/factory.page";
const routes: RouteRecordRaw[] = [
  
  {
    path: "/login",
    name: "Login",
    component: PageFactory.loginPagePreloading,
  },
  {
    path: "",
    name: "Frame",
    component: PageFactory.framePagePreloading,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: PageFactory.homePagePreloading,
        meta: {
          title: "首页",
        },
      },
    ]
  }
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
