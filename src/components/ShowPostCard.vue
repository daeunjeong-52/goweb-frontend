<template>
    <div class="card shadow-sm">
            <span class="img" :style="{backgroundImage: `url(${post.imgPath})`}"></span>
            <div class="card-body">
              <p class="card-text">{{ post.title }}</p>
              <p class="card-text">{{ post.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="detail()">상세</button>
                </div>
                <small class="text-muted">좋아요 {{ post.like }}</small>
              </div>
            </div>
          </div>
</template>

<script>
import router from '@/scripts/router.js';
import { reactive } from 'vue';

export default {
    name: 'ShowPostCard',
    props: {
        post: Object
    },
    setup() {
      
      const detail = () => {
        router.push({ path: '/show/my-posts/' + post.id});
      }

      return { detail };
    }
}
</script>

<style scoped>
    .card .img {
        display: inline-block;
        width: 100%;
        height: 250px;
        background-size: cover;
        background-position: center;
    }
</style>