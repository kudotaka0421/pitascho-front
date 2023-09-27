import { defineStore } from "pinia";
import { UserRole, userRole } from "@/types/user"; // user.ts から必要な部分をインポート

const meDefault = {
    id: null,
    name: "",
    email: "",
    isAuthenticated: false,
    role: userRole.Staff as UserRole,
};

export const useMeStore = defineStore("me", {
    state: () => {
        const me = {
            id: null,
            name: "",
            email: "",
            isAuthenticated: false,
            role: userRole.Staff as UserRole,
        };

        return {
            me: me,
        };
    },
    getters: {
        isStaff(): boolean {
            return this.me.role === userRole.Staff;
        },

        isAdmin(): boolean {
            return this.me.role === userRole.Admin;
        },
    },
    actions: {
        setMe(me: any) {
            this.me = me;
        },

        resetMe() {
            this.me = meDefault;
        },
    },
});
