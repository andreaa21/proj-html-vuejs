<script>

import MainFeatures from './MainFeatures.vue';
import MainCompany from './MainCompany.vue';
import MainActions from './MainActions.vue';
import MainProcess from './MainProcess.vue';
import MainFeedback from './Mainfeedback.vue';


export default {
  name: 'AppMain',
  components:{
    MainFeatures,
    MainCompany,
    MainActions,
    MainProcess,
    MainFeedback
  }
}
</script>


<template>
  <main>

        <MainFeatures />
        <MainCompany />
        <MainActions />
        <MainProcess />
        <MainFeedback />

  </main>
</template>



<style lang="scss" scoped>

</style>