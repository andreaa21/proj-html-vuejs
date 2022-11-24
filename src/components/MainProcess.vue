<script>

import ProcessFeatures from './ProcessFeatures.vue';

export default {
  name: 'MainProcess',
  components:{
    ProcessFeatures
  }
}
</script>


<template>
    <div class="process debug">
        <div class="container h-50 debug d-flex justify-content-center align-content-end">
            <div class="row debug d-flex align-content-center">
                <div class="col text-center">
                    <div class="text-area">
                        <h4>
                            titolo piccolo
                        </h4>
                        <h2>
                            titolo grande
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum laboriosam magni ut obcaecati ratione!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="process-features h-50 debug">
            <ProcessFeatures />
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .process{
        height: 720px;
    }
</style>