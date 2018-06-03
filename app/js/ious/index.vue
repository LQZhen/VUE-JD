<template lang="html">
    <div :class="$style.con">
        <Heador/>
        <Slider/>
        <Welfare/>
        <Service/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Slider from "./islider.vue"
import Welfare from "./welfare.vue"
import Service from "./service.vue"
export default {
    components: {
        Heador,
        Slider,
        Welfare,
        Service,
    },
}
</script>

<style lang="scss" module>
    .con{
        margin-bottom: 100px;
    }
</style>