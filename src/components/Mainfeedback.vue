<script>
export default {
  name: 'MainFeedback'
}
</script>


<template>
  <div class="feedback debug">
    <div class="container debug h-100">
        <div class="row debug d-flex h-50 align-items-end text-center p-4">
            <div class="col">
                <div class="text-area">
                    <h4>
                        titolo piccolo
                    </h4>
                    <h2>
                        titolo grande
                    </h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere rem error sequi! Quae, officia voluptate.
                    </p>
                </div>

            </div>
        </div>
        <div class="row h-50 d-flex align-items-center debug">
            <div class="col">
                <div class="card-area debug d-flex justify-content-between">
                    <div class="info-card p-3">
                        1
                    </div>
                    <div class="info-card p-3">
                        2
                    </div>
                    <div class="info-card p-3">
                        3
                    </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

@use '../assets/styles/partials/vars' as *;

    .feedback{
        height: 775px;
        background-color: $Nurse;
    }
</style>