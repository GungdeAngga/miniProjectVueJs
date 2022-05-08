import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '@/views/homePage.vue';
import register from '@/views/registerPage.vue';
import login from '@/views/loginPage.vue';
import pulsa from '@/views/pulsaPage.vue';

Vue.use(VueRouter);

const routes = [

    {
        path: '/',
        name: 'homePage',
        component: home,
    },
    {
        path: '/:id',
        name: 'registerPage',
        component: register,
    },
    {
        path: '/id',
        name: 'loginPage',
        component: login,
    },
    {
        path: '/:id',
        name: 'pulsaPage',
        component: pulsa,
    },

];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
export default router;