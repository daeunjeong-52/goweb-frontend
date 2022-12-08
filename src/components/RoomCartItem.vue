<template>
    <div class="card shadow-sm">
        <img :src='`${cartItem.image}`' class="card-img-top">
        <div class="card-body">
            <p class="card-text">{{ cartItem.brand }}</p>
            <p class="card-text">
                <a v-bind:href="cartItem.link">제품 보러가기</a>
            </p>
            <p class="card-text">{{ cartItem.lprice}}원</p>
            <ul>
                <li>{{ cartItem.category1 }}</li>
                <li>{{ cartItem.category2 }}</li>
                <li>{{ cartItem.category3 }}</li>
                <li>{{ cartItem.category4 }}</li>
            </ul>

           
        </div>
        </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';
import store from "@/scripts/store";
import router from "@/scripts/router";

export default {
    name: 'RoomCartItem',
    props: {
        cartItem: Object
    },
}
</script>

<style scoped>

</style>