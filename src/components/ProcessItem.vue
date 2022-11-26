<script>

import {store} from '../assets/data/store'

export default {
    name: 'FeatureItem',
    data(){
        return{
            store
        }
    }
}
</script>


<template>
   <div
   v-for="(item, index) in store.ProcessItems"
   :key="index"
   class="process-item col text-center px-3">
    
        <div class="number">
            <span>
                {{item.F_number}}
            </span>
        </div>
        <div class="title">
            <h3>
                {{item.F_Title}}
            </h3>
        </div>
        <div class="text">
            <p>
                {{item.F_text}}
            </p>
        </div>

   </div>
</template>



<style lang="scss" scoped>
@use '../assets/styles/partials/vars' as *;
.process-item{
    .number{
        margin-bottom: 30px;
        span{
            padding: .8rem;
            border-radius: 50%;
            color: $Atoli;
            font-size: 1.3rem;
            font-weight: 900;
            background-color: lighten($Gothic, 30%);
        }
    }
    .title{
        h3{
            font-weight: 700;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }
    .text{
        p{
            color: $Abbey;
            font-size: 1.1rem;
        }
    }
}

</style>