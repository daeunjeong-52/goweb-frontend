<template>
    <div class="card">
        <img src="/img/home.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"><a href="#">따뜻한 내 방</a></h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-update">게시글 수정</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShowRoomCardMy",
    props: {
        room: Object
    }
}
</script>

<style>

</style>