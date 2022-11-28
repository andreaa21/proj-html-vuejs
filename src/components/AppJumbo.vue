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
        <div class="container x-container p-3">
            <div class="row row-cols-1 d-flex justify-content-between align-items-center jumbo-top">
                <div class="col d-lg-flex justify-content-between">

                    <div class="logo-container mb-2 d-flex px-3 py-1 justify-content-center text-lg-start">
                        <div class="half-bg py-2 ps-4">
                            <span class="logo color">
                                nex
                            </span>
                        </div>
                        <div class="half-nobg py-2 pe-4">
                            <span class="logo">
                                gen
                            </span>
                        </div>
                    </div>


                    <div class="jumbo-options d-flex align-items-center">
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


                        <div class="user d-flex align-items-center p-2 mx-3">
                            <a href="#"><i class="fa-regular fa-user"></i></a>
                        </div>


                        <FullBtn
                        btnText="get in touch"
                        />
                    </div>




                </div>
               
            </div>
            <div class="row row-cols-1 row-cols-xl-3 jumbo-bottom mt-5 d-flex align-items-center">

                <div class="jumbo-content col py-3">
                    <h3>
                        {{store.jumboText.smallTitle}}
                    </h3>
                    <h2>
                        {{store.jumboText.bigTitle}}
                    </h2>
                    <p>
                        {{store.jumboText.par}}
                    </p>
                    <div class="btn-area">
                        <FullBtn
                        btnText="get in touch"
                        />
                        <OutlineBtn
                        btnText="read more"
                        />
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
        .x-container{
            min-height: 860px;
        }
        .inner{
            background-color: rgba(0, 0, 0, 0.356);
        }
        
        .jumbo-top{
            min-height: 100px;
            .half-bg{
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                color: $Fountain;
                background-color: rgba($color: $Lagoon, $alpha: .2);
            }
            .logo{
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 900;
                letter-spacing: .4rem;
            }
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
                a{
                    color: $White;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 1.1rem;
                    &:hover{
                        text-decoration: underline;
                    }
                    &.active{
                        color: $Eim;
                    }
                }
            }
            .user{
                a{
                    color: $White;
                }
            }
        }
        .jumbo-bottom{

            // height: 760px; //da togliere
            .jumbo-content{
                // width: 50%;
                // height: 70%;
                h3{
                    text-transform: uppercase;
                    color: $Eim;
                    font-size: 1.1rem;
                    font-weight: bold;
                }
                h2{
                    text-transform: capitalize;
                    font-weight: 600;
                    font-size: 4.5rem;
                }
                p{
                    color: $Silver;
                    font-size: 1.8rem;
                }
                .btn-area{
                    margin-top: 3rem;
                }
            }
        }
    }
</style>