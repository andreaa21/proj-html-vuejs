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
    <div class="container d-flex flex-column flex-lg-row justify-content-between align-items-center h-100">
        <div class="row hours w-100">

            <div class="col d-flex align-items-center">
                <div class="time-icon me-3">
                    <i class="fa-solid fa-clock"></i>
                </div>
                <div class="time-text d-flex align-items-end">
                    <span>Open Hours: {{store.openHours}}</span>
                </div>
            </div>

        </div>
        <div class="row info w-100">

            <div class="col d-flex">
    
                <div class="contacts d-flex align-items-center">
                    <div class="phone mx-2">
                        <i class="fa-solid fa-phone"></i>
                        <span class="mx-2">{{store.phoneNumber}}</span>
                    </div>
                    <div class="email mx-2">
                        <i class="fa-solid fa-envelope"></i>
                        <span class="mx-2">{{store.email}}</span>
                    </div>
                </div>
                <div class="socials">
                    <ul class="d-flex justify-content-around h-100 align-items-center">
                        <li>
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
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
        // .info{
        //     margin-left: 10px;
        // }
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