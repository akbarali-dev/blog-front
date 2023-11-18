import {createRouter, createWebHistory} from 'vue-router'
import {AbutView, ResumeView, PortfolioView, BlogView, ContactView} from "../views";
import PageNotFound from "../components/PageNotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'about',
            component: AbutView,
        },
        {
            path: '/resume',
            name: 'resume',
            component: ResumeView,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioView,
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/:pathMatch(.*)*',
            component: PageNotFound
        }

    ]
})

export default router
