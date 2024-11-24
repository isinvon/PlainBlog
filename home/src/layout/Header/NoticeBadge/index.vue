<!--通知角标徽章：https://element-plus.org/zh-CN/component/badge.html-->
<template>
  <el-badge :value="200" :max="99" class="item">
    <el-button circle>
      <!--实心-->
      <!--<MIcon icon="material-symbols:notifications-rounded" :size="23"/>-->
      <!--空心-->
      <MIcon icon="mdi:bell-outline" :size="22"/>
    </el-button>
  </el-badge>
</template>

<style lang="less" scoped>
.item {
  //margin-top: 10px;
  //margin-right: 40px;
}
</style>
<script setup lang="js">
import MIcon from "@/components/MIcon.vue";
</script>