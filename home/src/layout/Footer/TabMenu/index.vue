<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane v-for="item in headerMenu" :key="item.name" :label="item.label" :name="item.name">
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="js" setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import headerMenu from "@/menu/headerMenu"

const activeName = ref('home')
const router = useRouter()

const handleClick = (tab) => {
  // 从 headerMenu 中获取选中（筛选后的）的 item
  const selectedMenuItem = headerMenu.find(item => item.label === tab.props.label)
  if (selectedMenuItem) {
    router.push(selectedMenuItem.path)
  }
}
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
