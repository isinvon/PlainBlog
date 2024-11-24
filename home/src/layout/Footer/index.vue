<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="关于" name="first">关于</el-tab-pane>
    <el-tab-pane label="版权" name="second">版权</el-tab-pane>
    <el-tab-pane label="友链" name="third">友链</el-tab-pane>
    <el-tab-pane label="统计" name="fourth">
      <ViewsStatistics style="width: 100%"/>
    </el-tab-pane>
    <el-tab-pane label="其他" name="fifth">其他</el-tab-pane>
  </el-tabs>
</template>
<script lang="js" setup>
import ViewsStatistics from './ViewsStatistics'
import {ref} from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style lang="less" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
