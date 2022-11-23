import Router from 'vue-router';
import AppHome from '@/components/pages/AppHome.vue';
import WorkshopsList from '@/components/pages/WorkshopsList/WorkshopsList.vue';

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home', // unique name for the route
            path: '/',
            component: AppHome
        },
        {
            name: 'workshops-list',
            path: '/workshops',
            component: WorkshopsList
        }
    ]
});

export default router;