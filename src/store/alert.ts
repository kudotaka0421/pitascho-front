import { defineStore } from "pinia";

const alertType = {
    hide: 0,
    success: 1,
    error: 2,
};

export const useAlertStore = defineStore("alert", {
    state: () => {
        const alertType = {
            hide: 0,
            success: 1,
            error: 2,
        };

        return {
            showAlertType: alertType.hide,
            alertType: alertType,
        };
    },
    actions: {
        showSuccessAlert() {
            this.showAlertType = alertType.success;

            setTimeout(() => {
                this.showAlertType = alertType.hide;
            }, 3000);
        },

        showErrorAlert() {
            this.showAlertType = alertType.error;
        },
    },
});
