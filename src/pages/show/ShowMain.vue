<template>
  <div>
      <Header :user="user"/>
      <div class="container">
          <div class="show-feed">
            <div class="show-feed-header">
                <h1>자랑공간</h1>
                <p>여러분의 자취 생활을 자랑해보세요!</p>
                <div class="show-feed-btn-group">
                  <router-link to="/show/my-posts">
                    <a class="btn btn-show-feed">나의 게시글 관리</a>
                  </router-link>
                </div>
            </div>
            <div class="show-content">
              <!-- row1 -->
              <div class="row">
                <div class="col">
                  <!-- 자취방 자랑 -->
                  <div class="show-room">
                    <h3>ROOM</h3>
                    <div class="card-group" v-for="(room, idx) in state.rooms" :key="idx">
                      <ShowRoomCard :room="room"/>
                    </div>
                  </div>
                </div>
                <!-- 자취 요리 자랑 -->
                <div class="col">
                  <div class="show-food">
                    <h3>FOOD</h3>
                    <div class="card-group" v-for="(food, idx) in state.foods" :key="idx">
                        <ShowFoodCard :food="food"/>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 더보기 버튼 -->
              <div class="show-button">
                <div class="row">
                    <div class="col show-room-btn">
                        <router-link to="/show/rooms">
                            <button type="button" class="btn btn-show-more">더 보기</button>
                        </router-link>
                    </div>
                    <div class="col show-food-btn">
                        <router-link to="/show/foods">
                            <button type="button" class="btn btn-show-more">더 보기</button>
                        </router-link>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ShowRoomCard from '@/components/ShowRoomCard.vue';
import ShowFoodCard from '@/components/ShowFoodCard.vue';

export default {
    name: "ShowMain",
    components: {
        Header,
        Footer,
        ShowRoomCard,
        ShowFoodCard
    },
    setup() {
        const state = reactive({
            rooms: [],
            foods: []
        })

        axios.get("/api/show/rooms/main")
            .then((res) => {
                state.rooms = res.data;
            })

        axios.get("/api/show/foods/main")
            .then((res) => {
                state.foods = res.data;
            })
        
        return { state };
    }
}
</script>

<style scoped>
    .btn-logout:hover {
        background-color: white;
        color: #D0B8A8;
    }
    .btn-logout {
    background-color: #D0B8A8;
    color: white;
    margin-left: 1rem;
    }
    .card-img-top {
    height: 15rem;
    object-fit: cover;
    }
    .card-body {
    height: 10rem;
    object-fit: cover;
    }

    h1{
        font-size: 1.5rem;
        text-align: center;
    }
    p {
        text-align: center;
    }
    h3 {
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    }
    a {
    text-decoration-line: none;
    color: #D0B8A8;
    }
    a:hover {
    color: gray;
    }

    .show-feed-header {
    padding: 2rem;
    }
    .show-button {
    text-align: center;
    padding: 1rem;
    }
    .btn-show-more {
    background-color: white;
    color: #D0B8A8;
    }
    .btn-show-more:hover {
    background-color: #D0B8A8;
    color: white;
    }
    .show-feed-btn-group {
    text-align: center;
    margin-top: 2rem;
    }
    .btn-show-feed {
    background-color: #D0B8A8;
    color: white;
    margin: 0.5rem;
    }
    .btn-show-feed:hover {
    background-color: white;
    color: #D0B8A8;
    }
    .carousel-inner {
    text-align: center;
    }

    .btn-header-more {
    background-color: #D0B8A8;
    color: white;
    }
</style>