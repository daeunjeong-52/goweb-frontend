<template>
    <tr>
      <td>{{ comment.content }}</td>
      <td>{{ user.username }}</td>
      <td>{{ comment.createdAt }}</td>
    </tr>
</template>

<script>

export default {
    name: "ShowRoomCommentList",
    props: {
      comment: Object,
      user: Object
    },
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