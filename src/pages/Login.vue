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
                <form action="" method="POST">
                        <!-- login info -->
                        <div class="login-info">
                            <div class="mb-3 row">
                                <label for="loginId" class="col-sm-2 col-form-label">아이디</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="loginId">
                            </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="password" class="col-sm-2 col-form-label">비밀번호</label>
                                <div class="col-sm-10">
                                <input type="password" class="form-control" id="password">
                            </div>
                            </div>
                        </div>
                    <!-- user login button -->
                    <div class="btn-login-group">
                        <button type="submit" class="btn btn-login">로그인</button>
                        <button type="button" class="btn btn-cancel">뒤로가기</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
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