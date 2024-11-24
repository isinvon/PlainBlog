<script setup>
import {ref} from 'vue'

const drawer = ref(false)
const props = defineProps({
  avatar: {
    size: String,
    url: String,
    default: {
      size: "",
      url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    }
  }
})
</script>

<template>
  <!--头像-->
  <el-button type="text" style="margin-left: 1px" @click="drawer = true">
    <el-avatar shape="circle" :size="avatar.size" :src="avatar.url"/>
  </el-button>
  <!--右抽屉-->
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<style scoped lang="less">

</style>