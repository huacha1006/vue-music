<template>
  <div class="contain">
    <div class="left">
      <left-nav></left-nav>
      <center-nav></center-nav>
    </div>

    <right-nav></right-nav>
  </div>
</template>

<script>
import LeftNav from "./LeftNav.vue";
import CenterNav from "./CenterNav.vue";
import RightNav from "./RightNav.vue";

export default {
  components: { LeftNav, CenterNav, RightNav },
  name: "NavBar",
};
</script>

<style lang="less" scoped>
.contain {
  display: flex;
  justify-content: space-between;
  margin: 0;
  .left {
    display: flex;
  }
}
</style>
