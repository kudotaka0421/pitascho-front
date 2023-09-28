<template>
    <div>
        <Breadcrumbs :pages="pages" />
        <UserForm
            :user="user"
            :form-type="formType"
            @changeMode="changeMode"
            @update="updateUser"
            @delete="deleteUser"
        />
    </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import UserForm from "../../components/User/UserForm.vue";

import { useUserDetail } from "./useUserDetail";

const { pages, user, formType, changeMode, updateUser, deleteUser } =
    useUserDetail();
</script>
