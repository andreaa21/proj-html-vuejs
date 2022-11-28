<script>
export default {
    name: 'OutlineBtn',
    props:{
      btnText: String
    }
}
</script>

<template>
  <div class="btn x-btn px-4 py-2 mb-3 ms-3">
    <span>
      {{btnText}}
    </span>
  </div>
</template>



<style lang="scss" scoped>
@use '../assets/styles/partials/vars' as *;
    .x-btn{
        border:1px solid $Eim;
        color: $White;
        text-transform: uppercase;
        font-weight: 600;
    }
</style>