<template>
  <div class="body">
    <ban-ner></ban-ner>
    <tuijiangedan></tuijiangedan>
    <dujiafangsong></dujiafangsong>
  </div>
</template>

<script>
import BanNer from "../../components/findmusic/Banner.vue";
import Tuijiangedan from "../../components/findmusic/Tuijiangedan.vue";
import Dujiafangsong from "../../components/findmusic/Dujiafangsong.vue";
export default {
  name: "fIndmusic",
  components: { BanNer, Tuijiangedan, Dujiafangsong },
};
</script>

<style scoped>
.body {
  max-width: 1400px;
  min-width: 1400px;
  margin: 0 auto;
}
</style>
