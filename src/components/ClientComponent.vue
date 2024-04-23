<template>
    <img :src="client.image" alt="" class="img-opacity">
</template>

<script>
    export default {
        props:{
            client:{
                type:Object
            }
        }
    }
</script>

<style lang="scss" scoped>
.img-opacity{
    filter: contrast(0.5);
    opacity: 0.3;

}
</style>