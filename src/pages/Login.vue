<template>
  <!-- header -->
    <div>
        <div class="container">
            <div class="header">
                <h1>로그인</h1>
            </div>
        </div>
        <!-- content -->
        <div class="container">
            <div class="content">
                        <!-- login info -->
                        <div class="login-info">
                            <div class="mb-3 row">
                                <label for="loginId" class="col-sm-2 col-form-label">아이디</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="loginId" v-model="state.form.loginId">
                            </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="password" class="col-sm-2 col-form-label">비밀번호</label>
                                <div class="col-sm-10">
                                <input type="password" class="form-control" id="password" v-model="state.form.loginPw">
                            </div>
                            </div>
                        </div>
                    <!-- user login button -->
                    <div class="btn-login-group">
                        <button type="submit" class="btn btn-login" @click="submit()">로그인</button>
                        <router-link to="/">
                            <button type="button" class="btn btn-cancel">뒤로가기</button>
                        </router-link>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';
import store from "@/scripts/store";
import router from "@/scripts/router";

export default {
    name: 'Login',
    setup() {
        axios.get("/api/show/my-posts")
            .then(({data}) => {
                console.log(data);
            })


        const state = reactive({
            form: {
                loginId: "",
                loginPw: ""
            }
        });

        const submit = () => {
            axios.post("/api/login", state.form)
                .then((res) => {
                    router.push({ path: "/show/main"});
                    sessionStorage.setItem('id', res.data.userId);
                    store.commit('setAccount', res.data.userId);
                    window.alert('로그인하였습니다');
                })
                .catch(() => {
                    window.alert('로그인 정보가 존재하지 않습니다');
                })
        }

        return { state, submit };
    }
}
</script>

<style scoped>
    .container {
        width: 40%;
    }
    .header {
        margin: 5rem;
        text-align: center;
    }
    .login-info {
        border: 1px solid #D0B8A8;
        padding: 2rem;
        padding-top: 2.5rem;
    }

    .btn-login-group {
        padding-top:2rem;
        text-align: center;
    }
    .btn-login, .btn-cancel {
        background-color: white;
        color: #D0B8A8;
    }
    .btn-login:hover, .btn-cancel:hover {
        background-color: #D0B8A8;
        color: white;
    }
</style>