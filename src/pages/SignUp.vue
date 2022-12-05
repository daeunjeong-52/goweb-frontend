<template>
  <div>
      <div v-if="state.account.userId">
          <SignUpComplete :user="state.account"/>
      </div>
      <div v-else>
        <!-- header -->
        <div class="container">
            <div class="header">
                <h1>회원가입</h1>
            </div>
        </div>
        <div if="state.error.message">
            {{ state.error.message }}
        </div>
        <!-- content -->
        <div class="container">
            <div class="content">
                <!-- signup info -->
                <div class="signup-info">
                    <div class="mb-3 row">
                        <label for="loginId" class="col-sm-2 col-form-label">아이디</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="loginId" v-model="state.form.loginId">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="loginPw" class="col-sm-2 col-form-label">비밀번호</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="loginPw" v-model="state.form.loginPw">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="username" class="col-sm-2 col-form-label">이름</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="username" v-model="state.form.username">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="nickname" class="col-sm-2 col-form-label">닉네임</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="nickname" v-model="state.form.nickname">
                        </div>
                    </div>
                        </div>
                    <!-- user sign-up button -->
                    <div class="btn-signup-group">
                        <button type="submit" class="btn btn-signup" @click="submit()">회원가입</button>
                        <router-link to="/">
                            <button type="button" class="btn btn-cancel">뒤로가기</button>
                        </router-link>
                    </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import SignUpComplete from '../pages/SignUpComplete.vue';

export default {
    name: 'SignUp',
    components: {
        SignUpComplete,
    },
    setup() {
        const state = reactive({
            account: {
                userId: null,
                username: "",
                nickname: "",
            },
            form: {
                loginId: "",
                loginPw: "",
                username: "",
                nickname: "",
            },
            error: {
                message: ""
            }
        });

        const submit = () => {
            const args = {
                loginId: state.form.loginId,
                loginPw: state.form.loginPw,
                username: state.form.username,
                nickname: state.form.nickname
            };

            axios.post("/api/sign-up", args)
                .then((res) => {
                    alert("회원 가입에 성공했습니다");
                    state.account = res.data;
                })
                .catch((err) => {
                    console.log(err.response.data.message);
                    state.error.message = err.response.data.message;
                })
        };

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
    .signup-info {
        border: 1px solid #D0B8A8;
        padding: 2rem;
        padding-top: 2.5rem;
    }

    .btn-signup-group {
        padding-top:2rem;
        text-align: center;
    }
    .btn-signup, .btn-cancel {
        background-color: white;
        color: #D0B8A8;
    }
    .btn-signup:hover, .btn-cancel:hover {
        background-color: #D0B8A8;
        color: white;
    }
</style>