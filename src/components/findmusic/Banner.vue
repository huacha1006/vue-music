<template>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in banners" :key="item.bannerId">
      <img :src="item.pic" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getBanner } from "@/api/music";
export default {
  name: "bAnner",
  data() {
    return {
      banners: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getBanner().then((res) => {
        this.banners = res.data.banners;
      });
    },
  },
};
</script>

<style scoped>
/* .el-carousel {
  min-width: 1000px;
} */
.el-carousel__item {
  color: #475669;
  font-size: 14px;
  /* opacity: 0.75; */
  /* line-height: 200px; */
  margin: 0;
  border-radius: 30px;
  /* height: 300px;
  width: 771px; */
}
img {
  height: 30px;
}
</style>
