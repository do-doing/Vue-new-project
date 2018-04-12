<template>
  <div id="app">
    <!-- 头部 -->
    <Header/>
    <div class="main">
        <transition  name="fade" mode="out-in">
            <router-view/>   
        </transition>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  data() {
    return {
      
    };
  },
  components:{
    Header
  }
}
</script>

<style>

</style>
