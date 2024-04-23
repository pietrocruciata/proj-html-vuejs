<template>
    <div class="col-3 d-flex flex-column gap-20">
        <img :src="item.image" alt="" class="border-radius-5">
        <div class="p-20 d-flex flex-column gap-20 jc-center">
            <div class="c-lightgreen"><strong>{{ item.price }}</strong></div>
            <div><strong>{{ item.description }}</strong></div>
            <div class="d-flex gap-20"><font-awesome-icon :icon="['far', 'file-lines']" />{{ item.lessons }}
                <font-awesome-icon :icon="['far', 'user']" />{{ item.students }}
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        item: {
            tipe: Object
        }
    }
}
</script>

<style lang="scss" scoped>
@use './style/general';
</style>