import { ref } from "vue";

export function useSignup() {
    const isAuthenticationMailSent = ref(false);
    return { isAuthenticationMailSent };
}
