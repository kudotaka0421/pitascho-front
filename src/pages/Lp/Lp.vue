<template>
    <div>
        <div>LPページ</div>

        <div class="w-full">
            <img class="mx-auto w-auto" :src="img" alt="Your Company" />
        </div>

        <div>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXaB03cHjFpAbEqFS9uf3n9sTMiBhI1Xz0dkwpQVVRVvo2Aw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                >お問い合わせ</a
            >
        </div>
    </div>
</template>
<script setup lang="ts">
import { useLp } from "./useLp";

const { img } = useLp();
</script>
