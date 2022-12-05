<template>
    <div>
    <Header/>
        <div class="container">
        <h1 class="visually-hidden"></h1>
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold">My Carts</h1>
                <div class="col-lg-6 mx-auto">
                    <p>장바구니</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <router-link to="/my-info/carts/rooms">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Room Cart</button>
                    </router-link>
                    <router-link to="/my-info/carts/foods">
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Food Cart</button>
                    </router-link>
                </div>
                </div>
            </div>
    </div>
   <Footer/>
   </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
    name: "MyCart",
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>

</style>