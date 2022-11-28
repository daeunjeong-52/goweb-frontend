<template>
    <div class="card shadow-sm">
            <span class="img" :style="{backgroundImage: `url(${room.imgPath})`}"></span>
            <div class="card-body">
              <p class="card-text">{{ room.title }}</p>
              <p class="card-text">{{ room.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link :to="{path: `/show/rooms/${room.id}`}">
                    <button type="button" class="btn btn-sm btn-outline-secondary">상세</button>
                  </router-link>
                </div>
                <small class="text-muted">좋아요 {{ room.like }}</small>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    name: 'ShowRoomCard',
    props: {
        room: Object
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