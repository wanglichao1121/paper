<template>
  <div v-if="curStep==0">
    <div class="main-card">
      <div id="banner">
        <p class="banner-group" id="title">请选择连接测试</p>
        <p class="banner-group" id="subtitle">欢迎来到明日方舟</p>
      </div>
    </div>
    <div class="main-card">
      <CategoryShow @selectPaper="handleSelect" v-for="(c,index) in categoryList" :data="c" :key="index"/>
    </div>
  </div>
  <div v-else class="main-card">
    <PageHeader
      :title="selectedPaper?.title"
      :sub-title="selectedPaper?.desc"
      @back="goback"
      style="width: 100%;border: 1px solid rgb(235, 237, 240)"/>
  </div>
</template>

<script lang="ts">
import { fetchPaperList } from '@/util'
import { computed, onMounted, ref } from 'vue'
import { categoryItem, paperItem } from '@/interface'
import CategoryShow from '@/components/CategoryShow.vue'
import { useStore } from 'vuex'
import { PageHeader } from 'ant-design-vue'


export default {
  setup(){
    const store=useStore()
    const categoryList=ref<categoryItem[]>([])
    const selectedPaper=ref<paperItem>()
    onMounted(async()=>{
      categoryList.value=await fetchPaperList();
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
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
#banner {
  background-image: url('../assets/banner.png');
  background-repeat: no-repeat;
  background-position: center 0%;
  width: 100%;
  height: 250px;
  border-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.banner-group{
  margin: 8px;
  margin-left: 6%;
}
#title{
  font-family: 'Noto Sans SC';
  font-size: 48px;
}
#subtitle{
  font-family: 'Noto Sans SC';
  font-size: 20px;
}
#icon{
  width: 6%;
}
</style>