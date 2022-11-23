import Router from 'vue-router';
import AppHome from '@/components/pages/AppHome.vue';
import WorkshopsList from '@/components/pages/WorkshopsList/WorkshopsList.vue';

/**
 * EXERCISE: Read up on History API of browser
 */
const router = new Router({
    mode: 'history', // alternatively you can use 'hash' based routing (but history API based routing gives clean URLs)
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