<script>

import FeaturesCard from './FeaturesCard.vue';

export default {
  name: 'MainFeatures',
  components:{
    FeaturesCard
  }
}
</script>


<template>
    <div class="features d-flex align-items-center">
        <div class="container debug">
            <div class="row debug row-cols-1 row-cols-lg-2 row-cols-xl-3 d-flex justify-content-center">
                <FeaturesCard />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

@use '../assets/styles/partials/vars' as *;
    .features{
        background-color: $Nurse;
        min-height: 600px;
        .feature-cards{
            height: 300px;
            width: 300px;
            margin: 1rem;
        }
    }
</style>