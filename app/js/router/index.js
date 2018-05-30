import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Earn from "../earn/index.vue"
import Vip from "../vip/index.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: '/home'
        },
        {
            path: "/home",
            name: "Home",
            component: Home,
        },
        {
            path: "/earn",
            name: "Earn",
            component: Earn,
        },
        {
            path: "/vip",
            name: "Vip",
            component: Vip,
        }
    ],
})
