<script>
export default {
  name: 'MainCompany'
}
</script>


<template>
    <div class="company">
        <div class="container debug h-100">
            <div class="row h-100">
                <div class="col-6 d-flex flex-column justify-content-center debug">
                    <div class="text-area debug">
                        <h4>
                        titolo piccolo
                        </h4>
                        <h2>
                            titolo grande
                        </h2>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore placeat inventore ea molestiae recusandae!
                        </p>
                    </div>

                    <div class="mini_card-area debug d-flex">
                        <div class="mini_card debug">
                            <span>
                                0
                            </span>
                            <h3>
                                Titolo
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div class="mini_card debug">
                            <span>
                                0
                            </span>
                            <h3>
                                Titolo
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div class="mini_card debug">
                            <span>
                                0
                            </span>
                            <h3>
                                Titolo
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div class="button-area debug">
                        <button>
                            get in touch
                        </button>
                        <button>
                            read more
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .company{
        height: 765px;
        background-image: url(../assets/img/about-5.jpg);
        background-position: right;
        background-repeat: no-repeat;
        background-size: 50%;

    }
</style>