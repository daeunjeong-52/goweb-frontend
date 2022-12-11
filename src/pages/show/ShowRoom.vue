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
          <div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" aria-describedby="basic-addon2" v-model="state.commentForm.content">
              <button type="button" class="btn btn-sm btn-outline-secondary" @click="add(state.user.id)">등록</button>
            </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">내용</th>
                    <th scope="col">작성자</th>
                    <th scope="col">작성일시</th>
                  </tr>
                </thead>
                  <tbody v-for="(comment, idx) in state.comments" :key="idx">
                    <ShowRoomCommentList 
                      :user="comment.User"
                      :comment="comment"/>
                  </tbody>
              </table>
          </div>
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
import SearchItem from '@/components/SearchItem.vue';
import ShowRoomCommentList from '@/components/ShowRoomCommentList.vue';

export default {
    name: 'ShowRoom',
    components: {
        Header,
        Footer,
        ShowRoomItem,
        SearchItem,
        ShowRoomCommentList
    },
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const state = reactive({
            user: null,
            loggedIn: false,
            room: {},
            roomItems: [],
            comments: [],
            query: "",
            searchItems: [],
            commentForm: {
              postId: id,
              ontent: "",
              userId: null
            },
            postId: id,
        });

        axios.get("/api/account")
          .then((res) => {
            state.user = res.data;
            state.loggedIn = true;
          })

        // room 상세
        axios.get('/api/show/rooms/' + id)
            .then((res) => {
                state.room = res.data;
                state.roomItems = state.room[0].RoomItems;
            })

        // get comments
        const commentsLoad = () => {
          axios.get('/api/comments', {
            params: {
              "postId" : state.postId
            }
          })
          .then((res) => {
              state.comments = res.data;
              console.log(state.comments);
          })
        }
        commentsLoad();

        // comment add
        const add = (userId) => {
          state.commentForm.userId = userId;
          axios.post('/api/comments', state.commentForm)
            .then((res) => {
                commentsLoad();
            })
        }

        // 제품 검색
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
          axios.post('/api/carts/rooms/items', args)
          .then((res) => {
            alert("장바구니에 담겼습니다");
          })
        }

        return { state, route, id, search, addCart, add };
    }
}
</script>

<style scoped>

</style>