<script>

import {store} from '../assets/data/store';
import FeedbackCard from './FeedbackCard.vue'

export default {
  name: 'MainFeedback',
  data(){
    return{
        store
    }
  },
  components:{
    FeedbackCard
  }
}
</script>


<template>
  <div class="feedback d-flex align-items-center">
    <div class="container h-100">
        <div class="row d-flex h-50 align-items-end text-center p-4">
            <div class="col d-flex justify-content-center">
                <div class="text-area w-75">
                    <h4>
                        {{store.FeedbackText.FeedbackSmallTitle}}
                    </h4>
                    <h2>
                        {{store.FeedbackText.FeedbackBigTitle}}
                    </h2>
                    <p>
                        {{store.FeedbackText.FeedbackPar}}
                    </p>
                </div>

            </div>
        </div>
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 h-50 d-flex align-items-center justify-content-center card-area">
            <FeedbackCard />
        </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

@use '../assets/styles/partials/vars' as *;

    .feedback{
        min-height: 775px;
        background-color: $Nurse;
        .text-area{

        }
    }
</style>