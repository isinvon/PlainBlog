<!--GrayScaleSlider.vue-->
<!--页面灰度调节-->
<template>
  <el-slider
      v-model="grayScaleLevel"
      :min="0"
      :max="100"
      @change="updateGrayScale"
      class="gray-scale-slider custom-slider"
  />
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useGrayScaleStore} from '@/stores/grayScaleStore';

defineOptions({
  name: 'GrayScaleSlider'
})

const grayScaleStore = useGrayScaleStore();

const grayScaleLevel = ref(grayScaleStore.grayScaleLevel);

function updateGrayScale() {
  grayScaleStore.setGrayScaleLevel(grayScaleLevel.value);
}

onMounted(() => {
  grayScaleLevel.value = grayScaleStore.grayScaleLevel;
});

</script>
<style scoped lang="less">
.custom-slider::v-deep {
  // 未使用的滑道样式
  .el-slider__runway {
    height: 2px;
    background-color: #ccc; // 背景颜色
  }

  // 滑块按钮样式
  .el-slider__button {
    width: 20px; // 滑块宽度
    height: 8px; // 滑块高度
    border-radius: 100px; // 圆角
    border-color: #5aebe8; // 边框颜色
    background-color: #48a09f; // 滑块背景颜色
  }
  // 已滑动部分的样式
  .el-slider__bar {
    height: 2px;
    background-color: #969696; // 已滑动部分的颜色
  }
}
</style>
