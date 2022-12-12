<template>
        <div>
            <Header/>
            <div class="container col-xxl-8 px-4 py-5">
            <div class="room-header">
                <h2>My Rooms</h2>
            </div>
            <div class="btn-add">
                <router-link to="/show/my-posts/rooms/add">
                    <button type="button" class="btn btn-secondary">Add My Room</button>
                </router-link>
            </div>
        </div>
        <div class="container">
            <div class="room-content">
                <main>
                    <div class="album py-5 bg-light">
                        <div class="container">
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div class="col" v-for="(room, idx) in state.rooms" :key="idx">
                                    <ShowRoomCardMy :room="room"/>
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
import axios from 'axios';
import { reactive } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ShowRoomCardMy from '../../components/ShowRoomCardMy.vue';

export default {
    name: 'ShowMyRooms',
    components: {
        Header,
        Footer,
        ShowRoomCardMy
    },
    setup() {
        const state = reactive({
            rooms: [],
            pageArr: [1, 2, 3, 4, 5],
            perPage: 9,
            currentPage: 1,
            totalPost: 0,
            user: null,
            loggedIn: false
        })
        
        axios.get("/api/account")
            .then(res => {
                state.user = res.data;
                state.loggedIn = true;
            })
        
        // 초기 화면
        axios.get("/api/my-posts/rooms/all", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.rooms = res.data;
        })

        // 페이징 (1번째)
        const firstPage = () => 

            axios.get("/api/my-posts/rooms/all", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.rooms = res.data;
        })

        // 페이징 (2번째)
        const secondPage = () => 
            axios.get("/api/my-posts/rooms/all", {
            params: {
                "currentPage": state.currentPage + 1,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.rooms = res.data;
        })

        // 페이징 (3번째)
        const thirdPage = () => 
            axios.get("/api/my-posts/rooms/all", {
            params: {
                "currentPage": state.currentPage + 2,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.rooms = res.data;
        })

        // 페이징 (4번째)
        const fourthPage = () => 
            axios.get("/api/my-posts/rooms/all", {
            params: {
                "currentPage": state.currentPage + 3,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.rooms = res.data;
        })

        // 페이징 (5번째)
        const fifthPage = () => 
            axios.get("/api/my-posts/rooms/all", {
            params: {
                "currentPage": state.currentPage + 4,
                "perPage": state.perPage,
            }
        })
        .then((res) => {
            state.rooms = res.data;
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

            axios.get("/api/my-posts/rooms/all", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
            }
            })
            .then((res) => {
                state.rooms = res.data;
            })
        };

        // 다음 페이지네이션 바 숫자
        const nextPage = () => {
            for(let i = 0; i < 5; i++) {
                state.pageArr[i] = state.pageArr[i] + 5;
            }
            state.currentPage = state.pageArr[0];

            axios.get("/api/my-posts/rooms/all", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
            }
            })
            .then((res) => {
                state.rooms = res.data;
            })
        }
        return { state, firstPage, secondPage, thirdPage, fourthPage, fifthPage, prevPage, nextPage };
    }
}
</script>

<style scoped>
    .room-header {
        margin-bottom: 1rem;
      }
      h2 {
        text-align: center;
      }
      .card-group {
        margin-bottom: 2rem;
      }
      .card-img-top {
        height: 20rem;
        object-fit: cover;
      }
      .card-body {
        height: 10rem;
        object-fit: cover;
      }
      .page-link {
        color: #D0B8A8;
      }
      .page-link:hover {
        background-color: #D0B8A8;
        color: white;
      }
      .btn-detail {
        color: white;
        background-color: #D0B8A8;
      }
      .btn-detail:hover {
        color: #D0B8A8;
        background-color: white;
      }
      a {
        text-decoration-line: none;
        color: #D0B8A8;
      }
      a:hover {
        color: gray;
      }
      .btn-add {
          text-align: center;
          margin: 1rem;
      }
</style>