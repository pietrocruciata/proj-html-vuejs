<template>
    <div class="bg-footer ">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h3 class="c-white p-20">Addres</h3>
                    <ul class="c-lightgrey " v-for="el in store.address"v >
                       <li class="pl-20">{{ el.position }}</li>
                       <li class="p-list">{{ el.cell }}</li>
                       <li class="pl-20">{{ el.mail }}</li>
                    </ul>
                    <ul class="d-flex gap-20 decoration-brand c-lightgrey d-flex gap-20 p-20">
                    <li>
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                    </li>
                    <li>
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                        
                    </li>
                    <li>
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </li>
                    <li>
                        <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </li>
                </ul>
                </div>
                <div class="col-6">

                </div>
            </div>
        </div>
      
    </div>
</template>

<script>
    import store from '../store.js'
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use './style/general';
.bg-footer{
    background-color: rgb(7, 0, 29)
}

.c-white{
    color: white;
}

.c-lightgrey{
    color: lightgrey;
}

.col-6{
    width: calc((6 * 100%) / 12);
}

.p-list{
    padding: 10px 0 10px 20px;
}


</style>