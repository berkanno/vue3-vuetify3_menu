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
        path: "/dinner",
        component: () => import("@/component/Dinner.vue"),
      },
      {
        path: "/breakfast",
        component: () => import("@/component/Breakfast.vue"),
      },
      {
        path: "/lunch",
        component: () => import("@/component/Lunch.vue"),
      },
      {
        path: "/snack",
        component: () => import("@/component/Snack.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
