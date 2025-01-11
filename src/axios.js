export let axios;

export default {
    install(app) {
        // base url
        app.config.globalProperties.$http.defaults.baseURL = ""

        // request interceptor
        app.config.globalProperties.$http.interceptors.request.use(config => {
            config.headers.Accept = 'application/json';
            return config;
        })

        // response interceptor
        app.config.globalProperties.$http.interceptors.response.use(response => {
            return response;
        }, function (error) {

            return Promise.reject(error);
        })

        axios = app.config.globalProperties.$http;
    },
    get(url) {
        return axios.get(url);
    },
    post(url) {
        return axios.post(url);
    }
}