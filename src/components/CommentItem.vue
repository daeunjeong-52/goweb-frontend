<template>
    <div class="input-group mb-3">
        <div class="comment-item">{{ comment }}</div>
    </div>
</template>

<script>
export default {
    name: 'CommentItem',
    props: {
        comment: String
    }
}
</script>

<style scoped>
    .comment-item {
        width: 100%;
        border: 1px solid lightgray;
        padding: 0.6rem;
        border-radius: 5px;
    }
</style>