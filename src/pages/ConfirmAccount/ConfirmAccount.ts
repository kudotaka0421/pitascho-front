import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { createAxiosInstance } from "@/utils/axiosinstance";
import { useAlertStore } from "@/store/alert";

export default {
    name: "ConfirmAccount",
    setup() {
        const router = useRouter();
        const route = useRoute();
        const alertStore = useAlertStore();

        onMounted(async () => {
            const tokenParams = route.params.token;
            const axiosInstance = createAxiosInstance();
            try {
                await axiosInstance.post(`/confirm-account/${tokenParams}`);
                router.push("/login");
            } catch (error) {
                alertStore.showErrorAlert();
            }
        });
    },
};
