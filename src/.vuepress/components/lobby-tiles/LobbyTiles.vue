<template>
  <div
    v-if="lobbyTilesData"
    class="g-lobby-tiles"
  >
    <div class="d-flex">
      <div v-if="lobbyTilesData.lobbyTilesTitle" class="h-left">
        <p class="txt-highlight">
          {{ lobbyTilesData.lobbyTilesTitle }}
        </p>
      </div>
    </div>
    <div v-if="lobbyTilesData.lobbyList" class="d-flex gutter f-wrap">
      <div v-for="(tile, tileIndex) in lobbyTilesData.lobbyList" :key="tileIndex" class="pods">
        <a class="v-center h-center" :href="tile.link">
          <div class="pod-content">
            <h3 class="txt-highlight">{{ tile.title }}</h3>
            <img class="pod-feat-img" :src="tile.image" alt="alt img">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lobby-tiles',
  props: {
    lobbyTilesData: {
      type: Object,
      required: false
    }
  },
}
</script>

<style lang="scss">
.g-lobby-tiles{
  h3{
    margin: 0;
  }

  .pod-content{
    position: relative;
    z-index: 2;
    img{
      margin-top: 15px;
    }
  }

  .pods{
    // PADDING WILL NOT WORK PROPERLY HERE DUE TO background-clip //
    // background-clip is used for IC gradient border //
    border: solid 3px transparent;
    background-origin: border-box;
    background-clip: content-box, border-box;
    border-radius: 9px;
    min-height: 150px;
    min-width: 180px;
    text-align: center;
  }
}
</style>
