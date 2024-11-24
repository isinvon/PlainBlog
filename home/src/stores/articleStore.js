// stores/articleStore.js
import { defineStore } from 'pinia';

export const useArticleStore = defineStore('article', {
    state: () => ({
        isComponentHidden: false, // 用于控制组件 A 的显示/隐藏状态
    }),
    actions: {
        hideComponent() {
            this.isComponentHidden = true;
        },
        showComponent() {
            this.isComponentHidden = false;
        },
    },
});
