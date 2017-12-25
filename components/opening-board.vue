<template>
  <div class="opening-board-wrapper">
    <div class="opening-board-body">
      <div v-for="(player, index) in playersLocal" :key="player">{{text.positions[index]}}:{{player}}</div>
      <div><button @click="$emit('handled')">Ready</button></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      text:{
        positions: ['東', '南', '西', '北']
      },
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
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.opening-board-body{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 70%;
  height: 70%;
  background-color: #FFFFFF;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3)
}
</style>
