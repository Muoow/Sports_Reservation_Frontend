import { createRouter, createWebHistory } from 'vue-router'
import Reservation from '../components/Reservation.vue'
import VenueDetail from '../components/VenueDetail.vue'



const Dummy = { template: '<div style="padding:20px;"><h2>ҳ�潨����...</h2></div>' }

const routes = [
    {
        path: '/reservation',
        name: 'Reservation',
        component: Reservation
    },
    {
        path: '/community',
        name: 'Community',
        component: Dummy
    },
    {
        path: '/news',
        name: 'News',
        component: Dummy
    },
    {
        path: '/',
        redirect: '/reservation'  // Ĭ���ض���ԤԼҳ
    },
    { path: '/venue/:id', component: VenueDetail }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
