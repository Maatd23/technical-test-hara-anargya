import Dashboard from '../views/Dashboard.vue';
import Overview from '../views/Overview.vue';


const routes = [
    {
        path: '/',
        name: "Home",
        component: Dashboard,
    },
    {
        path: '/overview',
        name: "Overview",
        component: Overview,
    }
]


export default routes