<script>

import {store} from '../assets/data/store';

export default {
  name: 'ActionsCard',
  data(){
    return{
      store
    }
  },
  methods:{
    getImagePath(imageName){
		const imageUrl = new URL (`../assets/img/${imageName}`, import.meta.url).href;
    return imageUrl
	}
  }
}
</script>


<template>
    <div
    v-for="(card,index) in store.actionCards"
    :key="index"
    :style="`background-image: url(${card.action_bg})`"
    class="col-4 d-flex debug flex-column justify-content-end action-card">
      <div class="card-text text-center debug">
        <h2>
          {{card.action_text}}
        </h2>
      </div>

    </div>
</template>



<style lang="scss" scoped>
  .action-card{
    width: 360px;
    height: 360px;
    // background-image: url(../assets/img/project-1.jpg);
    background-size: cover;
    border-radius: 20px;
    margin: .8rem;
    .card-text{
      margin-bottom: 2.5rem;
      h2{
        font-size: 1.5rem;
        font-weight: 900;
      }
    }
  }
</style>