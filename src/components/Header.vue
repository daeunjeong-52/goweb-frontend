<template>
    <div id="header">
        <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            슬기로운 자취생활
          </a>
    
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" class="nav-link px-2 link-dark"><span style="color:#D0B8A8;">자랑공간</span></a></li>
            <li><a href="#" class="nav-link px-2 link-dark">꿀팁공간</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">대화공간</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">질문공간</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">내 정보</a></li>
          </ul>

          <!-- login/logout -->
          <div class="col-md-3 text-end">
            <router-link to="/login" class="text" v-if="!$store.state.account.id">로그인</router-link>
            <a to="/login" class="text" @click="logout()" v-else>로그아웃</a>
          </div>
        </header>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import { reactive } from "vue";
import store from '@/scripts/store';
import router from '@/scripts/router';

export default {
    name: 'Header',
    setup() {

      // 세션 - clear
      const logout = () => {
        store.commit("setAccount", 0);
        router.push({path: "/show/main"});

        axios.delete("/api/account")
          .then(() => {
            window.alert('로그아웃 하였습니다');
          })
      }

      return { logout };
    }
}
</script>

<style scoped>
    

    li {
      list-style: none
    }
</style>