<template>
    <LoginForm @login="login" />
</template>

<script setup lang="ts">
import LoginForm from "../../components/Login/LoginForm.vue";

import { useLogin } from "./useLogin";

const { login } = useLogin();
</script>
