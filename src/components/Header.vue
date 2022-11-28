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
    
          <div class="col-md-3 text-end">
            정다은님,
            <button type="button" class="btn btn-logout me-2">Logout</button>
          </div>
        </header>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
  
</style>