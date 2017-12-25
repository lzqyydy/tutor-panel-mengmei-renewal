<template>
  <div class="hello-wrapper">
    <div class="hello-body">
      <game-area :data="playdata"></game-area>
      <opening-board v-if="states.openingBoard.display" :players="players" @handled="onPlayerReady"></opening-board>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

import gameArea from './game-area.vue'
import openingBoard from './opening-board.vue'

export default {
  data(){
    return {
      token: null,
      socket: null,
      players: null,
      playdata: {},
      states: {
        openingBoard: {
          display: false,
        }
      }
    }
  },
  components: {
    'game-area': gameArea,
    'opening-board': openingBoard
  },
  methods: {
    send(message){
      this.socket.emit('message', Object.assign(message, {
        token: this.token
      }))
    },
    onPlayerReady(){
      this.states.openingBoard.display = false
      this.send({
        type: 'ready'
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
        case 'data':
          this.playdata = message.data;
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
  position: relative;
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #CCCCCC;
}
.hello-body{
  position: relative;
  width: 100vmin;
  height: 100vmin;
  background-color: #FFFFFF;
}
</style>
