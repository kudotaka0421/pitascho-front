import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ConfirmAccount from "../pages/ConfirmAccount/ConfirmAccount";
import Signup from "../pages/Signup/Signup.vue";
import Login from "../pages/Login/Login.vue";
import Schools from "../pages/Schools/Schools.vue";
import { userRole } from "@/types/user";

const routes: RouteRecordRaw[] = [
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/confirm-account/:token",
        name: "ConfirmAccount",
        component: ConfirmAccount,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/schools",
        name: "Schools",
        component: Schools,
        meta: {
            requiresAuth: true,
            allowedRoles: [userRole.Admin, userRole.Staff],
        },
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
