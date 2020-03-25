<template>
    <div id="baseContainer" class="mapContainer"></div>
</template>

<script>
import MapLoader from "../../utils/AMap/amap";

export default {
  name: 'BaseMap',
  data () {
    return {
      map: null
    }
  },
  created() {
    console.log(10)
    let that = this
    MapLoader().then(AMap => {
      console.log('地图加载成功')
      that.map = new AMap.Map('baseContainer', {
        mapStyle: 'amap://styles/darkblue', //设置地图的显示样式
        resizeEnable: true,
        zoom: 12
      })
      AMap.plugin('AMap.ToolBar', function(){//异步加载插件
        var toolbar = new AMap.ToolBar();
        that.map.addControl(toolbar);
      });
    }, e => {
      console.log('地图加载失败' ,e)
    })
  },
  destroyed () {
    if (this.map) {
      this.map.destroy();
    }
  }
}
</script>

<style>
.mapContainer {
    width: 100%;
    height: 100%;
}
</style>
