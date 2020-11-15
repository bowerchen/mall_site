import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyLoad from 'vue-lazyload'
import VueCookies from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'swiper/css/swiper.css'
// import env from './env'

// const mock = true
// if (mock) {
//     require('./mock/api')
// }

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL

// 接口错误拦截
axios.interceptors.response.use((response) => {
    let res = response.data
    let path = location.hash
    if (res.status == 0) {
        return res.data
    } else if (res.status == 10) {
        if (path != '#/index') {
            window.location.href = '/#/login'
        }
        return Promise.reject(res)
    } else {
        // alert(res.msg)
        this.$message.warning(res.msg)
        return Promise.reject(res)
    }
})

Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.prototype.$message = Message
Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')