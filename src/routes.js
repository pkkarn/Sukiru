import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter)

const router = [
    { 
        path: "/",
        component: () => import('./pages/HomePage.vue'),
        name: "home"
    },
    { 
        path: "/other",
        component: () => import('./pages/OtherPage.vue'),
        name: "other"
    },
]

export default new VueRouter({
    mode: 'history',
    routes: router,
})