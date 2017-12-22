<template>
  <div class="opening-board-wrapper">
    <div class="opening-board-body">
      <div v-for="player in playersLocal" :key="player">{{player}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      playersLocal: this.players
    }
  },
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.$emit('handled')
    }, 1000)
  }
}
</script>

<style scoped>
.opening-board-wrapper{
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
}
.opening-board-body{
  width: 70vw;
  height: 70vh;
}
</style>
