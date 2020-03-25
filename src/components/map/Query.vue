<template>
    <div class="content">
        <el-row>
            <el-col :span="18">
                <div id="queryContainer" class="mapContainer"></div>
            </el-col>
            <el-col :span="6">
                <div>其他组件</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MapLoader from "../../utils/AMap/amap";

export default {
  name: 'Query',
  data () {
    return {
      map: null
    }
  },
  mounted () {
    let that = this
    console.log(1)
    MapLoader().then(AMap => {
      console.log('地图加载成功')
      that.map = new AMap.Map("queryContainer", {
        mapStyle: 'amap://styles/darkblue', //设置地图的显示样式
        resizeEnable: true,
        zoom: 11
      });
    }, e => {
      console.log('地图加载失败' ,e)
    })
  },
  destroyed() {
    if(this.map){
      this.map.destroy();
    }
  }
}
</script>

<style scoped>
.content, .mapContainer {
    width: 100%;
    height: 100%;
}
.el-row, .el-col  {
    height: 100%;
}
</style>
