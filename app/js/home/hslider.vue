<template>
    <article>
        <slider :items="items" :cname="$style.slider"></slider>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from '../core/slider.vue'

export default {
    data() {
        return {
            items: [
                {src: "https://img12.360buyimg.com/jrpmobile/jfs/t20173/281/386063392/44002/3b22e082/5b0b9cb2Ndc0b11d1.jpg?width=750&height=320",href: "Home1"},
                {src: "http://img5.imgtn.bdimg.com/it/u=1925754309,404204348&fm=200&gp=0.jpg",href: "Home2"},
                {src: "http://img0.imgtn.bdimg.com/it/u=4164718201,424672731&fm=27&gp=0.jpg",href: "Home3"}
            ],
            enters: [
                {href: "home",img: "https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",title: "优惠券"},
                {href: "home",img: "https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",title: "领红包"},
                {href: "home",img: "https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",title: "抢钢镚"},
                {href: "home",img: "https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",title: "白条提额"},
            ]
        }
    },
    components: {
        Slider
    }
}
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .slider{
        margin-top: 120px;
        img{
            width: 100%;
            height: 300px;
        }
    }
    .list{
        @include list(row);
        background-color: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content: space-around;
        a{
            text-decoration: none;
        }
        .item{
            text-align: center;
            img{
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            h4{
                font-size: 26px;
                margin-top: 12px;
                color: #666;
            }
        }
    }
</style>
