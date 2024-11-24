<template>
  <div class="common-layout" :style="{ filter: `grayscale(${grayScaleLevel}%)` }">

    <el-container>
      <!-- 头部 -->
      <el-header class="header">
        <!--页面灰度调节器-->
        <div style="font-size: 1px;height: 7px;display: flex;justify-self: flex-start;align-items: center">
          <!--<el-tag :type="'info'" size="small" effect="plain" round>灰度</el-tag>-->
          <GrayScaleSlider/>
        </div>

        <!--头部菜单栏-->
        <Header/>
      </el-header>

      <!-- 主体 -->
      <el-main class="main">
        <!--横线滚动公告-->
        <!--<el-alert-->
        <!--    title="滚动公告"-->
        <!--    type="info"-->
        <!--    :closable="false"-->
        <!--    show-icon-->
        <!--&gt;-->
        <!--  <template #default>-->
        <!--    <el-scrollbar style="width: 100%;">-->
        <!--      <p>这里是滚动公告的内容，可以自动滚动显示重要信息。</p>-->
        <!--    </el-scrollbar>-->
        <!--  </template>-->
        <!--</el-alert>-->

        <!--路由-->
        <router-view/>
      </el-main>

      <!-- 底部 -->
      <el-footer>
        <div class="footer">
          <Footer/>
        </div>
      </el-footer>
    </el-container>

  </div>
</template>

<script lang="js" setup>
import Footer from "@/layout/Footer/index.vue";
import Header from "@/layout/Header/index.vue";
import {computed, ref} from "vue";

// 页面灰度调节------开始---
import {useGrayScaleStore} from './stores/grayScaleStore';
import GrayScaleSlider from './components/GrayScaleSlider.vue';

const grayScaleStore = useGrayScaleStore();
const grayScaleLevel = computed(() => grayScaleStore.grayScaleLevel);
// 页面灰度调节------结束---


// 页面昼夜主题模式------开始---

// 页面昼夜主题模式------结束---


const props = defineProps({})

</script>

<style lang="less">
@import url("@/styles/index.less");

.common-layout {
  filter: grayscale(0%); /* 默认没有灰度 */
  transition: filter 0.5s ease; /* 添加平滑过渡效果 */
}

//@media screen and (max-width: 768px) {
//  /* 在小于等于 768px 的屏幕尺寸下的样式调整 */
//  .common-layout {
//    /* 调整布局或元素宽度 */
//  }
//}
</style>
