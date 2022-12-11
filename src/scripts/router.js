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
import MyInfo from '@/pages/my/MyInfo';
import MyCart from '@/pages/my/MyCart';
import MyRoomCart from '@/pages/my/MyRoomCart';
import MyFoodCart from '@/pages/my/MyFoodCart';
import ShowMyRooms from '@/pages/show/ShowMyRooms';
import ShowMyFoods from '@/pages/show/ShowMyFoods';
import ShowAddRoom from '@/pages/show/ShowAddRoom';
import ShowAddFood from '@/pages/show/ShowAddFood';
import ShowMyRoomPost from '@/pages/show/ShowMyRoomPost';
import ShowMyFoodPost from '@/pages/show/ShowMyFoodPost';
import ShowEditRoom from '@/pages/show/ShowEditRoom';

import MyMap from '@/pages/MyMap';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/sign-up', component: SignUp },
    { path: '/show/main', component: ShowMain },
    { path: '/show/rooms', component: ShowRooms },
    { path: '/show/foods', component: ShowFoods },
    { path: '/show/my-posts', component: ShowMyMain},
    { path: '/show/my-posts/rooms', component: ShowMyRooms},
    { path: '/show/my-posts/foods', component: ShowMyFoods},
    { path: '/show/my-posts/rooms/add', component: ShowAddRoom},
    { path: '/show/my-posts/foods/:id/add', component: ShowAddFood},
    { path: '/show/my-posts/rooms/:id/edit', component: ShowEditRoom},
    { path: '/show/my-posts/rooms/:id', component: ShowMyRoomPost},
    { path: '/show/my-posts/foods/:id', component: ShowMyFoodPost},
    { path: '/show/rooms/:id', component: ShowRoom},
    { path: '/show/foods/:id', component: ShowFood},
    { path: '/my-info', component: MyInfo},
    { path: '/my-info/carts', component: MyCart},
    { path: '/my-info/carts/rooms', component: MyRoomCart},
    { path: '/my-info/carts/foods', component: MyFoodCart},
    
    { path: '/map', component: MyMap }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;