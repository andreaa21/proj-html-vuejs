<script>

import {store} from '../assets/data/store'
import FullBtn from './FullBtn.vue';
import OutlineBtn from './OutlineBtn.vue';



export default {
  name: 'MainCompany',
  data(){
    return{
        store
    }
  },
  components:{
    FullBtn,
    OutlineBtn
  }
}
</script>


<template>
    <div class="company">
        <div class="background h-100">

        </div>
        <div class="container h-100 debug d-flex flex-column justify-content-center">

            <div class="row w-50 debug">
                <div class="col d-flex flex-column justify-content-center">

                    <div class="text-area">
                        <h4>
                        {{store.MainCompanyText.mcSmallTitle}}
                        </h4>
                        <h2>
                            {{store.MainCompanyText.mcBigTitle}}
                        </h2>
                        <p>
                           {{store.MainCompanyText.mcPar}}
                        </p>
                    </div>

                </div>
            </div>

            <div class="row row-cols-1 row-cols-lg-3 w-50 mini_card-area debug d-flex debug">

                         <div class="mini_card col debug">
                             <span>
                                 0
                             </span>
                             <h3>
                                 Titolo
                             </h3>
                             <p>Lorem ipsum dolor sit amet consectetur.</p>
                         </div>
                         <div class="mini_card col debug">
                             <span>
                                 0
                             </span>
                             <h3>
                                 Titolo
                             </h3>
                             <p>Lorem ipsum dolor sit amet consectetur.</p>
                         </div>
                         <div class="mini_card col debug">
                             <span>
                                 0
                             </span>
                             <h3>
                                 Titolo
                             </h3>
                             <p>Lorem ipsum dolor sit amet consectetur.</p>
                         </div>

            </div>

            <div class="row w-50 debug">
                <div class="col d-flex flex-column justify-content-center">

                    <div class="button-area">
                        <FullBtn />
                        <OutlineBtn />
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>














<style lang="scss" scoped>
    .company{
        height: 765px;
        position: relative;
        .background{
            width: 50%;
            position: absolute;
            right: 0;
            background-image: url(../assets/img/about-5.jpg);
            background-repeat: no-repeat;
            background-size: cover;
        }

    }
</style>