<template>
  <!--<div>-->
    <emoji-picker class="emoji-picker" @emoji-click="handleEmojiClick"/>
  <!--</div>-->
</template>

<script setup>
import {ref, defineEmits, onMounted} from 'vue';

import 'emoji-picker-element'; // 引入 emoji-picker-element
// 使用 defineEmit 定义 emit 函数
const emit = defineEmits(['emoji-selected']);

const handleEmojiClick = (event) => {
  // 使用 emit 函数将选中的表情符号传递给父组件
  emit('emoji-selected', event.detail.unicode);
};


</script>

<style lang="less" scoped>
.emoji-picker {
  width: 400px;
  height: 300px;
}
</style>
