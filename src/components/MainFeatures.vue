<script>
export default {
  name: 'MainFeatures'
}
</script>


<template>
    <div class="features">
        <div class="container d-flex align-items-center justify-content-center h-100 debug">
            <div class="feature-card p-3 debug">
                feature 1
            </div>
            <div class="feature-card p-3 debug">
                feature 2
            </div>
            <div class="feature-card p-3 debug">
                feature 3
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

@use '../assets/styles/partials/vars' as *;
    .features{
        backgrou-color: $Nurse;
        height: 600px;
    }
</style>