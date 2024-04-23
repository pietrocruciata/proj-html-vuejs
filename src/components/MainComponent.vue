<template>
    <div class="container bg-img pt-50 ">
        <div class="row">
            <div class="col-6 p-20 d-flex flex-column gap-20">
                <div class="">I'M WINGMAN</div>
                <div class="fs-70 ">Peace On Earth A Wonderful Wish But No Way</div>
                <p>Success isn't overnight. It's when everday you get a little better than the day before. it all adds up.</p>
                 <button class="button-lightgreen p-20"><strong>Get Started For Free <font-awesome-icon :icon="['fas', 'arrow-right']" /></strong></button>
            </div>
            <div class="col-6">
                <img src="/public/img/home-movation-hero-image.png" alt="" class="bg-faceline">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use './style/general';

.button-lightgreen{
    border: none;
    background-color: #20ad96;
    color: white;
    padding: 15px 40px;
    border-radius: 5px;
    cursor: pointer;
    width: 300px;

    &:hover{
        background-color: #3f3a64;;
    }
}

.fs-70{
    font-size: 70px;
}

.bg-faceline{
    background-image: url(/public/img/home-movation-shape-face-600x534.png);
}
</style>