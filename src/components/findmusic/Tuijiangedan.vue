<template>
  <div>
    <div class="title">推荐歌单<i class="el-icon-arrow-right"></i></div>
    <div class="contain">
      <div v-for="item in list" :key="item.id">
        <div class="item">
          <img class="pic" :src="item.picUrl" />
          <span>{{ item.name }}</span>
          <div class="IconAndPlay">
            <img class="triangle" src="../../../public/24gl-play.png" />
            <span class="count">15万</span>
          </div>
          <img class="play" src="../../../public/play.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTuiJianGeDan } from "@/api/music";
export default {
  name: "TuiJianGeDan",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getTuiJianGeDan().then((res) => {
        this.list = res.data.result;
        // console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  font-size: 30px;
  line-height: 100px;
  color: #d3dce6;
  text-align: left;
  vertical-align: middle;
  .el-icon-arrow-right {
    margin-left: 20px;
    font-size: 30px;
  }
}
.contain {
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  .item {
    height: 320px;
    position: relative;

    .pic {
      width: 256px;
      height: 256px;
      border-radius: 20px;
    }
    span {
      color: #d3dce6;
      line-height: 30px;
      -webkit-line-clamp: 2;
    }
    .IconAndPlay {
      position: absolute;
      right: 20px;
      top: 10px;

      .triangle {
        width: 26px;
        height: 26px;
        vertical-align: middle;
      }
      .count {
        font-size: 26px;
        vertical-align: middle;
      }
    }

    .play {
      position: absolute;
      right: 20px;
      bottom: 80px;
      width: 60px;
      height: 60px;
      display: none;
    }
  }
}
.item:hover .play {
  display: block;
}
</style>
