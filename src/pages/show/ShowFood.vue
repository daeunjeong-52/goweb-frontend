<template>
  <div>
    <Header/>
    <!-- content -->
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="/img/food/food4.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">{{ state.food[0].title }}</h1>
            <p class="lead">{{ state.food[0].description }}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            </div>
          </div>
          <span>이 게시글 찜(추가 구현 필요)</span>
        </div>
      </div>

      <!-- 제품 정보 -->
      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 border-bottom">재료 정보</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div class="col d-flex align-items-start" v-for="(foodItem, idx) in state.foodItems" :key="idx">
                <ShowFoodItem :foodItem="foodItem"/>
            </div>
        </div>
      </div>

      <!-- 재료 정보 검색 -->
      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 border-bottom">재료 정보 검색해보기</h2>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="원하는 정보를 검색해보세요 (외부 api 연동)" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
        </div>
        
      </div>

      <!-- 댓글 -->
      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 border-bottom">소통 공간</h2>
        
        
      </div>


    <Footer/>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import {useRoute} from "vue-router";
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ShowFoodItem from '@/components/ShowFoodItem.vue';

export default {
    name: 'ShowFood',
    components: {
        Header,
        Footer,
        ShowFoodItem
    },
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const state = reactive({
            food: {},
            foodItems: []
        })

        // food 상세
        axios.get('/api/show/foods/' + id)
            .then((res) => {
                state.food = res.data;
                state.foodItems = state.food[0].FoodItems;
            })

        return { state, route, id };
    }
}
</script>

<style scoped>

</style>