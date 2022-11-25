<script>

import ActionsCard from './ActionsCard.vue';

export default {
  name: 'MainActions',
  components:{
    ActionsCard
  }
}
</script>


<template>
    <div class="actions">
        <div class="container h-100 debug">
            <div class="row debug text-center title-area">
                <div class="col">
                    <h4>
                        titolo piccolo
                    </h4>
                    <h2>
                        titolo grande
                    </h2>
                </div>
            </div>
            <div class="row nav-area text-center debug">
                <nav>
                    nav
                </nav>
            </div>
            <div class="row card-area debug">
                <ActionsCard />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    @use '../assets/styles/partials/vars' as *;

    .actions{
        height: 1310px;
        background-color: $Woodsmoke;
        color: $White;
    }
</style>