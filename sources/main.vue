<template>
  <div class="main-wrapper">
    <div class="main-body">
      <viewport class="viewport"></viewport>
    </div>
  </div>
</template>

<script>
import viewport from './viewport.vue'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import io from 'socket.io-client'

import config from './config.js'

export const store = new Vuex.Store({
  state: {
    currentState: null,
    token: '',
    config
  },
  mutations: {
    mainGameInit(state){
      state.currentState = 'lobby';
    },
    mainGameState(state, value){
      state.currentState = value;
    },
    setToken(state, value){
      state.token = value;
    }
  }
})

let socket = io('/mahjong', {
  reconnection: false
})

export default{
  store,
  components: {
    viewport
  },
  computed: {
    token: function(){
      return this.$store.state.token;
    }
  },
  methods: {
    init(){
      this.$root.$on('send', ({data, ack})=>{
        socket.emit('message', Object.assign(data, {
          token: this.token
        }), ack)
      })
    }
  },
  mounted() {
    this.$store.commit('mainGameInit');
  }
}
</script>

<style lang="css" scoped>
.main-wrapper{
  width: 100vw;
  height: 100vh;
}
.main-body{
  width: 100%;
  height: 100%;
}
.viewport{
  width: 100vmin;
  height: 100vmin;
}
</style>