import axios from "axios";

//获取首页轮播图
export function getBanner() {
  return axios({
    method: "GET",
    //请求地址
    url: "http://localhost:3000/banner?type=3",
  });
}

//获取首页推荐歌单
export function getTuiJianGeDan() {
  return axios({
    method: "GET",
    //请求地址
    url: "http://localhost:3000/personalized?limit=10",
  });
}

//获取首页独家列表
export function getDuJiaFangSong() {
  return axios({
    method: "GET",
    //请求地址
    url: "http://localhost:3000/personalized/privatecontent/list?limit=4",
  });
}
