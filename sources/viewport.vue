<template>
  <div class="viewport-wrapper">
    <div class="viewport-body">
      <lobby class="lobby" v-if="currentState==='lobby'"></lobby>
      <game class="game" v-if="currentState==='game'"></game>
    </div>
  </div>
</template>

<script>
import lobby from './lobby/lobby-main.vue'
import game from './game/game-main.vue'

export default {
  computed: {
    currentState: function(){
      return this.$store.state.currentState;
    }
  },
  components: {
    lobby, 
    game
  }
}
</script>

<style scoped>
.viewport-body{
  position: relative;
  width: 100%;
  height: 100%;
}
.game{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.lobby{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
