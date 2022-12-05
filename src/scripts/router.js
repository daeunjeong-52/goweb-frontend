import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import ShowMain from '@/pages/show/ShowMain';
import ShowRooms from '@/pages/show/ShowRooms';
import ShowFoods from '@/pages/show/ShowFoods';
import ShowMyMain from '@/pages/show/ShowMyMain';
import ShowRoom from '@/pages/show/ShowRoom';
import ShowFood from '@/pages/show/ShowFood';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/sign-up', component: SignUp },
    { path: '/show/main', component: ShowMain },
    { path: '/show/rooms', component: ShowRooms },
    { path: '/show/foods', component: ShowFoods },
    { path: '/show/my-posts', component: ShowMyMain},
    { path: '/show/rooms/:id', component: ShowRoom},
    { path: '/show/foods/:id', component: ShowFood}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;