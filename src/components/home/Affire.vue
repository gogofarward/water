<template>
    <el-popover
            placement="bottom"
            width="600"
            v-model="visible"
            trigger="click">
        <div>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div>
                        <div class="af-title">查询</div>
                        <el-divider></el-divider>
                        <div>
                            <div @click="routerTo('/query', 1)">点击查询</div>
                            <div>快速查询</div>
                            <div>条件查询</div>
                            <div>沿线查询</div>
                            <div>按位置查询</div>
                            <div>缓冲区查询</div>
                            <div>消火栓查询</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                        <div class="af-title">数据管理</div>
                        <el-divider></el-divider>
                        <div>
                            <div>管网编辑</div>
                            <div>数据检查</div>
                            <div>用户挂接</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                        <div class="af-title">统计</div>
                        <el-divider></el-divider>
                        <div>
                            <div>按口径统计阀门</div>
                            <div>按管材统计管长</div>
                            <div>按管径统计管长</div>
                            <div>按道路统计设备</div>
                            <div>全设备汇总</div>
                            <div>管长统计</div>
                            <div>设备个数统计</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                        <div class="af-title">分析</div>
                        <el-divider></el-divider>
                        <div>
                            <div>爆管分析</div>
                            <div>断面观察</div>
                            <div>连通性分析</div>
                            <div>老化设备检测</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20" class="af-row">
                <el-col :span="6">
                    <div>
                        <div class="af-title">展示</div>
                        <el-divider></el-divider>
                        <div>
                            <div>大口径阀门展示</div>
                            <div>大口径管段展示</div>
                            <div>消火栓分布</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                        <div class="af-title">工具</div>
                        <el-divider></el-divider>
                        <div>
                            <div>地图标记</div>
                            <div>地图测量</div>
                            <div>导出CAD</div>
                            <div>设备打印</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                        <div class="af-title">纠错</div>
                        <el-divider></el-divider>
                        <div>
                            <div>错误属性</div>
                            <div>上报信息审核</div>
                            <div>历史信息查询</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                        <div class="af-title">3D展示</div>
                        <el-divider></el-divider>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div slot="reference" class="system-name">
            <i class="el-icon-platform-eleme"></i><span>海天智慧水务</span>
        </div>
    </el-popover>
</template>

<script>
export default {
  name: 'Affire',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    routerTo (path, param) {
      this.visible = false;
      this.$router.push({path, param})
    }
  }
}

</script>

<style scoped>
div {
    font-size: 12px;
}
.system-name {
    font-size: 20px;
    font-weight: bold;
    margin-left: 5px;
}
.el-divider {
    margin-top: 5px;
    margin-bottom: 10px;
}
.af-row {
    margin-top: 20px;
}
.af-title {
    font-weight: bold;
    font-size: 14px;
}
</style>
