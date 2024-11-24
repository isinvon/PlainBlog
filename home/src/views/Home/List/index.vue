<template>
  <div>
    <!-- 卡片 -->
    <el-card v-for="o in 5" class="box-card" shadow="hover" style="max-width: 100%">
      <!-- 卡片内部 -->
      <el-row class="box-card-content">
        <!-- 左列 -->
        <el-col :span="2">
          <!-- 文章图片 -->
          <router-link :to="{ name: 'article', params: { id: 1 } }">
            <img
                src="@/assets/image/testImage.jpg"
                alt=""
                width="50px"
                height="50px"
                style="border-radius: 10px"
            />
          </router-link>
        </el-col>

        <!-- 中列 -->
        <el-col :span="21">
          <!-- 标题 -->
          <el-row class="title">
            <el-col :span="24">
              <p>
                <router-link :to="{ name: 'article', params: { id: 1 } }">
                  <el-link :underline="false" style="font-size: medium">
                    我是标题
                  </el-link>
                </router-link>
              </p>
            </el-col>
          </el-row>
          <!-- 内容 -->
          <!-- <el-row class="content">
            <el-col :span="24">
              <p>我是内容</p>
            </el-col>
          </el-row> -->

          <!-- 日期底部 -->
          <el-row class="footer">
            <el-col :span="24">
              <p>我是日期</p>
            </el-col>
          </el-row>
        </el-col>

        <!-- 右列 -->
        <el-col :span="1" style="display: flex; align-items: center">
          <p>
            <!-- 评论图标 -->
            <el-icon>
              <ChatSquare/>
            </el-icon>
            <!-- 评论数量 -->
            {{ 2 }}
          </p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="js" setup>
// element plus 图标
import {ChatSquare} from '@element-plus/icons-vue'

const props = defineProps({})
</script>

<style lang="less" scoped>
.box-card {
  border-radius: 15px;
  // 间距
  margin: 10px;
  // 字 - 左对齐
  text-align: left;
}

.box-card-content {
  margin: -12px;
}

.title {
  font-size: medium;
  font-weight: 600;
}

.content {
  font-size: small;
  font-weight: 600;
}

.footer {
  font-size: xx-small;
  font-weight: 300;
}

// 控制三者间距
.title,
.content,
.footer {
  line-height: 0; // 减小行间距
}
</style>
