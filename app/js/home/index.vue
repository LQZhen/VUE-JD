<template lang="html">
    <div class="home">
        <heador/>
        <hslider/>
        <novice/>
        <money/>
        <recommend/>
        <ensure/>
        <copyright/>
    </div>
</template>

<script>
import heador from '../public/header.vue'
import hslider from './hslider.vue'
import novice from './novice.vue'
import money from './money.vue'
import recommend from './recommend.vue'
import ensure from './ensure.vue'
import copyright from './copyright.vue'


export default {
 
  created(){
    // this._getInfo()
  },
  methods: {
    _getInfo(){
      this.$jsonp('http://www.some-site.com/data', { name: 'MyName', age: 20 }).then(json => {
        console.log(json);
        
      }).catch(err => {
        console.log(err);
        
      })
    }
  },
  components: {
    heador,
    hslider,
    novice,
    money,
    recommend,
    ensure,
    copyright
  }
}
</script>

<style lang="scss" scoped>
  .home{
    color: red;
    font-size: 80px;
  }
</style>
