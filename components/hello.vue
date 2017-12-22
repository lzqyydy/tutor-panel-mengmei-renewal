<template>
  <div class="hello-wrapper">
    <div class="hello-body">
      <opening-board v-if="states.openingBoard.display" :players="players" @handled="onPlayerReady"></opening-board>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

import openingBoard from './opening-board.vue'

export default {
  data(){
    return {
      token: null,
      socket: null,
      players: null,
      states: {
        openingBoard: {
          display: false,
        }
      }
    }
  },
  components: {
    'opening-board': openingBoard
  },
  methods: {
    onPlayerReady(){
      this.states.openingBoard.display = false
      this.socket.emit('message', {
        type: 'ready',
        token: this.token
      })
    }
  },
  mounted(){
    this.socket = io('/mahjong', {
      reconnection: false
    })
    this.socket.on('message', (message)=>{
      console.log(message)
      this.token = message.token
      switch(message.type){
        case 'ready':
          this.players = message.data;
          this.states.openingBoard.display = true;
          break;
        default: 
          break;
      }
    })
  }
}
</script>

<style scoped>
.hello-wrapper{
  width: 100vw;
  height: 100vh;
}
.hello-body{
  width: 100vw;
  height: 100vh;
}
</style>
