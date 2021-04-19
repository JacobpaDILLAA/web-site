<template>
  <div class="main">
    <div class="menu">
      <div class="menu-item">
        Home Blog
      </div>
      <div class="menu-item">
        Resume
      </div>
      <div class="menu-item">
        Contact
      </div>
    </div>

    <div class="sub-body"> Under Construction </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!--limit CSS -->
<style scoped>
  .menu{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    height: 60px;

  }
  .menu-item{
    flex: 1;
    text-align: center;
    color: #707070;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .sub-body{
    position:absolute;
    left:50%;
    top:50%;
    margin-top:-20px;
    margin-left:-50px;
    

  }
</style>
