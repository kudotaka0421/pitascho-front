import { useAlertStore } from "@/store/alert";
import { User } from "@/types/user";
import { ref, onMounted } from "vue";
import { createAxiosInstance } from "@/utils/axiosinstance";

export function useUsers() {
    const alertStore = useAlertStore();
    const pages = [{ name: "ユーザー一覧", href: "/users", current: true }];
    const axiosInstance = createAxiosInstance();

    const users = ref<User[]>([]);

    const fetchUsers = async () => {
        try {
            const { data } = await axiosInstance.get("/user");
            users.value = data;
        } catch (err) {
            alertStore.showErrorAlert();
        }
    };

    onMounted(async () => {
        await fetchUsers();
    });

    return { pages, users };
}
