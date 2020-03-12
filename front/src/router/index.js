import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const BoardList = () => import(/* webpackChunkName: "BoardList" */ '@/components/board/BoardList.vue');

const routes = [
    {
        path: '/',
        name: 'BoardList',
        component: BoardList
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
