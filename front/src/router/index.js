import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Read = () => import(/* webpackChunkName: "Read" */ '@/components/Read.vue');
const Create = () => import(/* webpackChunkName: "Create" */ '@/components/Create.vue');
const Detail = () => import(/* webpackChunkName: "Detail" */ '@/components/Detail.vue');

const routes = [
    {
        path: '/',
        name: 'Read',
        component: Read
    },
    {
        path: '/create/:contentId?',
        name: 'Create',
        component: Create
    },
    {
        path: '/detail/:contentId',
        name: 'Detail',
        component: Detail
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
