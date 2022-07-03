<template>
  <div class="contain">
    <center-side></center-side>
  </div>
</template>

<script>
import CenterSide from "./CenterSide.vue";
// import LeftNav from "./LeftNav.vue";
// import CenterNav from "./CenterNav.vue";
// import RightNav from "./RightNav.vue";

export default {
  components: { CenterSide },
  //   components: { LeftNav, CenterNav, RightNav },
  name: "SideBar",
};
</script>

<style scoped>
.contain {
  display: flex;
  justify-content: space-around;
}
</style>
