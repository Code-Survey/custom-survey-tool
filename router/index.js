import { createRouter, createWebHistory } from 'vue-router';
import ThankYouPage from '../src/components/ThankYouPage.vue';
import WelcomePage from '../src/components/WelcomePage.vue';

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: WelcomePage,
    },
    {
        path: '/thank-you',
        name: 'ThankYou',
        component: ThankYouPage,
    },
];

const router = createRouter({
    history: createWebHistory('/custom-survey-tool/'),
    routes,
  });

export default router;
