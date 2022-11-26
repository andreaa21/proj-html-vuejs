<script>
export default {
    name: 'FooterForm'
}
</script>

<template>
  <div class="col-12 mt-5">
    <form>
      <div class="row py-2">
        <div class="col">
          <input type="text" class="form-control" placeholder="Name">
        </div>
        <div class="col">
          <input type="email" class="form-control" placeholder="Email">
        </div>
      </div>
    </form>
    <form>
      <div class="row py-2">
        <div class="col">
          <input type="text" class="form-control" placeholder="Phone">
        </div>
        <div class="col">
          <input type="text" class="form-select" placeholder="More Info">
        </div>
      </div>
      <div class="row py-2">
        <div class="col">
            <textarea class="form-control" placeholder="Message"></textarea>
        </div>
      </div>
    </form>
  </div> 
</template>



<style lang="scss" scoped>

@use '../assets/styles/partials/vars' as *;

.form-control,
.form-select{
    background-color: $Ebony;
    color: $White;
}
textarea{
    height: 200px;
}
input{
    height: 50px;
}

</style>