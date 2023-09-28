import { ref, computed } from "vue";
import { useAlertStore } from "./store/alert";
import { UsersIcon } from "@heroicons/vue/24/outline";
import { useMeStore } from "./store/me";

export function useApp() {
    const meStore = useMeStore();
    const alertStore = useAlertStore();

    const userNavigation = computed(() => {
        return [{ name: "ログアウト", href: "#" }];
    });

    const sidebarOpen = ref(false);

    const handleClick = (itemName: string) => {
        if (itemName === "ログアウト") {
            logout();
        }
    };

    const logout = () => {
        window.localStorage.removeItem("token");
        meStore.resetMe();
        alertStore.showSuccessAlert();
        window.location.href = "/login";
    };

    const navigation = computed(() => {
        return [
            {
                name: "スクール一覧",
                href: "/schools",
                icon: UsersIcon,
                current: false,
            },
            {
                name: "ユーザー一覧",
                href: "/users",
                icon: UsersIcon,
                current: false,
            },
        ];
    });

    const isNotRequireAuthenticationPage = computed(() => {
        const unauthenticatedPaths = ["/login", "/signup", "/lp", "/error"];

        return unauthenticatedPaths.includes(window.location.pathname);
    });

    const isSignUpOrLoginOrLpPage = computed(() => {
        // 閲覧にログインが必要なページの場合はtrueを返す
        // これのboolによって、表示文言を変えたり、API通信時にtokenを付与するかどうかを判断する
        const path = window.location.pathname;

        return path === "/login" || path === "/signup" || path === "/lp";
    });

    const isAuthenticated = computed(() => {
        const token = window.localStorage.getItem("token");
        return token ? true : false;
    });

    const userName = computed(() => {
        if (meStore.me.name) {
            return `${meStore.me.name}さん`;
        } else {
            return "";
        }
    });

    return {
        navigation,
        userNavigation,
        handleClick,
        logout,
        sidebarOpen,
        isNotRequireAuthenticationPage,
        isSignUpOrLoginOrLpPage,
        meStore,
        isAuthenticated,
        userName,
    };
}
