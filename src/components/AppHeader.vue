<script>

import {store} from '../assets/data/store'

export default {
  name: 'AppHeader',
  data(){
    return{
        store
    }
  }
}
</script>


<template>
  <header class="d-flex align-items-center">
    <div class="container d-flex flex-lg-row justify-content-between h-100">
        <div class="row w-50 hours">

            <div class="col d-flex align-items-center justify-content-between">
                <div class="time-container d-flex">
                    <div class="time-icon me-3">
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    <div class="time-text d-flex align-items-end">
                        <span>Open Hours: {{store.openHours}}</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="row info w-50">

            <div class="col d-flex justify-content-end">
    
                <div class="contacts d-none d-xl-flex align-items-center justify-content-end ms-5">
                    <div class="phone me-3 py-2">
                        <i class="fa-solid fa-phone"></i>
                        <span class="ms-2">{{store.phoneNumber}}</span>
                    </div>
                    <div class="email py-2">
                        <i class="fa-solid fa-envelope"></i>
                        <span class="ms-2">{{store.email}}</span>
                    </div>
                </div>
                <div class="socials d-none d-xl-flex justify-content-end py-2">
                    <ul class="d-flex justify-content-evenly h-100 align-items-center">
                        <li class="mx-3">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li class="mx-3">
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        </li>
                        <li class="ms-3">
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="hamb d-flex align-items-center d-xl-none">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>

        </div>
    </div>
  </header>




</template>



<style lang="scss" scoped>
@use '../assets/styles/partials/vars' as *;
    header{
        min-height: 50px;
        background-color: $Ebony;
        color: $Nurse;
        .contacts{
            width: 70%;
        }
        .socials{
            width: 30%;
        }
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            a{
                color: $Nurse;
            }
        }
    }
</style>