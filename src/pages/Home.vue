<template>
  <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold">슬기로운 자취 생활</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">자취 생활을 제대로 즐기기 위한 커뮤니티</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <router-link to="/sign-up">
                <button type="button" class="btn btn-start btn-lg px-4 me-sm-3">회원가입</button>
            </router-link>
            <router-link to="/login">
                <button type="button" class="btn btn-login btn-lg px-4">로그인</button>
            </router-link>
          </div>
        </div>
        <div class="overflow-hidden" style="max-height: 30vh;">
          <div class="container px-5">
            <img src="@/assets/img/home.png" class="img-fluid border rounded-3 shadow-lg" alt="Example image" width="800" height="600" loading="lazy">
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    .btn-start, .btn-login {
        background-color: white;
        color: #D0B8A8;
    }
    .btn-start:hover, .btn-login:hover {
        background-color: #D0B8A8;
        color: white;
    }
</style>