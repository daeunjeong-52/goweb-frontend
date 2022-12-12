<template>
    <tr>
      <td>{{ comment.content }}</td>
      <td>{{ user.username }}</td>
      <td>{{ comment.createdAt }}</td>
    </tr>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
    name: "ShowRoomCommentList",
    props: {
      comment: Object,
      user: Object,
    },
    setup() {
      const state = reactive({
          user: null,
          loggedIn: false,
          deleteBtn: false
      });

      axios.get("/api/account")
      .then(res => {
        state.user = res.data;
        state.loggedIn = true;
      });

      return { state };
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