<template>
  <div class="game-wrapper">
    <div class="game-body">
      <div class="game-round"></div>
      <div class="game-player" v-for="i in 4" :key="`game-player-${i}`">
        <div class="game-score"></div>
        <div class="game-discarded"></div>
        <div class="game-playarea">
          <div class="game-handtile"></div>
          <div class="game-furo"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.game-body{
  position: relative;
  width: 100%;
  height: 100%;
}
.game-round{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 10%;
  height: 10%;
}
.game-player{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.game-player:nth-last-child(4){transform: none;}
.game-player:nth-last-child(3){transform: rotate(-90deg);}
.game-player:nth-last-child(2){transform: rotate(-180deg);}
.game-player:nth-last-child(1){transform: rotate(-270deg);}
.game-score{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%;
  height: 10%;
  transform: translate(-25%, 50%);
  background-color: #FFCCDD;
}
.game-discarded{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 35%;
  height: 20%;
  transform: translate(-42.5%, 75%);
  background-color: #DDFFCC;
}
.game-playarea{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 15%;
  transform: translate(-50%, 233.33%);
  background-color: #CCDDFF;
}
</style>
