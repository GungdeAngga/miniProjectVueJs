import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '@/views/homePage.vue';
import register from '@/views/registerPage.vue';
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
    }


];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
export default router;