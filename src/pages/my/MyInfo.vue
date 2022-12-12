<template>
  <div>
      <Header />
      <div class="container">
        <div class="myinfo-btn-group">
        <router-link to="/my-info/carts">
            <button type="button" class="btn btn-secondary">장바구니</button>
        </router-link>
        <router-link to="/show/main">
            <button type="button" class="btn btn-secondary">메인으로</button>
        </router-link>
        <div class="my-info">
            <p>이름: {{ state.user.username }}</p>
            <p>닉네임: {{ state.user.nickname }}</p>
        </div>
      </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import axios from 'axios';
import { reactive } from 'vue';

export default {
    name: 'MyInfo',
    components: {
        Header,
        Footer
    },
    setup() {
        const state = reactive({
            user: null,
            loggedIn: false
        });

        axios.get("/api/account")
            .then(res => {
                state.user = res.data;
                loggedIn = true;
            })

        return { state };
    }
}
</script>

<style scoped>
    .myinfo-btn-group {
        text-align: center;
        margin: 1rem;
    }
    .my-info {
        margin: 1rem;
    }
    p {
        font-weight: bold;
    }
</style>   