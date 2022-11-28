<template>
  <div>
      <!-- header -->
        <div class="container">
            <div class="header">
                <h1>회원가입</h1>
            </div>
        </div>
        <!-- content -->
        <div class="container">
            <div class="content">
                <form action="" method="POST">
                        <!-- signup info -->
                        <div class="signup-info">
                            <div class="mb-3 row">
                                <label for="userId" class="col-sm-2 col-form-label">아이디</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="userId">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="password" class="col-sm-2 col-form-label">비밀번호</label>
                                <div class="col-sm-10">
                                <input type="password" class="form-control" id="password">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="username" class="col-sm-2 col-form-label">이름</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="username">
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="nickname" class="col-sm-2 col-form-label">닉네임</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="nickname">
                                </div>
                            </div>
                        </div>
                    <!-- user login button -->
                    <div class="btn-signup-group">
                        <button type="submit" class="btn btn-signup">회원가입</button>
                        <button type="button" class="btn btn-cancel">뒤로가기</button>
                    </div>
                </form>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'SignUp'
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