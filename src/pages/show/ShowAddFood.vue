<template>
  <div>
      <div class="container">
        <div class="add-header">
          <h3>Add My Room</h3>
        </div>
        <div class="container">
          <div class="mb-3">
              <label for="formFile" class="form-label">이미지 추가</label>
              <input class="form-control" type="file" id="formFile">
          </div>
          <span>제목</span>
          <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <span>상세 설명</span>
          <div class="input-group mb-3">
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
          <span>제품 추가</span>
          <div class="input-group mb-3">
            <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름">
            <input type="text" aria-label="Last name" class="form-control" placeholder="구매처">
          </div>
          <div class="input-group mb-3">
            <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름">
            <input type="text" aria-label="Last name" class="form-control" placeholder="구매처">
          </div>
          <div class="input-group mb-3">
            <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름">
            <input type="text" aria-label="Last name" class="form-control" placeholder="구매처">
          </div>
          <div class="input-group mb-3">
            <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름">
            <input type="text" aria-label="Last name" class="form-control" placeholder="구매처">
          </div>
          <div class="input-group mb-3">
            <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름">
            <input type="text" aria-label="Last name" class="form-control" placeholder="구매처">
          </div>
          <div class="input-group mb-3">
            <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름">
            <input type="text" aria-label="Last name" class="form-control" placeholder="구매처">
          </div>
          <div class="input-group mb-3">
            <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름">
            <input type="text" aria-label="Last name" class="form-control" placeholder="구매처">
          </div>
          <div class="input-group mb-3">
            <input type="text" aria-label="First name" class="form-control" placeholder="제품 이름">
            <input type="text" aria-label="Last name" class="form-control" placeholder="구매처">
          </div>
        </div>
      </div>

      <div class="add-btn-group">
        <button type="button" class="btn btn-add">저장</button>
        <button type="button" class="btn btn-cancel">취소</button>
      </div>

  </div>
</template>

<script>
export default {
    name: "ShowAddRoom",

}
</script>

<style scoped>
    h3 {
            text-align: center;
            margin: 1.5rem;
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