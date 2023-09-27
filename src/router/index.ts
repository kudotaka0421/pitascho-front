import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import ConfirmAccount from "../pages/ConfirmAccount/ConfirmAccount"; // ConfirmAccountコンポーネントのパスに応じて変更してください
import Signup from "../pages/Signup/Signup.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/error",
        name: "Error",
        component: Error,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: Error,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to) => {
    if (to.name === "NotFound") {
        window.location.href = "/error";
    }
});

export default router;
