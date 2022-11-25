import Router from 'vue-router';
import AppHome from '@/components/pages/AppHome.vue';
import WorkshopsList from '@/components/pages/WorkshopsList/WorkshopsList.vue';
import WorkshopDetails from '@/components/pages/WorkshopDetails/WorkshopDetails.vue';
import SessionsList from '@/components/pages/WorkshopDetails/SessionsList.vue';
import AddSession from '@/components/pages/WorkshopDetails/AddSession.vue';

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
        },
        {
            name: 'workshop-details',
            path: '/workshops/:id',
            component: WorkshopDetails,
            children: [
                {
                    name: 'sessions-list',
                    path: '', // be careful not to add the leading /
                    component: SessionsList
                },
                {
                    name: 'add-session',
                    path: 'add', // be careful not to add the leading /
                    component: AddSession
                }
            ]
        }
    ]
});

export default router;