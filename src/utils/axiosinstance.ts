import axios from "axios";

function createAxiosInstance() {
    const token = window.localStorage.getItem("token");
    if (token) {
        return createInstanceWithAuth();
    } else {
        return createInstanceWithoutAuth();
    }
}

// トークンを使用するインスタンス
function createInstanceWithAuth() {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    });

    instance.interceptors.request.use((config) => {
        const token = window.localStorage.getItem("token");
        config.headers.Authorization = token ? `Bearer ${token}` : "";
        return config;
    });

    return instance;
}

// トークンを使用しないインスタンス
function createInstanceWithoutAuth() {
    return axios.create({
        baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    });
}

export { createAxiosInstance };
