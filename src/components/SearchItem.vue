<template>
  <span>
        <img :src='`${item.image}`' width="300" height="300">
        <div>
            <h3 class="fw-bold mb-0 fs-4">{{ item.brand  }}</h3>
            <a v-bind:href="item.link">제품 보러가기</a>
            <p>{{ item.lprice }}원</p>
            <ul>
                <li>{{ item.category1 }}</li>
                <li>{{ item.category2 }}</li>
                <li>{{ item.category3 }}</li>
                <li>{{ item.category4 }}</li>
            </ul>
            
        </div>
    </span>
</template>

<script>

export default {
    name: "SearchItem",
    props: {
        item: Object
    },
}
</script>

<style scoped>
   
</style>