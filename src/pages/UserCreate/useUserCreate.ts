import { useAlertStore } from "@/store/alert";
import { useRouter } from "vue-router";
import { User, userRole } from "@/types/user";
import { createAxiosInstance } from "@/utils/axiosinstance";

export function useUserCreate() {
    const alertStore = useAlertStore();
    const router = useRouter();
    const axiosInstance = createAxiosInstance();

    const pages = [
        { name: "ユーザー一覧", href: "/users", current: false },
        { name: "ユーザー新規作成", href: "userCreate", current: true },
    ];

    const user = {
        name: "",
        email: "",
        password: "",
        role: userRole.Staff,
    };

    const createUser = async (params: User) => {
        try {
            await axiosInstance.post("/user", params);
            alertStore.showSuccessAlert();
            router.push("/users");
        } catch (err) {
            alertStore.showErrorAlert();
        }
    };

    return { pages, user, createUser };
}
