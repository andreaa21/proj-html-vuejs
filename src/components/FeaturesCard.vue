<script>

import {store} from '../assets/data/store'

export default {
    name: 'FeaturesCard',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  <div class="features-card">
    <div class="icon">
        
    </div>
    <div class="title">

    </div>
    <div class="text">

    </div>
  </div>
</template>



<style lang="scss" scoped>
    @use '../assets/styles/partials/vars' as *;

    .features-card{
        background-color: $White;
        height: 100%;
    }
</style>