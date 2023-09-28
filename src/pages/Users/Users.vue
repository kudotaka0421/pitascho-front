<template>
    <Breadcrumbs :pages="pages" />
    <UserList :users="users" />
</template>

<script setup lang="ts">
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import UserList from "../../components/User/UserList.vue";
import { useUsers } from "./useUsers";

const { pages, users } = useUsers();
</script>
