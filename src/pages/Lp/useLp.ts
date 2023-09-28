import { useMeStore } from "@/store/me";

export function useLp() {
    const meStore = useMeStore();
    const img =
        "https://images.microcms-assets.io/assets/e3ac696edd424fde8f059de7938110e9/c7f85e6091124738ab57bebbf8530f52/samuraiengineer.jpeg?w=640";

    return { img, meStore };
}
