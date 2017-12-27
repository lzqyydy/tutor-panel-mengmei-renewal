<template>
  <div class="hello-wrapper">
    <div class="hello-body">
      <game-area v-if="playdata" :data="playdata"></game-area>
      <opening-board v-if="states.openingBoard.display" :players="players" @handled="onPlayerReady"></opening-board>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

import gameArea from './game-area.vue'
import openingBoard from './opening-board.vue'

var delayTime = 200;

export default {
  data(){
    return {
      token: null,
      socket: null,
      players: null,
      playdata: null,
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
    send(message, ack){
      this.socket.emit('message', Object.assign(message, {
        token: this.token
      }), ack)
    },
    onPlayerReady(){
      this.states.openingBoard.display = false
      this.send({
        type: 'ack'
      })
    }
  },
  mounted(){
    this.socket = io('/mahjong', {
      reconnection: false
    })
    this.socket.on('message', (message)=>{
      // console.log(message)
      this.token = message.token
      switch(message.type){
        case 'ready':
          this.players = message.data;
          this.states.openingBoard.display = true;
          break;
        case 'data':
          this.playdata = message.data;
          setTimeout(()=>{
            this.send({
              type: 'ack'
            })
          }, delayTime)
          break;
        case 'draw':
          this.playdata.handtile[message.data.player].push(message.data.tile)
          setTimeout(()=>{
            this.send({
              type: 'ack'
            })
          }, delayTime)
          break;
        case 'operation':
          // render operation board and handle user input
          setTimeout(()=>{
            this.send({
              type: 'ack'
            })
          }, delayTime)
          break;
        case 'play':
          if(message.data.player===0){
            setTimeout(()=>{
              let tile = this.playdata.handtile[0][this.playdata.handtile[0].length-1];
              this.send({
                type: 'play',
                data: {
                  tile: tile
                }
              })
            }, delayTime)
          }
          else{
            setTimeout(()=>{
              this.send({
                type: 'ack'
              })
            }, delayTime)
          }
          break;
        case 'played':
          this.playdata.handtile[message.data.player].pop();
          break;
        case 'result':
          console.log('result:', message.data)
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
