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
            <div class="row d-flex h-100 align-items-center">
                <div class="col debug">
                    <div class="title-area debug text-center">
                        <h4>
                            titolo piccolo
                        </h4>
                        <h2>
                            titolo grande
                        </h2>
                    </div>
                    <div class="card-wrapper debug text-center">
                        <nav>
                            nav
                        </nav>
                        <ActionsCard />
                    </div>
                </div>
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