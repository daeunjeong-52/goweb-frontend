<template>
  <div class="container">
      <Header/>
        <div class="my-roomcart-header">
            <h1>Room Cart</h1>
            <p>현재 담긴 총 금액: {{ state.totalPrice }}원</p>
        </div>
        <div class="container">
            <div class="room-content">
                <main>
                    <div class="album py-5 bg-light">
                        <div class="container">
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div class="col" v-for="(cartItem, idx) in state.roomCartItems" :key="idx">
                                    <RoomCartItem :cartItem="cartItem"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
      <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import RoomCartItem from "../../components/RoomCartItem.vue";
import { reactive } from 'vue';
import axios from 'axios';
import store from "@/scripts/store";
import router from "@/scripts/router";


export default {
    name: "MyRoomCart",
    components: {
        Header,
        Footer,
        RoomCartItem,
    },
    setup() {
        const state = reactive({
            userId: sessionStorage.getItem("id"),
            roomCart: null,
            roomCartItems: [],
            totalPrice: null
        });

        // find room cart
        axios.get("/api/carts/rooms", {
            params: {
                "userId" : state.userId
            }
        })
        .then((res) => {
            state.roomCart = res.data;
            console.log(state.roomCart);
        })
        
        // get room cart items
        axios.get("/api/carts/rooms/items", {
            params: {
                "userId": state.userId
            }
        })
        .then((res) => {
            state.roomCartItems = res.data;
            for(let i = 0; i < state.roomCartItems.length; i++) {
                state.totalPrice += state.roomCartItems[i].lprice;
            }  
        })

        return { state };
    }
}
</script>

<style scoped>
    .my-roomcart-header {
        text-align: center;
        margin: 1.5rem;
    }
</style>