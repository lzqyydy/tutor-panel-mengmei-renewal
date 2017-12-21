<template>
  <div id="main-wrapper">
    <div id="main-body">
      <hello></hello>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

import hello from '../components/hello.vue'


export default{
  data(){
    return {
      socket: null
    }
  },
  components: {
    hello
  },
  mounted(){
    this.socket = io('/mahjong', {
      reconnection: false
    })
    this.socket.on('message', function(data){
      console.log(data)
    })
  }
}
</script>

<style lang="css" scoped>

</style>