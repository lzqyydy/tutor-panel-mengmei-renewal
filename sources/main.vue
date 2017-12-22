<template>
  <div class="main-wrapper">
    <div class="main-body">
      <hello></hello>
    </div>
  </div>
</template>

<script>
import hello from '../components/hello.vue'

export default{
  components: {
    hello
  }
}
</script>

<style lang="css" scoped>
.main-wrapper{
  width: 100vw;
  height: 100vh;
}
.main-body{
  width: 100vw;
  height: 100vh;
}
</style>