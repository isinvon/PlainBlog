<template>
  <div class="header-container">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <!-- 抽屉 - 左边弹出 -->
      <LeftDrawer/>
      <el-divider direction="vertical"/>

      <!-- 动态生成菜单项 -->
      <el-menu-item
          v-for="(item, index) in headerMenu"
          :key="item.name"
          :index="index.toString()"
          @click="handleMenuClick(item.path)"
      >
        <template v-if="item.icon">
          <el-icon :component="item.icon"/>
        </template>
        {{ item.c_name }}
      </el-menu-item>

      <div class="grid-content"/>

      <!--搜索框-->
      <SearchBox class="search-box"/>
      <el-divider direction="vertical"/>
      <!--通知徽章-->
      <NoticeBadge/>
      <!--<el-divider direction="vertical"/>-->
      <!--昼夜主题切换开关-->
      <ThemeDayAndNightButton/>
      <el-divider direction="vertical"/>
      <!-- 抽屉 - 右边弹出 -->
      <RightDrawer/>
      <el-divider direction="vertical"/>
      <HeaderAvatar/>
    </el-menu>
  </div>

</template>

<script lang="js" setup>
import NoticeBadge from './NoticeBadge'
import HeaderAvatar from './HeaderAvatar'
import ThemeDayAndNightButton from './ThemeDayAndNightButton'
import LeftDrawer from './LeftDrawer'
import RightDrawer from './RightDrawer'
import SearchBox from './SearchBox'
import {ref} from 'vue'
import headerMenu from "@/menu/headerMenu"
import {useRouter} from 'vue-router'

// 获取 headerMenu中的个数
const headerMenuLength = headerMenu.length

const activeIndex = ref('0')
const router = useRouter()

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const handleMenuClick = (path) => {
  router.push(path)
}

// 页面昼夜主题模式------开始---

// 页面昼夜主题模式------结束---


</script>

<style lang="less" scoped>
// 作用: 是将菜单中的第1个项（通常可能是一个标志或主页链接）对齐到最左边
//.el-menu--horizontal > .el-menu-item:nth-child(1) {
// 不设置任何一个菜单向左对齐
.el-menu--horizontal > .el-menu-item:nth-child(2) {
  margin-right: auto;
}

.el-menu-demo {
  display: flex;
  align-items: center; /* 垂直居中对齐菜单项和搜索框 */
}

.grid-content {
  flex: 1;
}
</style>

