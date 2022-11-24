<script>
export default {
  name: 'AppHeader'
}
</script>


<template>
  <header>
    <div class="container h-100">
        <div class="row debug header-content d-flex justify-content-between">
            <div class="col header-left debug">
                hours
            </div>
            <div class="col-lg-6 header-right d-flex justify-content-between debug">
                <div class="contacts debug w-50">
                    contacts
                </div>
                <div class="socials debug w-50">
                    socials
                </div>
            </div>
        </div>
    </div>
  </header>
</template>



<style lang="scss" scoped>
@use '../assets/styles/partials/vars' as *;
    header{
        height: 50px;
        background-color: $Ebony;
        color: $Nurse;
        .header-content{
            height: 100%;
        }
    }
</style>