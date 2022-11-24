<script>

import AppHeader from './components/AppHeader.vue';
import AppJumbo from './components/AppJumbo.vue'
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components:{
    AppHeader,
    AppJumbo,
    AppMain,
    AppFooter
  }
}
</script>


<template>
  
  <AppHeader />
  <AppJumbo />
  <AppMain />
  <AppFooter />


</template>



<style lang="scss">
  @use './assets/styles/general.scss';
  @use './assets/styles/partials/vars';
</style>