<!--夜间模式切换按钮-->
<template>
  <el-switch
      v-model="isDarkMode"
      class="mt-2"
      style="margin-left: 24px"
      inline-prompt
      :active-icon="Moon"
      :inactive-icon="Sunny"
      @change="toggleTheme"
  />
</template>

<script setup lang="js">
import {onMounted, ref} from 'vue'
import {Sunny, Moon} from '@element-plus/icons-vue'
import {useThemeDayAndNightStore} from '@/stores/ThemeDayAndNightStore'

const themeStore = useThemeDayAndNightStore();
const isDarkMode = ref(themeStore.isDarkMode);

const value = ref(false);

// 初始化主题模式
onMounted(() => {
  themeStore.initializeTheme();
})

const toggleTheme = () => {
  themeStore.toggleTheme();
  value.value = themeStore.isDarkMode;
  document.body.classList.toggle('dark', value.value);
};
</script>

