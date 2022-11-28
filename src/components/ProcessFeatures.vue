<script>

import ProcessItem from './ProcessItem.vue';

export default {
    name: 'ProcessFeatures',
    components:{
      ProcessItem
    }
}
</script>


<template>
  <div class="features d-flex justify-content-center h-100">
    <div class="x-container d-flex flex-wrap justify-content-between">

        <ProcessItem />
    </div>
  </div>
</template>



<style lang="scss" scoped>

  @use '../assets/styles/partials/vars' as *;

  .features{
    border-top: 5px solid lighten($Gothic, 30%);
    .x-container{
      width: 80%;
      margin-top: -20px;
    }
  }

</style>