<script>

import { store } from '../assets/data/store';

export default {
    name: 'Mini_card',
    data(){
        return{
            store
        }
    }
    
}
</script>


<template>
    <div
    v-for="(mini_card, index) in store.Mini_Cards"
    :key="index"
    class="mini_card p-2 col">
        <span>
            {{mini_card.mini_number}}
        </span>
        <h3>
            {{mini_card.mini_title}}
        </h3>
        <p>
            {{mini_card.mini_text}}
        </p>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/styles/partials/vars' as *;

    .mini_card{
        span{
            color: $Eim;
            font-size: 2.5rem;
            font-weight: 900;
            padding-left: 1rem;
        }
        h3{
            text-transform: capitalize;
            color: $Woodsmoke;
            font-weight: 700;
            margin-bottom: 1.3rem;
        }
        p{
            color: $Ebony;
            font-size: 1.1rem;
        }
    }
</style>