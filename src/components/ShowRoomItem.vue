<template>
    <span>
        <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"/></svg>
        <div>
            <h3 class="fw-bold mb-0 fs-4">{{ roomItem.productName  }}</h3>
            <p>{{ roomItem.brandName }}</p>
            <p>{{ roomItem.price }}원</p>
        </div>
    </span>
</template>

<script>
export default {
    name: 'ShowRoomItem',
    props: {
        roomItem: Object
    }
}
</script>

<style scoped>

</style>