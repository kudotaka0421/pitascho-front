import { useAlertStore } from "@/store/alert";
import { ref, onMounted } from "vue";
import { userRole, User } from "@/types/user";
import { useRouter } from "vue-router";
import { createAxiosInstance } from "@/utils/axiosinstance";

export function useUserDetail() {
    const alertStore = useAlertStore();
    const router = useRouter();
    const axiosInstance = createAxiosInstance();

    const pages = [
        { name: "ユーザ一覧", href: "/users", current: false },
        { name: "ユーザー詳細", href: "", current: true },
    ];
    const userId = location.pathname.split("/")[2];

    const user = ref<User>({
        id: 0,
        name: "",
        email: "",
        role: userRole.Staff,
    });

    const formType = ref<"view" | "edit">("view");

    const changeMode = (mode: "view" | "edit") => {
        formType.value = mode;
    };

    const fetchUser = async () => {
        try {
            const { data } = await axiosInstance.get(`/user/${userId}`);
            user.value = data;
        } catch (err) {
            alertStore.showErrorAlert();
        }
    };

    const updateUser = async (params: User) => {
        try {
            await axiosInstance.put(`/user/${userId}`, params);
            await fetchUser();
            formType.value = "view";
            alertStore.showSuccessAlert();
        } catch (err) {
            alertStore.showErrorAlert();
        }
    };

    const deleteUser = async () => {
        try {
            await axiosInstance.delete(`/user/${userId}`);
            await fetchUser();
            alertStore.showSuccessAlert();
            router.push("/users");
        } catch (err) {
            alertStore.showErrorAlert();
        }
    };

    onMounted(async () => {
        await fetchUser();
    });

    return { pages, user, formType, changeMode, updateUser, deleteUser };
}
