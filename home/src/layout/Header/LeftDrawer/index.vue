<template>
  <el-button text @click="dialog = true">
    <el-icon><Expand /></el-icon>
  </el-button>
  <el-drawer
    v-model="dialog"
    title="I have a nested form inside!"
    :before-close="handleClose"
    direction="ltr"
    class="demo-drawer"
  >
  </el-drawer>
</template>

<script lang="js" setup>
// Expand 图标
import { Expand } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { ElDrawer, ElMessageBox } from 'element-plus'

const formLabelWidth = '80px'
let timer

const dialog = ref(false)
const loading = ref(false)

// 关闭之前触发
// const handleClose = (done) => {
//   if (loading.value) {
//     return
//   }
//   ElMessageBox.confirm('Do you want to submit?')
//     .then(() => {
//       loading.value = true
//       timer = setTimeout(() => {
//         done()
//         // 动画关闭需要一定的时间
//         setTimeout(() => {
//           loading.value = false
//         }, 400)
//       }, 2000)
//     })
//     .catch(() => {
//       // catch error
//     })
// }

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}
</script>
