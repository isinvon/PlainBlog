
<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
      <!--<el-header class="header">-->
      <!--</el-header>-->

      <el-container>
        <!-- 左侧边栏 -->
        <el-aside width="200px">
          <div class="left-aside">
            <!-- 创作/事件 - 时间线 -->
            <Timeline class="time-line"/>
          </div>
        </el-aside>
        <el-container>
          <!-- 主体 -->
          <el-main class="main">

            <!--<Table/>-->
            <!--<SearchBox/>-->
            <List @click="handleArticleClick"/>
            <br>
            <Pagination class="pagination"/>

          </el-main>

          <!-- 底部 -->
          <!--<el-footer>-->
          <!--  <div class="footer">-->
          <!--  </div>-->
          <!--</el-footer>-->

        </el-container>
        <!-- 右侧边栏 -->
        <el-aside width="200px">
          <div class="right-aside">
            <!-- 手风琴折叠面板 -->
            <Collapse/>
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>


<script lang="js" setup>
import Pagination from './Pagination'
import Table from './Table'
import SearchBox from './SearchBox'
import List from './List'
import Timeline from "@/layout/Timeline/index.vue";
import Collapse from "@/layout/Collapse/index.vue";

</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
