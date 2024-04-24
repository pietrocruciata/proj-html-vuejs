<template>
    <div class="bg-footer mt-40">
        <div class="container">
            <div class="row jc-center">
                <div class="col-6">
                    <h3 class="c-white p-20">Address</h3>
                    <ul class="c-lightgrey mouse-hover" v-for="el in store.address" v>
                        <li class="pl-20">{{ el.position }}</li>
                        <li class="p-list">{{ el.cell }}</li>
                        <li class="pl-20">{{ el.mail }}</li>
                    </ul>
                    <ul class="d-flex gap-20 decoration-brand c-lightgrey d-flex gap-20 p-20 mouse-hover">
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
                <div class="col-3">
                    <h3 class="c-white p-20 ">Explore</h3>
                    <ul class="c-lightgrey mouse-hover c-lightgrey list-disposition h-120">
                        <li v-for="Explore in this.footerExplore">{{ Explore.name }}</li>
                    </ul>
                </div>

                <div class="col-3">
                    <h3 class="c-white p-20 ">Information</h3>
                    <ul class="c-lightgrey mouse-hover c-lightgrey list-disposition">
                        <li v-for="information in this.footerInformations">{{ information.information }}</li>
                    </ul>
                </div>
                <div class="c-lightgrey p-50 ta-center p-relative">
                    <p>&#169 2020 Maxcoach. All Rights Reserved</p>
                    <font-awesome-icon :icon="['fas', 'arrow-up']" class="p-fixed icon-rounded mouse-hover"
                        @click="scrollPage()" />
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import store from '../store.js'
export default {
    data() {
        return {
            store,
            footerExplore: [
                {
                    name: 'Start here'
                },
                {
                    name: 'Blog'
                },
                {
                    name: 'About us'
                },
                {
                    name: 'Success story'
                },
                {
                    name: 'Courser'
                },
                {
                    name: 'Contact us'
                },
            ],
            footerInformations: [
                {
                    information: 'Membership'
                },
                {
                    information: 'Purchase guide'
                },
                {
                    information: 'Privacy policy'
                },
                {
                    information: 'Terms of service'
                },
            ]

        }
    },
    methods: {
        scrollPage() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style lang="scss" scoped>
@use './style/general';

.bg-footer {
    background-color: rgb(7, 0, 29)
}

.c-white {
    color: white;
}

.list-disposition {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    width: 250px;
    padding-left: 20px;
}

.h-120 {
    height: 120px;
}



.icon-rounded {
    background-color: #20ad96;
    padding: 20px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    left: 830px;
    top: 40px;
}

.mt-40 {
    margin-top: 40px;
}

.p-fixed {
    position: fixed;
    top: 630px;
    left: 1390px;
}
</style>