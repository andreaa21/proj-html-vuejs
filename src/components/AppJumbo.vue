<script>

import FullBtn from './FullBtn.vue';
import OutlineBtn from './OutlineBtn.vue'


export default {
  name: 'AppJumbo',
  components:{
    FullBtn,
    OutlineBtn
  }
}
</script>


<template>
  <div class="jumbotron">
    <div class="inner">
        <div class="container">
            <div class="row debug d-flex justify-content-between align-items-center jumbo-top">
                <div class="col">
                    <div class="logo debug">
                        Logo
                    </div>
                </div>
                <div class="col">
                    <div class="jumbo-options d-flex debug">
                        <nav class="debug w-75 d-flex align-items-center">
                            nav
                        </nav>
                        <button>
                            get in touch
                        </button>
                    </div>
                </div>
            </div>
            <div class="row debug jumbo-bottom d-flex align-items-center">
                <div class="jumbo-content debug">
                    <h3>titolo piccolo</h3>
                    <h2>titolo grande</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quidem architecto, pariatur omnis facere fuga debitis vel modi suscipit dolore. Obcaecati esse inventore molestiae porro magni repellat repudiandae nihil voluptatum!
                    </p>
                    <div class="btn-area">
                        <FullBtn />
                        <OutlineBtn />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../assets/styles/partials/vars' as *;
    .jumbotron{
        min-height: 860px;
        background-image: url('../assets/img/bg-4.jpg');
        color: $White;
        .inner{
            background-color: rgba(0, 0, 0, 0.356);
        }
        .jumbo-top{
            min-height: 100px;
        }
        .jumbo-bottom{

            height: 760px; //da togliere
            .jumbo-content{
                width: 50%;
                height: 70%;
            }
        }
    }
</style>