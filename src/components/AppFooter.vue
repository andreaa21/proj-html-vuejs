<script>

import TextArea from './TextArea.vue';

export default {
  name: 'AppFooter',
  components:{
    TextArea
  }
}
</script>


<template>
  <footer>
    <div class="footer-top">
        <div class="container h-100">
            <div class="row h-100 d-flex align-items-center debug">
                <TextArea
                bigTitle="get in touch"
                smallTitle="send a message"
                smallText="We will respond to your message as soon as possible"
                />
                    <!-- <div class="form">
                        form
                    </div>
                    <button>
                        send
                    </button> -->

                <div class="col-5 debug">
                    <div class="text">
                        <h3>
                            Example
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, harum?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, harum?
                        </p>
                    </div>
                    <div class="contacts">
                        <div class="phone">
                            <span>
                                123456789
                            </span>
                        </div>
                        <div class="mail">
                            <span>
                                mail
                            </span>
                        </div>
                        <div class="address">
                            <span>
                                address
                            </span>
                        </div>
                        <button>
                            view map
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col debug">
                    footer bottom left
                </div>
                <div class="col-5 debug">
                    footer bottom right
                </div>
            </div>
        </div>
    </div>
  </footer>
</template>



<style lang="scss" scoped>
@use '../assets/styles/partials/vars' as *;
    footer{
        height: 950px;
        .footer-top{
            height: 850px;
            background-color: $Shark;
            color: $White;
            .x-container{
                
            }
        }
        .footer-bottom{
            background-color: $Woodsmoke;
            height: 100px;
            color: $White;
        }
    }
</style>