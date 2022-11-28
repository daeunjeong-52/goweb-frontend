<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="add()">추가</button>
    </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
    name: 'CommentInput',

    setup() {
        const state = reactive({

        });
        

        
        return { state };
    }
}
</script>

<style>

</style>