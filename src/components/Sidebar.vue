<template>
  <div class="sidebar">
    <div class="main-card">
      <my-title text="测试流程"/>
      <steps id="steps" direction="vertical" :current="curStep">
        <step title="选择测试" description="文案"></step>
        <step title="选择专长" description="文案"></step>
        <step title="完成测试" description="文案"></step>
      </steps>
    </div>
    <div v-if="curStep==2" class="main-card">
      <my-title text="试题列表"/>
      <empty description="请先选择测试" :image="simpleImage"/>
    </div>
  </div>
</template>
<script lang="ts">
import {Steps,Empty} from 'ant-design-vue'
import MyTitle from '@/components/MyTitle.vue'
import { useStore } from 'vuex'
import { computed, defineComponent } from '@vue/runtime-core'
export default defineComponent({
  setup(){
    const store=useStore()
    return {
      curStep: computed(()=>store.state.paperSelection.curStep),
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE
    }
  },
  components: {
    Steps,
    Step: Steps.Step,
    MyTitle,
    Empty
  }
})
</script>
<style lang="scss" scoped>
$theme-color:rgb(237,125,49);
.empty {
  color: lightgray;
}
</style>