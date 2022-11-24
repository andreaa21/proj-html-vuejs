<script>
export default {
  name: 'AppHeader'
}
</script>


<template>
  <header>
    <div class="container h-100">
        <div class="row debug header-content d-flex justify-content-between">
            <div class="col-2 header-left debug">
                hours
            </div>
            <div class="col-3 header-right d-flex justify-content-between debug">
                <div class="contacts">
                    contacts
                </div>
                <div class="socials">
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