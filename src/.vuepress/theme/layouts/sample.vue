<template>
  <div>
    <div class="above-fold-sample">
      <img v-for="(data, data_index) in 5" :key="data_index" :src="'/assets/sample/' + (data_index + 1) + '.png'"/>
    </div>

    <div v-for="(data, data_index) in 100" :key="data_index">
      <img :src="'/assets/sample/' + (data_index + 6) + '.png'" loading="lazy"/>
    </div>
  </div>
</template>

<style>
.above-fold-sample {
  min-height: 100vh;
}
</style>
