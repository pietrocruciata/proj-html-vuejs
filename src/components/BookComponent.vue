<template>
    <div class="d-flex flex-column gap-20 ai-center p-relative view-shop">
        <img :src="book.image" alt="">
        <div><strong>{{ book.title }}</strong></div>
        <div class="c-lightgreen"><strong>{{ book.price }}</strong></div>

        <ul class="p-absolute book-shop-position opacity mouse-hover">
                        <li class="bg-shop"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></li>
                        <li class="bg-shop"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></li>
                        <li class="bg-shop"><font-awesome-icon :icon="['far', 'heart']" /></li>
                        <li class="bg-shop"><font-awesome-icon :icon="['fas', 'signal']" /></li>
                    </ul>
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

.book-shop-position{
    flex-direction: column;
    display: flex;
    left: 320px;
    top: 20%;
    gap: 20px;
}

.bg-shop{
    background-color: white;
    padding: 10px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;

    &:hover{
        color:  #20ad96;
    }
}

.opacity{
    opacity: 0;
}

.view-shop:hover .opacity{
    opacity: 1;
}
</style>