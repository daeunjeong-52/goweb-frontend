<template>
    <div>
        <Header/>
            <div class="container">
            <div class="add-header">
              <h3>Add My Room</h3>
            </div>
            <div class="container">
              <div class="mb-3">
                  <label for="formFile" class="form-label">이미지 추가</label>
                  <input class="form-control" type="file" id="formFile" v-on:change="changeFile">
              </div>
              <span>제목</span>
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="state.form.title">
              </div>
              <span>상세 설명</span>
              <div class="input-group mb-3">
                <textarea class="form-control" aria-label="With textarea" v-model="state.form.description"></textarea>
              </div>
              <span>제품 추가</span>
              <div class="input-group mb-3">
                <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름" v-model="state.form.productName1">
                <input type="text" aria-label="Last name" class="form-control" placeholder="구매처" v-model="state.form.brandName1">
              </div>
              
              <div class="input-group mb-3">
                <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름" v-model="state.form.productName2">
                <input type="text" aria-label="Last name" class="form-control" placeholder="구매처" v-model="state.form.brandName2">
              </div>
              
              <div class="input-group mb-3">
                <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름" v-model="state.form.productName3">
                <input type="text" aria-label="Last name" class="form-control" placeholder="구매처" v-model="state.form.brandName3">
              </div>
              
              <div class="input-group mb-3">
                <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름" v-model="state.form.productName4">
                <input type="text" aria-label="Last name" class="form-control" placeholder="구매처" v-model="state.form.brandName4">
              </div>
              
            </div>
          </div>

          <div class="add-btn-group">
            <button type="button" class="btn btn-add" @click="submit()">저장</button>
            <button type="button" class="btn btn-cancel">취소</button>
          </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import { reactive } from 'vue';
import router from '@/scripts/router';

export default {
    name: "ShowAddRoom",
    components: {
        Header,
        Footer
    },
    setup() {
        const state = reactive({
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
            user: null,
            loggedIn: false
            
        });

        axios.get("/api/account")
            .then(res  => {
                state.user = res.data;
                state.loggedIn = true;
            })

        const submit = () => {
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
                userId: state.user.id
            };

            axios.post("/api/my-posts/rooms", args)
                .then((res) => {
                    window.alert('저장이 완료되었습니다');
                    router.push({ path: "/show/my-posts/rooms"});
                })
        }

        // const changeFile = (e) => {
        //     console.log(e.target.files);
        //     state.form.imgPath = e.target.files[0];
        //     console.log(state.form.imgPath);
        // }

    
        return { state, submit };
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