<template>
  <div>
      <Header/>
         <div class="container">
            <div class="add-header">
              <h3>Edit My Room</h3>
            </div>
            <div class="container">
              <div class="mb-3">
                  <label for="formFile" class="form-label">이미지 추가</label>
                  <input class="form-control" type="file" id="formFile" v-on:change="changeFile">
              </div>
              <span>제목</span>
              <div class="input-group mb-3">
                <input type="text" class="form-control" :placeholder="`${state.room[0].title}`" aria-label="Username" aria-describedby="basic-addon1" v-model="state.form.title">
              </div>
              <span>상세 설명</span>
              <div class="input-group mb-3">
                <textarea class="form-control" :placeholder="`${state.room[0].description}`" aria-label="With textarea" v-model="state.form.description"></textarea>
              </div>
              <span>제품 추가</span>
              <div class="input-group mb-3">
                <input type="text" :placeholder="`${state.roomItems[0].productName}`" aria-label="First name" class="form-control" v-model="state.form.productName1">
                <input type="text" :placeholder="`${state.roomItems[0].brandName}`" aria-label="Last name" class="form-control" v-model="state.form.brandName1">
              </div>
              
              <div class="input-group mb-3">
                <input type="text" :placeholder="`${state.roomItems[1].productName}`" aria-label="First name" class="form-control" v-model="state.form.productName2">
                <input type="text" :placeholder="`${state.roomItems[1].brandName}`" aria-label="Last name" class="form-control" v-model="state.form.brandName2">
              </div>
              
              <div class="input-group mb-3">
                <input type="text" :placeholder="`${state.roomItems[2].productName}`" aria-label="First name" class="form-control"  v-model="state.form.productName3">
                <input type="text" :placeholder="`${state.roomItems[2].brandName}`" aria-label="Last name" class="form-control" v-model="state.form.brandName3">
              </div>
              
              <div class="input-group mb-3">
                <input type="text" :placeholder="`${state.roomItems[3].productName}`" aria-label="First name" class="form-control" v-model="state.form.productName4">
                <input type="text" :placeholder="`${state.roomItems[3].brandName}`" aria-label="Last name" class="form-control" v-model="state.form.brandName4">
              </div>
              
            </div>
          </div>

          <div class="add-btn-group">
            <button type="button" class="btn btn-add" @click="save()">저장</button>
            <router-link :to="{path: `/show/my-posts/rooms/${state.postId}`}">
                <button type="button" class="btn btn-cancel">취소</button>
            </router-link>
          </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from 'axios';
import { reactive } from 'vue';
import {useRoute} from "vue-router";
import router from '@/scripts/router.js';

export default {
    name: "ShowEditRoom",
    components: {
        Header, 
        Footer,

    },
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const state = reactive({
            postId: id,
            user: null,
            loggedIn: false,
            form: {
                title: '',
                description: '',
                // imgPath: '',
                category: 'room',

                productName1: '',
                brandName1: '',
                productName2: '',
                brandName2: '',
                productName3: '',
                brandName3: '',
                productName4: '',
                brandName4: '',
            },
            room: {},
            roomItems: []
        });

        axios.get("/api/account")
            .then(res  => {
                state.user = res.data;
                state.loggedIn = true;
            })

        // 게시글 정보 가져오기
        axios.get('/api/my-posts/rooms', {
            params: {
                "postId": state.postId
            }
        })
        .then((res) => {
            state.room = res.data;
            state.roomItems = state.room[0].RoomItems;
        })

        // 게시글 수정
        const save = () => {
            const args = {
                title: state.form.title,
                description: state.form.description,
                category: 'room',
                productName1: state.form.productName1,
                brandName1: state.form.brandName1,
                productName2: state.form.productName2,
                brandName2: state.form.brandName2,
                productName3: state.form.productName3,
                brandName3: state.form.brandName3,
                productName4: state.form.productName4,
                brandName4: state.form.brandName4,
                userId: state.user.id,
                postId: state.postId
            };

            axios.put("/api/my-posts/rooms", args)
                .then((res) => {
                    window.alert('수정이 완료되었습니다');
                    router.push({path: '/show/my-posts/rooms/' + state.postId});
                })

        }

        return { state, save };
    }
    
}
</script>

<style scoped>
    .container {
        width: 80%;
    }
    .add-header {
        text-align: center;
    }
    .add-btn-group {
        text-align: center;
    }
    .btn-add, .btn-cancel {
        background-color: #D0B8A8;
        color: white;
    }
    .btn-add:hover, .btn-cancel:hover {
        background-color: white;
        color: #D0B8A8;
    }
</style>