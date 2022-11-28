<template>
  <div class="container">
      <div class="comment-input">
            <CommentInput/>
        </div>
        <div class="comment-items" v-for="(comment, idx) in comments" :key="idx">
            <CommentItem :comment="comment.content"/>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import CommentInput from '@/components/CommentInput.vue';
import CommentItem from '@/components/CommentItem.vue';

export default {
    name: 'CommentList',
    components: {
        CommentInput,
        CommentItem
    },
    props: {
        comments: Array
    },
    setup() {
        const state = reactive({
            
        });
        
        return { state }
    }
}
</script>

<style scoped>

</style>