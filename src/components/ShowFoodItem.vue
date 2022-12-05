<template>
    <span>
        <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"/></svg>
        <div>
            <h3 class="fw-bold mb-0 fs-4">{{ foodItem.ingredientName  }}</h3>
            <p>{{ foodItem.purchasePlace }}</p>
        </div>
    </span>
</template>

<script>
export default {
    name: 'ShowFoodItem',
    props: {
        foodItem: Object
    }
}
</script>

<style scoped>

</style>