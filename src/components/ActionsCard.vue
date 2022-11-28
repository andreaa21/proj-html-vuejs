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
    getImagePath(num){
	}
  }
}
</script>


<template>
    <div
    v-for="(card,index) in store.actionCards"
    :key="index"
    :style="`background-image: url(/${card.action_bg})`"
    class="col-4 d-flex flex-column justify-content-end action-card">
      <div class="card-text inner w-100 h-100 text-center d-flex align-items-end">
        <h2 class="p-4">
          {{card.action_text}}
        </h2>
      </div>

    </div>
</template>



<style lang="scss" scoped>
  @use '../assets/styles/partials/vars' as *;
  .inner{
    background-color: rgba(0, 0, 0, 0.5);
    position:absolute;
    border-radius: 10px;
    left: 0;
    top: 0;
  }
  .action-card{
    width: 360px;
    height: 360px;
    background-size: cover;
    border-radius: 10px;
    margin: .8rem;
    position: relative;
    cursor: pointer;
    &:hover{
      .inner{
        background-color: rgba($color: #000000, $alpha: 0.3);
        h2{
          transform: scale(1.1);
          text-shadow: 2px 2px 5px $Woodsmoke;
        }
      }
      
    }
    .card-text{
      margin-bottom: 2.5rem;
      h2{
        font-size: 1.5rem;
        font-weight: 900;
        padding: 2rem .5rem;
        color: $Nurse;
        transition: all .2s;
      }
    }
  }
</style>