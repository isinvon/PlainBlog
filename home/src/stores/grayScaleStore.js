// stores/grayScaleStore.js
// 灰度调节共享状态
import { defineStore } from 'pinia';

export const useGrayScaleStore = defineStore({
  id: 'grayScale',
  state: () => ({
    grayScaleLevel: 0
  }),
  actions: {
    setGrayScaleLevel(level) {
      this.grayScaleLevel = level;
    }
  }
});
