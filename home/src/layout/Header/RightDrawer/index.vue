<template>
  <el-button text @click="table = true">
    <el-icon><Fold /></el-icon>
  </el-button>

  <el-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="rtl"
    size="50%"
  >
  </el-drawer>
</template>

<script lang="js" setup>
import { Fold } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { ElDrawer, ElMessageBox } from 'element-plus'

let timer

const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

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

// const cancelForm = () => {
//   loading.value = false
//   dialog.value = false
//   clearTimeout(timer)
// }
</script>
