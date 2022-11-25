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
  <div
  v-for="(card, index) in store.cards"
  :key="index"
  class="features-card col debug">

    <div class="icon">
        {{card.icon}}
    </div>
    <div class="title">
        {{card.cardTitle}}
    </div>
    <div class="text">
        {{card.cardText}}
    </div>
  </div>
</template>




<style lang="scss" scoped>
    @use '../assets/styles/partials/vars' as *;

    .features-card{
        background-color: $White;
        height: 300px;
        width: 300px;
    }
</style>