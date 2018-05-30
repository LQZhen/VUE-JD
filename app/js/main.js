import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import '../css/reset.scss'
import VueJsonp from 'vue-jsonp'
import '../viewport.js'

Vue.use(VueJsonp)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
