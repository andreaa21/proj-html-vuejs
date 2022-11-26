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
    <div class="col debug">
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



<style>

</style>