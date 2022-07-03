<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="rgb(32,32,32)"
    text-color="#fff"
    active-text-color="red"
    style="text-align: left"
  >
    <div v-for="item in menuList.top" :key="item.name">
      <el-menu-item class="hover" @click="clickMenu(item)" :index="item.name">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>

      <!-- <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">私人FM</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">视频</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">关注</span>
      </el-menu-item> -->
    </div>

    <el-submenu index="10">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>创建的歌单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item class="hover" index="1-1">选项1</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CenterSide",
  data() {
    return {
      menuList: {
        top: [
          {
            icon: "orange",
            name: "发现音乐",
            path: "/findmusic",
          },
          {
            icon: "service",
            name: "私人FM",
            path: "/fm",
          },
          {
            icon: "video-play",
            name: "视频",
            path: "/video",
          },
          {
            icon: "thumb",
            name: "关注",
            path: "/attention",
          },
        ],
      },
    };
  },
  methods: {
    clickMenu(e) {
      this.$router.push({
        path: e.path,
      });
      console.log(e.path);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  width: 260px;
  /* min-height: 100vh; */

  /* height: 100vh; */
}
.el-menu {
  height: 100%;
  border: none;
}
.hover {
  font-size: 20px;
}
.hover:hover {
  background-color: rgb(2, 2, 2) !important;
}
</style>
