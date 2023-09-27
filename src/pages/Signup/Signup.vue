<template>
    <div v-if="isAuthenticationMailSent">
        <div
            class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
        >
            <div class="text-center">
                <h1
                    class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                >
                    登録用メールをお送りしました。
                </h1>
                <p class="mt-6 text-base leading-7 text-gray-600">
                    メール中のリンクをクリックして登録処理を完了させてください。
                </p>
                <p class="text-base leading-7 text-gray-600">
                    メールが届かない場合はメールアドレスをご確認の上再度ご登録ください。
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="lp"
                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >トップページへ</a
                    >
                </div>
            </div>
        </div>
    </div>
    <SignupForm v-else />
</template>

<script setup lang="ts">
import SignupForm from "../../components/Signup/SignupForm.vue";

import { useSignup } from "./useSignup";

const { isAuthenticationMailSent } = useSignup();
</script>
