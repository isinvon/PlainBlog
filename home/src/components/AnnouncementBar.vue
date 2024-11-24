<!--滚动公告栏-->
<template>
  <div class="announcement-bar">
    <el-carousel
        height="50px"
        :autoplay="true"
        :interval="interval"
        direction="vertical"
        trigger="hover"
        :loop="true"
        indicator-position="none"
    >
      <el-carousel-item v-for="(item, index) in announcements" :key="index">
        <div class="announcement-item">
          <span>
            <el-link :href="item.href" type="primary">{{ item.text }}</el-link>
          </span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>

defineOptions({name: 'AnnouncementBar'})

defineProps({
  announcements: {
    type: Array,
    required: true
  },
  interval: {
    type: Number,
    default: 3000
  }
});

</script>

<style lang="less" scoped>
.announcement-bar {
  position: relative;
  overflow: hidden;
  height: 22px;
  //line-height: 50px;
  // 从左到右渐变色
  background: linear-gradient(to right, #f7f7f7, transparent); /* 添加渐变背景 */
  border-radius: 100px;
}

.announcement-item {
  font-size: 15px;
  font-weight: lighter;
  color: #909399;
  // 打开后就取消走马灯文字居中----------------开始------------
  //display: flex;
  //align-items: center; // 垂直居中
  //white-space: nowrap; // 不换行
  // 打开后就取消走马灯文字居中----------------结束------------
}
.announcement-item span {
  white-space: nowrap;
}
</style>


<!--使用方式-->
 <!--公告框-->
<!--<AnnouncementBar-->
<!--    :announcements="announcements"-->
<!--    :interval="2000"-->
<!--/>-->

<!--import AnnouncementBar from "@/components/AnnouncementBar.vue";-->
<!--const announcements = ref([-->
<!--{text: '欢迎使用我们的服务！', href: 'https://www.baidu.com'},-->
<!--{text: '最新优惠活动正在进行中...', href: 'https://www.baidu.com'},-->
<!--{text: '系统维护将于今晚22:00开始。', href: 'https://www.baidu.com'}-->
<!--]);-->
