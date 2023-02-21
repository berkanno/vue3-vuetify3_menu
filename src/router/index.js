// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Menu",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Menu.vue"),
      },
      {
        path: "/bbqs",
        component: () => import("@/component/Bbqs.vue"),
      },
      {
        path: "/breads",
        component: () => import("@/component/Breads.vue"),
      },
      {
        path: "/burgers",
        component: () => import("@/component/Burgers.vue"),
      },
      {
        path: "/chocolates",
        component: () => import("@/component/Chocolates.vue"),
      },
      {
        path: "/desserts",
        component: () => import("@/component/Desserts.vue"),
      },
      {
        path: "/drinks",
        component: () => import("@/component/Drinks.vue"),
      },
      {
        path: "/fried-chicken",
        component: () => import("@/component/Fried-chicken.vue"),
      },
      {
        path: "/ice-cream",
        component: () => import("@/component/Ice-cream.vue"),
      },
      {
        path: "/pizzas",
        component: () => import("@/component/Pizzas.vue"),
      },
      {
        path: "/porks",
        component: () => import("@/component/Porks.vue"),
      },
      {
        path: "/sandwiches",
        component: () => import("@/component/Sandwiches.vue"),
      },
      {
        path: "/sausages",
        component: () => import("@/component/Sausages.vue"),
      },
      {
        path: "/steaks",
        component: () => import("@/component/Steaks.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
