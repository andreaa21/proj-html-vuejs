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
        <div class="container h-100">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 d-flex justify-content-center h-100">
                <div class="col d-flex justify-content-center">
                    <div class="feature-card p-3">
                        <FeaturesCard />
                    </div>
                </div>
                <div class="col d-flex justify-content-center">
                    <div class="feature-card p-3">
                        <FeaturesCard />
                    </div>
                </div>
                <div class="col d-flex justify-content-center">
                    <div class="feature-card p-3">
                        <FeaturesCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

@use '../assets/styles/partials/vars' as *;
    .features{
        background-color: $Nurse;
        min-height: 600px;
        .feature-card{
            height: 300px;
            width: 300px;
            margin: 1rem;
        }
    }
</style>