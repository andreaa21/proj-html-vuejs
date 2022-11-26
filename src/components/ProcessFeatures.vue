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
  <div class="features h-100">
    <div class="x-container h-25 d-flex justify-content-between">
      <ProcessItem />
    </div>
  </div>
</template>



<style lang="scss" scoped>

  @use '../assets/styles/partials/vars' as *;

  .features{
    border-top: 5px solid lighten($Gothic, 30%);
    position: relative;
    .x-container{
      width: 80%;
      position: absolute;
      top: -20px;
      left: 10%;

    }
  }

</style>