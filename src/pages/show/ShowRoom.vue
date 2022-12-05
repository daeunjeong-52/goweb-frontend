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

      <!-- 제품 정보 검색 -->
      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 border-bottom">제품 정보 검색해보기</h2>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="원하는 정보를 검색해보세요 (외부 api 연동)" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="state.query">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search()">검색</button>
        </div>
        <div v-for="(item, idx) in state.searchItems" :key="idx">
            <SearchItem :item="item"/>
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="addCart(item)">담기</button>
        </div>
      </div>

      <!-- 댓글 -->
      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-3 border-bottom">소통 공간</h2>
        <CommentList :comments="state.comments"/>
      </div>
      
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import {useRoute} from "vue-router";
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ShowRoomItem from '@/components/ShowRoomItem.vue';
import CommentList from '@/components/CommentList.vue';
import SearchItem from '@/components/SearchItem.vue';

export default {
    name: 'ShowRoom',
    components: {
        Header,
        Footer,
        ShowRoomItem,
        CommentList,
        SearchItem
    },
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const state = reactive({
            room: {},
            roomItems: [],
            comments: [],
            query: "",
            searchItems: [],
            userId: sessionStorage.getItem("id")
        })

        // room 상세
        axios.get('/api/show/rooms/' + id)
            .then((res) => {
                state.room = res.data;
                state.roomItems = state.room[0].RoomItems;
            })

        // comments
        axios.get('/api/show/rooms/' + state.postId + '/comments')
            .then((res) => {
                state.comments = res.data;
            })

        const search = () => {
          axios.get('/api/search/items', {
            params: {
              "query": state.query
            }
          })
          .then((res) => {
            console.log(res.data.items);
            state.searchItems = res.data.items;
          })
        }

        // 장바구니 담기
        const addCart = (item) => {
          const args = {
            image: item.image,
            brand: item.brand,
            link: item.link,
            lprice: item.lprice,
            category1: item.category1,
            category2: item.category2,
            category3: item.category3,
            category4: item.category4
          };
          axios.post('/api/carts/room', args, {
            params: {
              "userId": state.userId
            }
          })
          .then((res) => {
            console.log(res);
          })
        }

        return { state, route, id, search, addCart };
    }
}
</script>

<style scoped>

</style>