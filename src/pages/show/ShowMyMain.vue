<template>
  <div>
      <Header />
        <div class="container">
            <div class="my-posts-header">
            <h3>나의 게시글 관리</h3>
            <div class="my-posts-btn-group">
                <a href="add-room.html" class="btn btn-post-add">Add My Room</a>
                <a href="add-food.html" class="btn btn-post-add">Add My Food</a>
            </div>
        </div>
        </div>
        <div class="container">
            <div class="room-content">
                <main>
                    <div class="album py-5 bg-light">
                        <div class="container">
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div class="col" v-for="(post, idx) in state.posts" :key="idx">
                                    <ShowPostCard :post="post"/>
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
      <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ShowPostCard from '@/components/ShowPostCard.vue';

export default {
    name: "ShowMyMain",
    components: {
        Header,
        Footer,
        ShowPostCard
    },
    setup() {
        const state = reactive({
            posts: [],
            pageArr: [1, 2, 3, 4, 5],
            perPage: 9,
            currentPage: 1,
            totalPost: 0,
            userId: sessionStorage.getItem('id')
        });

        // post 페이징
        axios.get("/api/show/my-posts", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
                "userId": state.userId
            }
        })
        .then((res) => {
            state.posts = res.data;
        })

        // 페이징 (1번째)
        const firstPage = () => 

            axios.get("/api/show/my-posts", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
                "userId": state.userId
            }
        })
        .then((res) => {
            state.posts = res.data;
        })

        // 페이징 (2번째)
        const secondPage = () => 
            axios.get("/api/show/my-posts", {
            params: {
                "currentPage": state.currentPage + 1,
                "perPage": state.perPage,
                "userId": state.userId
            }
        })
        .then((res) => {
            state.posts = res.data;
        })

        // 페이징 (3번째)
        const thirdPage = () => 
            axios.get("/api/show/my-posts", {
            params: {
                "currentPage": state.currentPage + 2,
                "perPage": state.perPage,
                "userId": state.userId
            }
        })
        .then((res) => {
            state.posts = res.data;
        })

        // 페이징 (4번째)
        const fourthPage = () => 
            axios.get("/api/show/my-posts", {
            params: {
                "currentPage": state.currentPage + 3,
                "perPage": state.perPage,
                "userId": state.userId
            }
        })
        .then((res) => {
            state.posts = res.data;
        })

        // 페이징 (5번째)
        const fifthPage = () => 
            axios.get("/api/show/my-posts", {
            params: {
                "currentPage": state.currentPage + 4,
                "perPage": state.perPage,
                "userId": state.userId
            }
        })
        .then((res) => {
            state.posts = res.data;
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

            axios.get("/api/show/my-posts", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
                "userId": state.userId
            }
            })
            .then((res) => {
                state.posts = res.data;
            })
        };

        // 다음 페이지네이션 바 숫자
        const nextPage = () => {
            for(let i = 0; i < 5; i++) {
                state.pageArr[i] = state.pageArr[i] + 5;
            }
            state.currentPage = state.pageArr[0];

            axios.get("/api/show/my-posts", {
            params: {
                "currentPage": state.currentPage,
                "perPage": state.perPage,
                "userId": state.userId
            }
            })
            .then((res) => {
                state.posts = res.data;
            })
        }
        return { state, firstPage, secondPage, thirdPage, fourthPage, fifthPage, prevPage, nextPage };
    }
}
</script>

<style scoped>
    h3 {
        text-align: center;
        margin: 1.5rem;
    }
    .card-img-top {
        height: 15rem;
        object-fit: cover;
    }
    .card-body {
    height: 10rem;
    object-fit: cover;
    }
    a {
    text-decoration-line: none;
    color: #D0B8A8;
    }
    a:hover {
        color: gray;
    }
    .page-link {
        color: #D0B8A8;
    }
    .page-link:hover {
        background-color: #D0B8A8;
        color: white;
    }
    nav {
        margin: 1rem;
    }
    .btn-post-add {
        background-color: #D0B8A8;
        color: white;
    }
    .my-posts-btn-group {
        text-align: center;
    }
    .btn-update {
        background-color: #D0B8A8;
        color: white;
    }
</style>