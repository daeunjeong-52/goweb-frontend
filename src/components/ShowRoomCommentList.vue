<template>
  <div>
    <div class="comment-box">{{ comment.content }}</div>
  </div>
</template>

<script>
export default {
    name: "ShowRoomCommentList",
    props: {
      comment: Object
    }
}
</script>

<style scoped>
  .comment-box {
    border: 1px solid lightgrey;
    padding: 0.6rem;
    margin: 0.4rem;
    border-radius: 0.5rem;
  }
</style>