<template>
  <div class="game-area-wrapper">
    <div class="game-area-body">
      <div class="game-area-round"></div>
      <div class="game-area-player" v-for="i in 4" :key="`gamearea-${i}`">
        <div class="game-area-score"></div>
        <div class="game-area-discarded"></div>
        <div class="game-area-playarea">
          <div class="game-area-handtile"></div>
          <div class="game-area-furotile"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props: {
    data:{
      type: Object
    }
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
