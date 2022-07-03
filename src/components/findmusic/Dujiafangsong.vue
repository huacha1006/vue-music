<template>
  <div>
    <div class="title">独家放送<i class="el-icon-arrow-right"></i></div>
    <div class="contain">
      <div v-for="item in list" :key="item.id">
        <div class="item">
          <img class="pic" :src="item.sPicUrl" />
          <span>{{ item.name }}</span>
          <img class="play" src="../../../public/24gl-playCircle.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDuJiaFangSong } from "@/api/music";
export default {
  name: "DuJiafangsong",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.fetchData();
    // this.fetchData2();
  },
  methods: {
    // fetchData() {
    //   getTuiJianGeDan().then((res) => {
    //     // this.list = res.data.result;
    //     console.log(res);
    //console.log("你好")
    //   });
    // },
    fetchData() {
      getDuJiaFangSong().then((res) => {
        this.list = res.data.result;
        console.log(res);
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
  grid-template-columns: repeat(auto-fill, 327px);
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  .item {
    height: 254px;
    position: relative;

    .pic {
      width: 327px;
      //   height: 250px;
      border-radius: 20px;
    }
    span {
      color: #d3dce6;
      line-height: 30px;
      -webkit-line-clamp: 2;
    }
    .play {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
