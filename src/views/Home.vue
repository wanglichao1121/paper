<template>
  <div v-if="curStep==0">
    <div class="main-card">
      <img src="@/assets/banner.png" class="full-width"/>
    </div>
    <div class="main-card">
      <category-show @selectPaper="handleSelect" v-for="(c,index) in categoryList" :data="c" :key="index"/>
    </div>
  </div>
  <div v-else class="main-card">
    <div class="gray-border full-width">
      <page-header
        :title="selectedPaper?.title"
        :sub-title="selectedPaper?.desc"
        @back="goback"/>
      <div id="select-content">
        <h3>请选择你的专长方向:</h3>
        <my-choice v-for="(sel,selind) in selectedPaper?.select" :key="selind" :text="sel.name"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchPaperList } from '@/util'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { categoryItem, paperItem } from '@/interface'
import CategoryShow from '@/components/CategoryShow.vue'
import { useStore } from 'vuex'
import { PageHeader } from 'ant-design-vue'
import MyChoice from '@/components/MyChoice.vue'


export default defineComponent({
  setup(){
    const store=useStore()
    const categoryList=ref<categoryItem[]>([])
    const selectedPaper=ref<paperItem>()
    onMounted(async()=>{
      categoryList.value=await fetchPaperList();
      //DEV::
      selectedPaper.value=categoryList.value[0].papers[0];
      console.log(selectedPaper.value.select);
    })
    const handleSelect=(payload:paperItem)=>{
      store.commit('nextStep')
      selectedPaper.value=payload
    }
    const goback=()=>{
      store.commit('prevStep')
    }
    return {
      categoryList,
      curStep: computed(()=>store.state.paperSelection.curStep),
      handleSelect,
      goback,
      selectedPaper
    }
  },
  components:{
    CategoryShow,
    PageHeader,
    MyChoice
  }
})
</script>
<style lang="scss" scoped>
.gray-border{
  border: 1px solid rgb(235, 237, 240);
}
#select-content {
  padding: 30px;
  h3 {
    font-weight: bold;
  }
}
</style>