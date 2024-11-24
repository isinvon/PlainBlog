// ThemeDayAndNightStore.js
// 昼夜主题切换的状态管理
import { defineStore } from 'pinia';

export const useThemeDayAndNightStore = defineStore({
  id: 'theme',
  state: () => ({
    // 根据 localStorage 初始化主题状态
    isDarkMode: localStorage.getItem('theme') === 'dark',
  }),
  actions: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode; // 切换状态
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light'); // 更新本地存储
      // 切换 body 的类名
      document.body.classList.toggle('dark', this.isDarkMode);
    },
    initializeTheme() {
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        this.isDarkMode = true;
      } else {
        document.body.classList.remove('dark');
        this.isDarkMode = false;
      }
    },
  },
});

