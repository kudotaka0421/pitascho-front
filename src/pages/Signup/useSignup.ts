import { useAlertStore } from "../../store/alert";
import { User } from "../../types/user";
import { ref } from "vue";
import { createAxiosInstance } from "@/utils/axiosinstance";

export function useSignup() {
    const alertStore = useAlertStore();
    const axiosInstance = createAxiosInstance();

    const isAuthenticationMailSent = ref(false);

    const signup = async (params: User) => {
        try {
            await axiosInstance.post("/user", params);
            isAuthenticationMailSent.value = true;
        } catch (err) {
            alertStore.showErrorAlert();
        }
    };
    return { signup, isAuthenticationMailSent };
}
