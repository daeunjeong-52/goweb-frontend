import { createApp } from 'vue'
import store from "@/scripts/store"
import App from './App.vue'
import router from "@/scripts/router"

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vue from "vue";

createApp(App).use(store).use(router).mount('#app');