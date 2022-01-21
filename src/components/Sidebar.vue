<template>
  <div class="sidebar">
    <div class="main-card">
      <MyTitle text="测试流程"/>
      <Steps id="steps" direction="vertical">
        <Step title="选择测试卷" description="文案"></Step>
        <Step title="选择专长方向" description="文案"></Step>
        <Step title="完成测试" description="文案"></Step>
      </Steps>
    </div>
    <div class="main-card">
      <MyTitle text="试题列表"/>
      todo
    </div>
  </div>
</template>
<script lang="ts">
import {Steps} from 'ant-design-vue'
import MyTitle from '@/components/MyTitle.vue'
export default {
  components: {
    Steps,
    Step: Steps.Step,
    MyTitle
  }
}
</script>