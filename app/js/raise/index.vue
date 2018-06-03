<template lang="html">
    <div :class="$style.con">
        <Heador/>
        <Slider/>
        <Daily/>
        <In/>
        <More/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Slider from "./rslider.vue"
import Daily from "./daily.vue"
import In from "./in.vue"
import More from "./more.vue"
export default {
    components: {
        Heador,
        Slider,
        Daily,
        In,
        More,

    },
}
</script>

<style lang="scss" module>
  .con{
    margin-bottom: 100px;
  }
</style>
