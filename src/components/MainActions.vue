<script>


import {store} from '../assets/data/store'
import ActionsCard from './ActionsCard.vue';

export default {
  name: 'MainActions',
  components:{
    ActionsCard
  },
  data(){
    return{
        store
    }
  },
  methods:{
    getActive(num){
        store.actionList[num].isActive = !store.actionList[num].isActive
    }
  }
}
</script>


<template>
    <div class="actions">
        <div class="container h-100">
            <div class="row text-center title-area">
                <div class="col">
                    <h4>
                        {{store.actionText.actionSmallTitle}}
                    </h4>
                    <h2>
                        {{store.actionText.actionBigTitle}}
                    </h2>
                </div>
            </div>
            <div class="row nav-area text-center">
                <nav>
                    <ul class="d-flex flex-wrap justify-content-center">
                        <li
                        v-for="(link, index) in store.actionList"
                        :key="index"
                        class="mx-3 mt-3"
                        @click="getActive(index)"
                        ><a 
                        class="p-2"
                        :class="{active : link.isActive}"
                        href="#">{{link.text}}</a></li>
                    </ul>
                </nav>
            </div>
            <div class="row mt-5 d-flex justify-content-center card-area">
                <ActionsCard />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    @use '../assets/styles/partials/vars' as *;

    .actions{
        min-height: 1310px;
        background-color: $Woodsmoke;
        color: $White;
        .title-area{
            padding-top: 150px;
            h4{
                color: $Eim;
                text-transform: uppercase;
                font-weight: 900;
                font-size: 1rem;
                margin-bottom: 1rem;
            }
            h2{
                text-transform: capitalize;
                font-size: 3.5rem;
                font-weight: 900;
            }
        }
        .nav-area{
            padding: 50px 0;
            ul{
                list-style: none;
                margin: 0;
                padding: 0;
                a{
                    text-decoration: none;
                    color: $Nurse;
                    text-transform: uppercase;
                    font-size: 1.1rem;
                    &.active{
                        background-color: $Ebony;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
</style>