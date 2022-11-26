<script>

import TextArea from './TextArea.vue';
import FooterForm from './FooterForm.vue';
import OutlineBtn from './OutlineBtn.vue';
import FullBtn from './FullBtn.vue';
import { store } from '../assets/data/store';

export default {
  name: 'AppFooter',
  components:{
    TextArea,
    FooterForm,
    OutlineBtn,
    FullBtn
  },
  data(){
    return{
        store
    }
  }
}
</script>


<template>
  <footer>
    <div class="footer-top">
        <div class="container x-container d-lg-flex">
            <div class="row d-flex flex-column row-l w-75 me-3 pe-3">

                <TextArea
                bigTitle="get in touch"
                smallTitle="send a message"
                smallText="We will respond to your message as soon as possible"
                />
                <FooterForm />
                <div class="btn-area">
                    <FullBtn
                    btnText="send"
                    />
                </div>

            </div>


            <div class="row row-r d-flex flex-column">



                    <div class="text col-12 px-3">
                        <h3>
                            Example Inc.
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, harum?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, harum?
                        </p>
                    </div>
                    <div class="contacts col-12 px-3 mt-5">
                        <div class="phone py-3 d-flex align-items-center">
                            <div class="icon me-3">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <span>
                                {{store.phoneNumber}}
                            </span>
                        </div>
                        <div class="mail py-3 d-flex align-items-center">
                            <div class="icon me-3">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <span>
                                {{store.email}}
                            </span>
                        </div>
                        <div class="address align-items-center py-3 d-flex">
                            <div class="icon me-3">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <span>
                                {{store.address}}
                            </span>
                        </div>
                    </div>
                    <div class="btn-area pb-5">
                        <OutlineBtn
                        btnText="view map"
                        />
                    </div>



            </div>


        </div>
    </div>
    <div class="footer-bottom d-flex align-items-center">
        <div class="container">
            <div class="row h-100">
                <div class="col">
                    <p>
                        Il grafico non ha fatto caso allo screenshot tagliato :(
                    </p>
                </div>
                <div class="col-5">
                    <p>
                        2022 NEXGEN is proudly powered by <span class="text-color">me</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </footer>
</template>



<style lang="scss" scoped>
@use '../assets/styles/partials/vars' as *;
    footer{
        min-height: 950px;
        .footer-top{
            min-height: 850px;
            background-color: lighten($Woodsmoke, 2%);
            color: $White;
            .x-container{
                min-height: 850px;
                .row-l,
                .row-r{
                    padding-top: 150px;
                }
                .text{
                    h3{
                        font-weight: 900;
                        text-transform: capitalize;
                        font-size: 1.4rem;
                        margin-bottom: 1rem;
                    }
                    p{
                        color: $Shuttle;
                        font-size: 1.2rem;
                    }
                }
                .contacts{
                    font-size: 1.5rem;
                    color: $Fountain;
                    .icon{
                        width: 50px;
                        height: 50px;
                        background-color: darken($Lagoon, 15%);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
        }
        .footer-bottom{
            background-color: $Woodsmoke;
            min-height: 100px;
            color: $White;
            .text-color{
                color: $Eim;
            }
        }
    }
</style>