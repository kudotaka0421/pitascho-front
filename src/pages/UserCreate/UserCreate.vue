<template>
    <div>
        <Breadcrumbs :pages="pages" />
        <UserForm :user="user" form-type="create" @create="createUser" />
    </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import UserForm from "../../components/User/UserForm.vue";

import { useUserCreate } from "./useUserCreate";

const { pages, user, createUser } = useUserCreate();
</script>
