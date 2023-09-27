<template>
    <div class="fixed-alert">
        <!--  成功時のアラート -->
        <div
            v-if="alertStore.showAlertType == alertStore.alertType.success"
            class="rounded-md bg-green-50 p-4"
        >
            <div class="flex">
                <div class="flex-shrink-0">
                    <CheckCircleIcon
                        class="h-5 w-5 text-green-400"
                        aria-hidden="true"
                    />
                </div>
                <div class="ml-3">
                    <p class="text-sm font-medium text-green-800">
                        成功しました
                    </p>
                </div>
            </div>
        </div>

        <!-- 失敗時のアラート -->
        <div
            v-if="alertStore.showAlertType == alertStore.alertType.error"
            class="rounded-md bg-red-100 p-4"
        >
            <div class="flex">
                <div class="flex-shrink-0">
                    <XCircleIcon
                        class="h-5 w-5 text-red-400"
                        aria-hidden="true"
                    />
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">
                        エラーが発生しました
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid";
import { XCircleIcon } from "@heroicons/vue/20/solid";
import { useAlertStore } from "../store/alert";

const alertStore = useAlertStore();
</script>
<style scoped>
.fixed-alert {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
}
</style>
