<template>
    <section :class="cname">
        <swiper :options="swiperOption">
                <swiper-slide v-for="item in items" :key="item.href">
                    <router-link :to="{name: item.href}" tag="div">
                        <img :src="item.src" alt="">
                    </router-link>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'

export default {
    name: 'slider',
    props: {
        cname: {
            type: String,
            default: ""
        },
        swiperOption: {
            type: Object,
            default: function () {
                return {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination"
                    },
                    notNextTick: false
                }
            }
        },
        items: {
            type: Array,
            default: [
                {}
            ]
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="css">
    @import '~swiper/dist/css/swiper.css';
    
</style>
