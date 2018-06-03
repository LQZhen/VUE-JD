<template lang="html">
    <div :class="$style.con">
        <Heador/>
        <Slider/>
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Adc/>
        
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Slider from "./mslider.vue"
import Ada from "./ada.vue"
import Money from "./money.vue"
import Adb from "./adb.vue"
import Finance from "./finance.vue"
import Adc from "./adc.vue"
export default {
    components: {
        Heador,
        Slider,
        Ada,
        Money,
        Adb,
        Finance,
        Adc
    },
}
</script>

<style lang="scss" module>
  
  .con{
    margin-bottom: 100px;
  }
</style>
