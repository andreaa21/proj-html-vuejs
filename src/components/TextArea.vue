<script>

import {store} from '../assets/data/store';

export default {
    name: 'TextArea',
    data(){
        return{
            store
        }
    },
    props:{
        bigTitle: String,
        smallTitle: String,
        smallText: String
    }
}
</script>

<template>
    <div class="col-12">
       <h4>
           {{smallTitle}}
       </h4>
       <h2>
           {{bigTitle}}
       </h2>
       <p>
           {{smallText}}
       </p>
    </div>
</template>



<style lang="scss" scoped>

@use '../assets/styles/partials/vars' as *;

    h4{
        text-transform: uppercase;
        color: $Eim;
        font-weight: 900;
        font-size: .9rem;
    }
    h2{
        text-transform: capitalize;
        font-size: 3rem;
        font-weight: 900;
        margin-bottom: 1.5rem;
    }
    p{
        font-size: 1.1rem;
        color: $Shuttle;
    }

</style>