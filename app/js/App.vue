<template>
  <div id="app">
    <router-view/>
    <foter/>
  </div>
  
</template>

<script>
import foter from './public/footer.vue'

export default {
  name: 'app',
  components: {
      foter
  }
}

</script>

<style>
  .router-link-active{
    color: #5f97ff;
  }
</style>

