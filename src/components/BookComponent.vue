<template>
    <div class="d-flex flex-column gap-20 ai-center">
        <img :src="book.image" alt="">
        <div><strong>{{ book.title }}</strong></div>
        <div class="c-lightgreen"><strong>{{ book.price }}</strong></div>

    </div>

</template>

<script>
export default {
    props: {
        book: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
@use './style/general';
</style>