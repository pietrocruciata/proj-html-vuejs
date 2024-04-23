<template>
    <section class="bg-img">
        <div class="container">
        <div class="row p-20 jc-spacebetween p-relative">
           
            <div class="col d-flex ai-center ">
                <img src="/public/img/dark-logo.png" alt="" class="img-size">
            </div>
                <div v-for="item in store.items" class="col d-flex ai-center gap-10 decoration">
                    {{ item.name }}<font-awesome-icon :icon="['fas', 'angle-down']" />
                  
                </div>
                <ul   v-for="menu in store.MenuItems" class="p-absolute">
                    <li>
                      {{ menu.valor }}
                    </li>
                </ul>
                
                <ul class="d-flex gap-20 mouse-hover">
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
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

@use './style/general';



.img-size{
    width: 180px;
}

.p-20{
    padding: 20px;
}



.ai-center{
    align-items: center;
}

.gap-10{
    gap: 10px;
}

.gap-20{
    gap: 20px;
}

.row{
    display: flex;
}

.jc-spacebetween{
    justify-content: space-between;
}

.decoration{
    color: #3f3a64;
}

.decoration:hover{
    cursor: pointer;
    color: #20ad96;
    border-bottom: 1px solid #20ad96;
}

select{
    border: none;
    
}







</style>