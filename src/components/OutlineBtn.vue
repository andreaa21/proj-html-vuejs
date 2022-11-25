<script>
export default {
    name: 'OutlineBtn'
}
</script>

<template>
  <div class="btn x-btn px-3 py-2 ms-3 mt-3">
    read more
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