<template>
    <section class="bg-img">
        <div class="container ">
            <div class="row p-20 jc-spacebetween p-relative">

                <div class="col d-flex ai-center ">
                    <img src="/public/img/dark-logo.png" alt="" class="img-size">
                </div>
                <div v-for="(item, i) in store.items" class="col d-flex ai-center gap-10 decoration">
                    <span @click="i === 1 ? changeMenu() : ''">{{ item.name }}<font-awesome-icon
                            :icon="['fas', 'angle-down']" /></span>



                </div>
                <ul class="p-absolute opacity modal c-white" :class="modal === true ? 'opacity-1' : ''">
                    <li v-for="(menu, i) in store.menuItems" class="bg-white p-5">
                        {{ menu.valor }}
                    </li>
                </ul>


                <ul class="d-flex gap-20 mouse-hover c-violet ai-center">
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
        </div>
    </section>

</template>

<script>
import store from '../store.js'
export default {
    data() {
        return {
            store,
            modal: false
        }
    },
    methods: {
        changeMenu() {
            this.modal = !this.modal
            console.log('sto cliccando');
        },
    }
}
</script>

<style lang="scss" scoped>
@use './style/general';



.img-size {
    width: 180px;
}





.gap-10 {
    gap: 10px;
}

.gap-20 {
    gap: 20px;
}

.row {
    display: flex;
}



.decoration {
    color: #3f3a64;

    &:hover{
        cursor: pointer;
    color: #20ad96;
    border-bottom: 1px solid #20ad96;
    }
}

.c-violet{
    color: #3f3a64;
}

select {
    border: none;

}

.modal {
    top: 50px;
    left: 420px;
    padding: 10px;
    border-bottom: 3px solid #20ad96;
    background-color: #3f3a64;
    color: white;
    line-height: 30px;
}

.opacity {
    opacity: 0;
}

.opacity-1 {
    opacity: 1;
}

.bg-white:hover {
    cursor: pointer;
    background-color: white;
    color: #3f3a64;

}
</style>