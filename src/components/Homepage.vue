<template>
    <div class="bj-box bj-ver full-screen">
        <el-header>
            <affire></affire>
            <div class="bj-box">
                <el-input size="mini" v-model="input" placeholder="请输入内容"></el-input>
                <div class="bj-button">
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-share"></i>
                    <i class="el-icon-delete"></i>
                </div>
            </div>
        </el-header>
        <el-divider></el-divider>
        <div class="bj-box bj-f1 map">
            <router-view/>
        </div>
    </div>
</template>

<script>

import Affire from './home/Affire'

export default {
  name: 'Homepage',
  data () {
    return {
      input: ""
    }
  },
  components: {
    Affire
  },
  mounted () {
    this.$router.push({path: "/basemap"})
  }
}
</script>

<style scoped>
.full-screen {
    width: 100%;
    height: 100%;
}
.el-header {
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
}
.el-divider {
    margin: 0!important;
}
.bj-box {
    display: -moz-box;
    display: -webkit-box;
}
.bj-ver {
    -moz-box-orient: vertical;
    -webkit-box-orient: vertical;
}
.bj-f1 {
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
}
.map {
    width: 100%;
    height: 100%;
}
.bj-button {
    margin-left: 10px;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
}
</style>
