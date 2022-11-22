<template>
  <div>
    <div class="above-fold-sample">
      <img class="sample-img" v-for="(data, data_index) in 5" :key="data_index" :src="'/assets/sample/' + (data_index + 1) + '.png'"/>
      <p>The quick brown fox jumops over the ehad of the lazy dog</p>
    </div>

    <div v-for="(data, data_index) in 100" :key="data_index">
      <img class="lazy sample-img" :data-src="'/assets/sample/' + (data_index + 6) + '.png'"/>
      <p>The quick brown fox jumops over the ehad of the lazy dog</p>
      <p>asdas dsa das dnsa dasghkd hahsdhahsdhahsd hjashdhjash  dhash dhashd hashd has hdhash dhash dhash dahs hdsah hdjash jdhasjkhd jkashj dhasjhd jkash</p>
      <p>asdas dsa das dnsa dasghkd hahsdhahsdhahsd hjashdhjash  dhash dhashd hashd has hdhash dhash dhash dahs hdsah hdjash jdhasjkhd jkashj dhasjhd jkash</p>
      <p>asdas dsa das dnsa dasghkd hahsdhahsdhahsd hjashdhjash  dhash dhashd hashd has hdhash dhash dhash dahs hdsah hdjash jdhasjkhd jkashj dhasjhd jkash</p>
      <p>asdas dsa das dnsa dasghkd hahsdhahsdhahsd hjashdhjash  dhash dhashd hashd has hdhash dhash dhash dahs hdsah hdjash jdhasjkhd jkashj dhasjhd jkash</p>
      <p>asdas dsa das dnsa dasghkd hahsdhahsdhahsd hjashdhjash  dhash dhashd hashd has hdhash dhash dhash dahs hdsah hdjash jdhasjkhd jkashj dhasjhd jkash</p>
      <p>asdas dsa das dnsa dasghkd hahsdhahsdhahsd hjashdhjash  dhash dhashd hashd has hdhash dhash dhash dahs hdsah hdjash jdhasjkhd jkashj dhasjhd jkash</p>
      <p>asdas dsa das dnsa dasghkd hahsdhahsdhahsd hjashdhjash  dhash dhashd hashd has hdhash dhash dhash dahs hdsah hdjash jdhasjkhd jkashj dhasjhd jkash</p>
    </div>
  </div>
</template>

<style>
.above-fold-sample {
  min-height: 100vh;
}
.sample-img {
  width: 100%;
  max-width: 250px;
  height: auto;
}
</style>
