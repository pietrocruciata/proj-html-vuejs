<template>
   <div class="col-3 d-flex flex-column gap-20">
    <img :src="article.image" alt="">
        <div><font-awesome-icon :icon="['far', 'calendar']" /> {{ article.date }}</div>
        <div><strong>{{ article.articlesTitle }}</strong></div>
        <div >{{ article.description }}</div>
   </div>
     
    


</template>

<script>
export default {
    props: {
        article: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
@use './style/general';
</style>