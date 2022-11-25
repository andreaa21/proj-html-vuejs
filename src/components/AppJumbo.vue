<script>

import FullBtn from './FullBtn.vue';
import OutlineBtn from './OutlineBtn.vue';
import {store} from '../assets/data/store';

export default {
  name: 'AppJumbo',
  components:{
    FullBtn,
    OutlineBtn
  },
  data(){
    return{
        store
    }
  },
  methods:{
    getActive(num){
        store.jumboOptions[num].isActive = !store.jumboOptions[num].isActive
    }
  }
}
</script>


<template>
  <div class="jumbotron">
    <div class="inner">
        <div class="container">
            <div class="row d-flex justify-content-between align-items-center jumbo-top">
                <div class="col-3">

                    <div class="logo debug">
                        Logo
                    </div>

                </div>
                <div class="col d-flex justify-content-between">

                    <div class="jumbo-options d-flex align-items-center me-2">
                        <nav class="d-flex align-items-center">
                            <ul class="d-flex">
                                <li
                                class="mx-3"
                                v-for="(item, index) in store.jumboOptions"
                                :key="index"
                                ><a
                                @click="getActive(index)"
                                :class="{active : item.isActive}"
                                :href="item.href">{{item.text}}</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div class="user d-flex align-items-center p-2 me-4">
                        <i class="fa-regular fa-user"></i>
                    </div>

                    <FullBtn />

                </div>
            </div>
            <div class="row debug jumbo-bottom d-flex align-items-center">
                <div class="jumbo-content debug">
                    <h3>titolo piccolo</h3>
                    <h2>titolo grande</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quidem architecto, pariatur omnis facere fuga debitis vel modi suscipit dolore. Obcaecati esse inventore molestiae porro magni repellat repudiandae nihil voluptatum!
                    </p>
                    <div class="btn-area">
                        <FullBtn />
                        <OutlineBtn />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../assets/styles/partials/vars' as *;
    .jumbotron{
        min-height: 860px;
        background-image: url('../assets/img/bg-4.jpg');
        color: $White;
        .inner{
            background-color: rgba(0, 0, 0, 0.356);
        }
        .jumbo-top{
            min-height: 100px;
            nav{
                margin-left: 150px;
            }
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
                a{
                    color: $White;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-weight: 600;
                    font-size: 1.1rem;
                    &.active{
                        color: $Eim;
                    }
                }
            }
        }
        .jumbo-bottom{

            height: 760px; //da togliere
            .jumbo-content{
                width: 50%;
                height: 70%;
            }
        }
    }
</style>