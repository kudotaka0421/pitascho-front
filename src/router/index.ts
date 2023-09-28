import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ConfirmAccount from "../pages/ConfirmAccount/ConfirmAccount";
import Signup from "../pages/Signup/Signup.vue";
import Login from "../pages/Login/Login.vue";
import Schools from "../pages/Schools/Schools.vue";
import Error from "../pages/Error/Error.vue";
import Lp from "../pages/Lp/Lp.vue";
import Users from "../pages/Users/Users.vue";

import { userRole } from "@/types/user";
import { useMeStore } from "@/store/me";
import { createAxiosInstance } from "@/utils/axiosinstance";

const axiosInstance = createAxiosInstance();

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
        path: "/users",
        name: "Users",
        component: Users,
        meta: {
            requiresAuth: true,
            allowedRoles: [userRole.Admin],
        },
    },
    {
        path: "/lp",
        name: "Lp",
        component: Lp,
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

const fetchMe = async () => {
    const meStore = useMeStore();
    try {
        const { data } = await axiosInstance.get("/me");
        meStore.setMe(data);
    } catch (err) {
        window.location.href = "/error";
    }
};

router.beforeEach(async (to, from, next) => {
    const meStore = useMeStore();

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        await fetchMe();

        // 認証チェック
        if (!meStore.me.isAuthenticated) {
            window.location.href = "/error";
            return;
        }

        // 権限チェック
        if (to.meta.allowedRoles) {
            if (
                Array.isArray(to.meta.allowedRoles) &&
                !to.meta.allowedRoles.includes(meStore.me.role)
            ) {
                window.location.href = "/error";
                return;
            }
        }

        next();
    } else {
        next();
    }
});

router.afterEach((to) => {
    if (to.name === "NotFound") {
        window.location.href = "/error";
    }
});

export default router;
