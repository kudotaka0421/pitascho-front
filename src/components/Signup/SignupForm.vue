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
                アカウント新規登録
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label
                        for="name"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >名前<span
                            class="ml-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
                            >必須</span
                        ></label
                    >
                    <div class="relative mt-2 h-15">
                        <input
                            v-model="name"
                            type="text"
                            name="name"
                            id="name"
                            autocomplete="name"
                            @input="inputValue('name')"
                            class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            :class="[
                                !isInitialForm.name && hasInvalidName
                                    ? 'ring-red-300 focus:ring-red-500 bg-red-100'
                                    : 'ring-gray-300 focus:ring-indigo-600',
                            ]"
                        />
                        <p
                            v-if="!isInitialForm.name && isEmptyName"
                            class="mt-2 text-sm text-red-600"
                            id="first-name-error"
                        >
                            名前を入力してください
                        </p>
                        <p
                            v-if="!isInitialForm.name && isLengthOverName"
                            class="mt-2 text-sm text-red-600"
                            id="last-name-error"
                        >
                            名前は50文字以内で入力してください
                        </p>
                    </div>
                </div>

                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >メールアドレス<span
                            class="ml-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
                            >必須</span
                        ></label
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
                            :class="[
                                !isInitialForm.email && hasInvalidEmail
                                    ? 'ring-red-300 focus:ring-red-500 bg-red-100'
                                    : 'ring-gray-300 focus:ring-indigo-600',
                            ]"
                        />

                        <p
                            v-if="!isInitialForm.email && isEmptyEmail"
                            class="mt-2 text-sm text-red-600"
                            id="email-error"
                        >
                            メールアドレスを入力してください
                        </p>
                        <p
                            v-if="!isInitialForm.email && isLengthOverEmail"
                            class="mt-2 text-sm text-red-600"
                            id="email-error"
                        >
                            メールアドレスは225文字以内で入力してください
                        </p>

                        <p
                            v-if="!isEmptyEmail && isInValidEmail"
                            class="mt-2 text-sm text-red-600"
                            id="email-error"
                        >
                            メールアドレスの形式が正しくありません
                        </p>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label
                            for="password"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >パスワード<span
                                class="ml-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
                                >必須</span
                            ></label
                        >
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
                            :class="[
                                !isInitialForm.password && hasInvalidPassword
                                    ? 'ring-red-300 focus:ring-red-500 bg-red-100'
                                    : 'ring-gray-300 focus:ring-indigo-600',
                            ]"
                        />

                        <p
                            v-if="!isInitialForm.password && isEmptyPassword"
                            class="mt-2 text-sm text-red-600"
                            id="email-error"
                        >
                            パスワードを入力してください
                        </p>

                        <p
                            v-if="!isInitialForm.password && isInvalidPassword"
                            class="mt-2 text-sm text-red-600"
                            id="email-error"
                        >
                            パスワードは英数字両方を含む<br />
                            8文字以上32文字以下で入力してください
                        </p>
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
                        作成する
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, defineEmits } from "vue";
import { userRole } from "../../types/user";
const name = ref("");
const email = ref("");
const password = ref("");

const emits = defineEmits(["signup"]);

//name バリデーション
const isEmptyName = computed(() => {
    return name.value === "";
});
const isLengthOverName = computed(() => {
    return !isEmptyName.value && name.value.length > 50;
});
const hasInvalidName = computed(() => {
    return isEmptyName.value || isLengthOverName.value;
});

// email バリデーション
const isEmptyEmail = computed(() => {
    return email.value === "";
});
const isLengthOverEmail = computed(() => {
    return !isEmptyEmail.value && email.value.length > 225;
});
const isInValidEmail = computed(() => {
    const emailPattern = /^[\w-+]+(\.[\w-]+)*@[\w-]+\..+$/;

    return !emailPattern.test(email.value);
});
const hasInvalidEmail = computed(() => {
    return (
        isEmptyEmail.value || isLengthOverEmail.value || isInValidEmail.value
    );
});

// password バリデーション
const isEmptyPassword = computed(() => {
    return password.value === "";
});
const isInvalidPassword = computed(() => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/;

    return !isEmptyPassword.value && !passwordPattern.test(password.value);
});
const hasInvalidPassword = computed(() => {
    return isEmptyPassword.value || isInvalidPassword.value;
});

const hasInvalidValue = computed(() => {
    return (
        hasInvalidEmail.value ||
        hasInvalidName.value ||
        hasInvalidPassword.value
    );
});

const isInitialForm = reactive({
    name: true,
    email: true,
    password: true,
});

const inputValue = (key: string) => {
    isInitialForm[key as keyof typeof isInitialForm] = false;
};

const clickSignup = () => {
    const params = {
        name: name.value,
        email: email.value,
        password: password.value,
        role: userRole.Staff,
    };
    emits("signup", params);
};
</script>
