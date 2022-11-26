<script>

import ProcessFeatures from './ProcessFeatures.vue';
import TextArea from './TextArea.vue';

export default {
  name: 'MainProcess',
  components:{
    ProcessFeatures,
    TextArea
  }
}
</script>


<template>
    <div class="process">
        <div class="container h-50 d-flex justify-content-center align-items-center">
            <div class="row">
                <TextArea
                bigTitle="process management"
                smallTitle="how it works in practice"
                smallText="We work With innovative methodologies to ensure that the entire reformatting process is done from start to finish as planned."
                class="text-center"
                />
            </div>
        </div>

            <ProcessFeatures />

    </div>
</template>



<style lang="scss" scoped>
    .process{
        height: 720px;
    }
</style>