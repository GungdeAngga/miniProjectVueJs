import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/homePage.vue';
import Register from '@/views/registerPage.vue';
import Login from '@/views/loginPage.vue';
import Pulsa from '@/views/pulsaPage.vue';
import Topup from '@/views/topupPage.vue';
import Withdraw from '@/views/withdrawPage.vue';

Vue.use(VueRouter);

const routes = [



    {
        path: '/',
        name: 'loginPage',
        component: Login,
    },    
    {
        path: '/register',
        name: 'registerPage',
        component: Register,
    },
    {
        path: '/home',
        name: 'homePage',
        component: Home,
    },
    {
        path: '/pulsa',
        name: 'pulsaPage',
        component: Pulsa,
    },
    {
        path: '/topup',
        name: 'topupPage',
        component: Topup,
    },
    {
        path: '/withdraw',
        name: 'withdrawPage',
        component: Withdraw,
    },


];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
export default router;