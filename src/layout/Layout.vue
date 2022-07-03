<template>
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <side-bar></side-bar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from "./navbar/Index.vue";
import SideBar from "./sidebar/Index.vue";
export default {
  name: "lAyout",
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin: 0;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  /* background-color: #e9eef3; */

  background-color: rgb(37, 37, 37);
  color: #333;
  text-align: left;
  font-size: 20px;
  height: 100vh;
}
</style>
