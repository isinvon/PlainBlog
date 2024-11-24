<!--<template>-->
<!--  <div class="flex flex-wrap items-center mb-4">-->
<!--    <el-button size="large" :icon="Search" round>Search</el-button>-->
<!--    &lt;!&ndash; <el-button :icon="Search" round>Search</el-button> &ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="js">-->
<!--import { Search } from '@element-plus/icons-vue'-->
<!--</script>-->
<!-- 弹出的气泡搜索框 -->
<template>
  <el-popover
      placement="top-start"
      :width="200"
      trigger="hover"
      content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button class="m-2" :icon="Search" round>Search</el-button>
    </template>

    <!-- 添加搜索框 -->
    <template #default>
      <el-input v-model="searchText" placeholder="输入你的搜索内容" clearable/>
    </template>

  </el-popover>
</template>

<script lang="js" setup>
import {ref} from 'vue'
import {Search} from "@element-plus/icons-vue";

const visible = ref(false)


// 默认搜索内容
const searchText = ref('');

function togglePopover() {
  // 这里可以添加逻辑来控制气泡提示的显示与隐藏
  // 例如，可以监听点击事件来手动控制气泡提示的显示状态
  // 但由于这里使用的是 hover 触发，所以不需要手动控制
}
</script>

<style scoped>
.el-button + .el-button {
  margin-left: 8px;
}
</style>