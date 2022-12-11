<template>
  <div>
      <Header/>
        <!-- content -->
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="/img/room/room4.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">{{ state.room[0].title }}</h1>
            <p class="lead">{{ state.room[0].description }}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            </div>
          </div>
          <span>이 게시글 찜(추가 구현 필요)</span>
        </div>
      </div>

      <!-- 제품 정보 -->
      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 border-bottom">제품 정보</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div class="col d-flex align-items-start" v-for="(roomItem, idx) in state.roomItems" :key="idx">
                <ShowRoomItem :roomItem="roomItem"/>
            </div>
        </div>
      </div>
        
      <!-- 수정 -->
      <div class="my-btn-group">
        <router-link :to="{path: `/show/my-posts/rooms/${state.room[0].id}/edit`}">
                <button type="button" class="btn btn-outline-secondary">수정</button>
        </router-link>
        <button type="button" class="btn btn-outline-secondary" @click="remove(state.room[0].id)">삭제</button>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ShowRoomItem from '@/components/ShowRoomItem.vue';
import axios from 'axios';
import { reactive } from 'vue';
import {useRoute} from "vue-router";
import router from '@/scripts/router.js';

export default {
    name: "ShowMyRoomPost",
    components: {
        Header,
        Footer,
        ShowRoomItem
    },
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const state = reactive({
            user: null,
            loggedIn: false,
            room: {},
            roomItems: [],
            postId: id
        });

        axios.get("/api/account")
        .then((res) => {
            state.user = res.data;
            state.loggedIn = true;
        });

        axios.get("/api/my-posts/rooms", {
            params: {
                "postId" : state.postId
            }
        })
        .then(res => {
            console.log(res.data);
            state.room = res.data;
            state.roomItems = state.room[0].RoomItems;
        })

        const remove = (id) => {
            axios.delete('/api/my-posts/rooms', {
                params: {
                    "postId": id
                }
            })
            .then((res) => {
                window.alert('게시물이 삭제되었습니다');
                router.push({ path: '/show/my-posts/rooms'});
            })
        };



        return { state, remove };
    }
}
</script>

<style scoped>
    .my-btn-group {
        text-align: center;
        margin: 1rem;
    }
</style>