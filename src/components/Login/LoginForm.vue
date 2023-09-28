<template>
    <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                class="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
            <!-- [TODO] ここのボタンダブルクリック防止したい -->
            <h2
                class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            >
                ログイン
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >メールアドレス</label
                    >
                    <div class="relative mt-2 h-15">
                        <input
                            v-model="email"
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            @input="inputValue('email')"
                            class="p-2 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label
                            for="password"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >パスワード
                        </label>
                    </div>
                    <div class="relative mt-2 h-15">
                        <input
                            v-model="password"
                            id="password"
                            name="password"
                            type="text"
                            autocomplete="password"
                            @input="inputValue('password')"
                            class="p-2 block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        :disabled="hasInvalidValue"
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        :class="[
                            hasInvalidValue
                                ? 'opacity-30'
                                : 'hover:bg-indigo-500',
                        ]"
                        @click.prevent="clickSignup"
                    >
                        ログイン
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, defineEmits } from "vue";
const email = ref("");
const password = ref("");

const emits = defineEmits(["login"]);

// email バリデーション
const isEmptyEmail = computed(() => {
    return email.value === "";
});

// password バリデーション
const isEmptyPassword = computed(() => {
    return password.value === "";
});

const hasInvalidValue = computed(() => {
    return isEmptyEmail.value || isEmptyPassword.value;
});

const isInitialForm = reactive({
    email: true,
    password: true,
});

const inputValue = (key: string) => {
    isInitialForm[key as keyof typeof isInitialForm] = false;
};

const clickSignup = () => {
    const params = {
        email: email.value,
        password: password.value,
    };
    emits("login", params);
};
</script>
