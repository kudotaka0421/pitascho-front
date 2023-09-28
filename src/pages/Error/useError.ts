import { useRouter } from "vue-router";

export function useError() {
    const router = useRouter();

    const goToTop = () => {
        // [TODO] カウンセリング予約ページが完成したらそこに飛ばす。今は一時的にLPに飛ばす
        router.push("/lp");
    };

    return { goToTop };
}
