<template>
  <div class="sidebar">
    <div class="main-card">
      <MyTitle text="测试流程"/>
      <Steps id="steps" direction="vertical">
        <Step title="选择测试" description="文案"></Step>
        <Step title="选择专长" description="文案"></Step>
        <Step title="完成测试" description="文案"></Step>
      </Steps>
    </div>
    <div class="main-card">
      <MyTitle text="试题列表"/>
      <Empty description="请先选择测试" :image="simpleImage"/>
    </div>
  </div>
</template>
<script lang="ts">
import {Steps,Empty} from 'ant-design-vue'
import MyTitle from '@/components/MyTitle.vue'
export default {
  setup(){
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE
    }
  },
  components: {
    Steps,
    Step: Steps.Step,
    MyTitle,
    Empty
  }
}
</script>
<style lang="scss" scoped>
.empty {
  color: lightgray;
}
</style>