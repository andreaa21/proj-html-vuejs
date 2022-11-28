<script>
export default {
    name: 'FullBtn',
    props:{
      btnText: String
    }
      
    
}
</script>

<template>
  <div class="btn x-btn px-3 py-2">
    <span>
      {{btnText}}
    </span>
  </div>
</template>



<style lang="scss" scoped>
@use '../assets/styles/partials/vars' as *;
    .x-btn{
        background-color: $Eim;
        color: $White;
        text-transform: uppercase;
        font-weight: 600;
    }
</style>