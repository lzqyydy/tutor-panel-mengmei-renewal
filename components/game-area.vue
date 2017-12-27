<template>
  <div class="game-area-wrapper">
    <div class="game-area-body">
      <div class="game-area-round">{{compRound}}</div>
      <div class="game-area-player" v-for="i in 4" :key="`gamearea-${i}`">
        <div class="game-area-score">{{compPosition(i)}}{{data.score[i-1]}}</div>
        <div class="game-area-discarded">{{data.discarded[i-1]}}</div>
        <div class="game-area-playarea">
          <div class="game-area-handtile">{{data.handtile[i-1]}}</div>
          <div class="game-area-furo">{{data.furo[i-1]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dictionary: {
        round: ['东１局','东２局','东３局','东４局','南１局','南２局','南３局','南４局','西１局','西２局','西３局','西４局'],
        position: ['东','南','西','北'],
        tile: ['一万','二万','三万','四万','五万','六万','七万','八万','九万','一条','二条','三条','四条','五条','六条','七条','八条','九条','一筒','二筒','三筒','四筒','五筒','六筒','七筒','八筒','九筒','东','西','南','北','白','发','中']
      }
    }
  },
  props: {
    data:{
      type: Object
    }
  },
  methods:{
    compPosition(i){
      return this.dictionary.position[this.data.position[i-1]]
    }
  },
  computed: {
    compRound(){
      return this.dictionary.round[this.data.round]
    },
  },
  mounted(){
  }
}
</script>

<style scoped>
.game-area-wrapper{
  position: relative;
  width: 100%;
  height: 100%;
}
.game-area-body{
  position: relative;
  width: 100%;
  height: 100%;
}
.game-area-round{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 10%;
  height: 10%;
}
.game-area-player{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.game-area-player:nth-last-child(4){transform: none;}
.game-area-player:nth-last-child(3){transform: rotate(-90deg);}
.game-area-player:nth-last-child(2){transform: rotate(-180deg);}
.game-area-player:nth-last-child(1){transform: rotate(-270deg);}
.game-area-score{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%;
  height: 10%;
  transform: translate(-25%, 50%);
  background-color: #FFCCDD;
}
.game-area-discarded{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 35%;
  height: 20%;
  transform: translate(-42.5%, 75%);
  background-color: #DDFFCC;
}
.game-area-playarea{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 15%;
  transform: translate(-50%, 233.33%);
  background-color: #CCDDFF;
}
</style>
