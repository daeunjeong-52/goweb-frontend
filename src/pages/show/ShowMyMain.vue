<template>
    <div>
        <div v-if="state.loggedIn">
      <Header />
        <div class="container">
            <div class="my-posts-header">
            <h3>나의 게시글 관리</h3>
            <div class="btn-group">
                <router-link to="/show/my-posts/rooms">
                    <button type="button" class="btn btn-secondary">My Rooms</button>
                </router-link>
                <router-link to="/show/my-posts/foods">
                    <button type="button" class="btn btn-secondary">My Foods</button>
                </router-link>
            </div>
        </div>
        </div>
      <Footer />
        </div>    
        <div v-else>
            <Login />
        </div>
    </div>
  
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ShowPostCard from '@/components/ShowPostCard.vue';
import Login from '../Login.vue';

export default {
    name: "ShowMyMain",
    components: {
        Header,
        Footer,
        ShowPostCard,
        Login
    },
    setup() {
        const state = reactive({
            user: null,
            loggedIn: false
        });

        axios.get('/api/account')
            .then(res => {
                state.user = res.data;
                state.loggedIn = true
            })

        return { state };
    }
}
</script>

<style scoped>
    .my-posts-header {
        text-align: center;
    }
    .btn-group {
        margin: 1rem;
        text-align: center;
    }
</style>