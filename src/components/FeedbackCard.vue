<script>

import {store} from '../assets/data/store'

export default {
    name: 'FeedbackCard',
    data(){
        return{
            store
        }
    },
    methods:{
	getImagePath(imageName){
		return new URL (`../assets/img/${imageName}`, import.meta.url).href
	}
}
}
</script>


<template>
  <div
  v-for="(card, index) in store.FeedbackCards"
  :key="index"
  class="feedback-card col m-3 p-4">
        <img :src="getImagePath(card.img)" alt="logo">
        <p class="mt-3">
            {{card.longText}}
        </p>
        <p>
            {{card.shortText}}
        </p>
  </div>


</template>



<style lang="scss" scoped>
    @use '../assets/styles/partials/vars' as *;

    .feedback-card{
        height: 275px;
        width: 355px;
        background-color: $White;
        border-radius: 10px;
        img{
            width: 35%;
        }
        p{
                font-size: 1.2rem;
                color: $Woodsmoke;
        }
    }
    
</style>