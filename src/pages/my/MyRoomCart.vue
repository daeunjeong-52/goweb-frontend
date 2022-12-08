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
                                    <div class="d-flex justify-content-between align-items-center">
                                        <button type="button" class="btn btn-sm btn-outline-secondary" @click="removeItem(cartItem.id)">삭제</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <!-- pagination  -->
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" aria-label="Previous" @click="prevPage()">이전</a>
                </li>
                <li class="page-item"><a class="page-link" @click="firstPage()">{{ state.pageArr[0] }}</a></li>
                <li class="page-item"><a class="page-link" @click="secondPage()">{{ state.pageArr[1] }}</a></li>
                <li class="page-item"><a class="page-link" @click="thirdPage()">{{ state.pageArr[2] }}</a></li>
                <li class="page-item"><a class="page-link" @click="fourthPage()">{{ state.pageArr[3] }}</a></li>
                <li class="page-item"><a class="page-link" @click="fifthPage()">{{ state.pageArr[4] }}</a></li>
    
                <li class="page-item">
                    <a class="page-link" @click="nextPage()">다음</a>
                </li>
            </ul>
        </nav>
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
            user: null,
            loggedIn: false,
            roomCart: null,
            roomCartItems: [],
            totalRoomCartItems: [],
            totalPrice: null,
            // 페이징
            pageArr: [1, 2, 3, 4, 5],
            perPage: 9,
            currentPage: 1,
            totalPost: 0
        });

        // 유저 정보 가져오기
        axios.get("/api/account")
            .then(res => {
                state.user = res.data;
                state.loggedIn = true;
            })

        axios.get("/api/carts/rooms")
        .then((res) => {
            state.roomCart = res.data;
            console.log(state.roomCart);
        })

        
        // get room cart items
        const allItems = () => {
            axios.get("/api/carts/rooms/items/all")
                .then((res) => {
                    state.totalRoomCartItems = res.data;
                    for(let i = 0; i < state.totalRoomCartItems.length; i++) {
                        state.totalPrice += state.totalRoomCartItems[i].lprice;
                    }  
            })
        }

        // load
        const load = () => {
            axios.get("/api/carts/rooms/items", {
                params: {
                    "currentPage": state.currentPage,
                    "perPage": state.perPage,
                }
            })
            .then((res) => {
                state.roomCartItems = res.data;
            })
        }
       
        // 페이징 (1번째)
        const firstPage = () => 

            axios.get("/api/carts/rooms/items", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.roomCartItems = res.data;
        })

        // 페이징 (2번째)
        const secondPage = () => 
            axios.get("/api/carts/rooms/items", {
            params: {
                "currentPage": state.currentPage + 1,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.roomCartItems = res.data;
        })

        // 페이징 (3번째)
        const thirdPage = () => 
            axios.get("/api/carts/rooms/items", {
            params: {
                "currentPage": state.currentPage + 2,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.roomCartItems = res.data;
        })

        // 페이징 (4번째)
        const fourthPage = () => 
            axios.get("/api/carts/rooms/items", {
            params: {
                "currentPage": state.currentPage + 3,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.roomCartItems = res.data;
        })

        // 페이징 (5번째)
        const fifthPage = () => 
            axios.get("/api/carts/rooms/items", {
            params: {
                "currentPage": state.currentPage + 4,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.roomCartItems = res.data;
        })

        // 이전 페이지네이션 바 숫자
        const prevPage = () => {
            if(state.currentPage < 1) {
                state.currentPage = 1;
            }
            for(let i = 0; i < 5; i++) {
                if(state.pageArr[i] - 5 > 0) {
                    state.pageArr[i] = state.pageArr[i] - 5;
                }else {
                    state.pageArr = [1, 2, 3, 4, 5]
                }
            }

            state.currentPage = state.pageArr[0];

            axios.get("/api/carts/rooms/items", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
            }
            })
            .then((res) => {
                state.roomCartItems = res.data;
            })
        };

        // 다음 페이지네이션 바 숫자
        const nextPage = () => {
            for(let i = 0; i < 5; i++) {
                state.pageArr[i] = state.pageArr[i] + 5;
            }
            state.currentPage = state.pageArr[0];

            axios.get("/api/carts/rooms/items", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
            }
            })
            .then((res) => {
                state.roomCartItems = res.data;
            })
        }

        const removeItem  = (idx) => {
            axios.delete("/api/carts/rooms/items/" + idx)
                .then(() => {
                    state.totalRoomCartItems = null;
                    state.totalPrice = 0;
                    allItems();
                    load();
                })
        }

        allItems();
        load();
        
        return { state, firstPage, secondPage, thirdPage, fourthPage, fifthPage, prevPage, nextPage, removeItem};
    }
}
</script>

<style scoped>
    .my-roomcart-header {
        text-align: center;
        margin: 1.5rem;
    }
</style>