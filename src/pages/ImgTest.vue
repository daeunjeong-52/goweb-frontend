<template>
    <div>
        <div class="container">
            <div class="mb-3">
                <label for="formFile" class="form-label">이미지 추가</label>
                <input class="form-control" type="file" id="formFile" v-on:change="changeFile"/>
                <span>제목</span>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <button type="button" class="btn btn-primary" @click="save()">저장</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
    name: "ImgTest",
    setup() {
        const state = reactive({
            form: {
                title: '',
                uplaodFile: null,
                imgPath: 'hi'
            },
        });

        const save = () => {
            const formData = new FormData();
            formData.append('title', state.form.title);
            formData.append('uploadFile', state.form.uplaodFile);
            formData.append('imgPath', state.form.imgPath);

            axios.post('/api/img-test', formData)
                .then(res => {
                    console.log(res.data);
                })
        };

        const changeFile = (e) => {
            state.form.uplaodFile = e.target.files[0];
            state.form.imgPath = e.target.files[0].name;
            console.log(state.form.uplaodFile);
            console.log(state.form.imgPath);
        };


        return { state, save, changeFile };
    }
}
</script>

<style>

</style>