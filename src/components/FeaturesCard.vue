<script>

import {store} from '../assets/data/store'

export default {
    name: 'FeaturesCard',
    data(){
        return{
            store
        }
    },
    methods:{
        getIcons(icon){
            return `fa-solid fa-`+ icon;
        }
    }
}
</script>

<template>
  <div
  v-for="(card, index) in store.cards"
  :key="index"
  class="features-card col d-flex flex-column justify-content-around m-3 py-3">

    <div class="icon d-flex justify-content-center align-items-center">
        <i :class="getIcons(card.icon)"></i>
    </div>
    <div class="title">
        <h2>
            {{card.cardTitle}}
        </h2>
    </div>
    <div class="text">
        <p>
            {{card.cardText}}
        </p>
    </div>
  </div>
</template>




<style lang="scss" scoped>
    @use '../assets/styles/partials/vars' as *;

    .features-card{
        background-color: $White;
        height: 300px;
        width: 300px;
        .icon{
            background-color: $TransparentFountain;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            i{
                transform: scale(1.5);
                color: $Lagoon;
            }
        }
        h2{
            color: $Woodsmoke;
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: capitalize;
        }
        p{
            color: $Ebony;
            font-size: 1.13rem;
        }
    }
</style>