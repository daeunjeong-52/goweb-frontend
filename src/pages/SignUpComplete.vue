<template>
  <div>
    회원 가입이 완료되었습니다 {{ user.username }}님!!
     <router-link to="/">
        <button type="button" class="btn btn-start btn-lg px-4 me-sm-3">홈 화면</button>
    </router-link>
    <router-link to="/login">
        <button type="button" class="btn btn-login btn-lg px-4">로그인</button>
    </router-link>
  </div>
</template>

<script>
export default {
    props: {
        user: Object
    }
}
</script>

<style>

</style>