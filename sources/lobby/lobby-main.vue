<template>
  <div class="lobby-wrapper">
    <div class="lobby-body">
      <div class="lobby-dialog">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    config: function(){
      return this.$store.state.config
    }
  },
  mounted() {
    if(this.config.debug.autoStart){
      this.$root.$emit('send', {
        data: {
          type: 'ack'
        }
      })
    }
  }
}
</script>

<style scoped>
.lobby-body{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
}
.lobby-dialog{
  width: 50%;
  height: 50%;
  background-color: white;
}
</style>
