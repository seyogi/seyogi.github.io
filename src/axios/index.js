export let axios;
var id = "AKfycbwiWOq68d5digDAOCgVI9bDzpukiiX3_-dhcVqrQGafWvNw2YxLHLQ6LuBEnGzoyQeg"
var url = 'https://script.google.com/macros/s/' + id + '/exec'

export default {
    install(app) {
        // base url
        app.config.globalProperties.$http.defaults.baseURL = url

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