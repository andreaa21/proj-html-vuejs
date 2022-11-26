<script>

import {store} from '../assets/data/store';
import Mini_Card from './Mini_Card.vue';
import FullBtn from './FullBtn.vue';
import OutlineBtn from './OutlineBtn.vue';
import TextArea from './TextArea.vue';


export default {
  name: 'MainCompany',
  data(){
    return{
        store
    }
  },
  components:{
    FullBtn,
    OutlineBtn,
    Mini_Card,
    TextArea
  }
}
</script>


<template>
    <div class="company">
        <div class="background h-100">
        </div>
        <div class="container h-100 d-flex flex-column justify-content-center p-5">

            <div class="row w-50">
                <TextArea
                bigTitle="the company"
                smallTitle="about the network"
                smallText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, possimus! consectetur adipisicing elit. Facere, possimus!"
                />
            </div>

            <div class="row row-cols-1 row-cols-lg-3 w-50 mini_card-area my-3 d-flex">
                <Mini_Card />
            </div>

            <div class="row w-50">
                <div class="col d-flex flex-column justify-content-center">

                    <div class="button-area mt-5">
                        <FullBtn />
                        <OutlineBtn class="text-color"/>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>














<style lang="scss" scoped>

@use '../assets/styles/partials/vars' as *;
    .company{
        min-height: 765px;
        position: relative;
        .background{
            width: 50%;
            position: absolute;
            right: 0;
            background-image: url(../assets/img/about-5.jpg);
            background-repeat: no-repeat;
            background-size: cover;
        }
        .text-area{
            h4{
                color: $Eim;
                text-transform: uppercase;
                font-size: .9rem;
                font-weight: 900;
            }
            h2{
                font-size: 3rem;
                text-transform: capitalize;
                font-weight: 900;
                color: $Ebony;
                margin-top: 1rem;
            }
            p{
                color: $Ebony;
                font-size: 1.1rem;
            }
        }

        .text-color{
            color: $Eim;
            // rifare i bottoni
        }

    }
</style>