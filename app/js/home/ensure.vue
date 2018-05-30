<template>
    <Panel title="保险保障" :cname="$style.content">
        <Slider :items="items" :swiperOption="option"></Slider>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
import Slider from '../core/slider.vue'
export default {
    components: {
        Panel,
        Slider
    },
    data() {
        return {
            items: [{
                href: "home1",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260",
            }, {
                href: "home2",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260",
            }, {
                href: "home3",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260",
            }, {
                href: "home4",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260",
            }],
            option: {
                slidesPerView: 2.7,
                spaceBetween: 30,
                freeMode: true,
            }
        }
    }
}
</script>

<style lang="scss" module>
    .content{
        img{
            width: 100%;
        }
        // margin-bottom: 125px;
    }
</style>
