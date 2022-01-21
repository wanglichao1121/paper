<template>
  <div class="home-view">
    <div class="main-card">
      <div id="banner">
        <img class="banner-group" src="@/assets/banner-icon.png" id="icon"/>
        <p class="banner-group" id="title">请选择连接测试</p>
        <p class="banner-group" id="subtitle">欢迎来到明日方舟</p>
      </div>
    </div>
    <div class="main-card">
      <CategoryShow v-for="(c,index) in categoryList" :data="c" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import {fetchPaperList} from '@/util'
import { onMounted, ref } from 'vue'
import { categoryItem } from '@/interface'
import CategoryShow from '@/components/CategoryShow.vue'
//import {List,ListItem} from 'ant-design-vue'

export default {
  setup(){
    const categoryList=ref<categoryItem[]>([])
    onMounted(async()=>{
      categoryList.value=await fetchPaperList();
    })
    return {
      categoryList
    }
  },
  components:{
    CategoryShow
  }
}
</script>

<style lang="scss" scoped>
#banner {
  background-image: url('../assets/banner.png');
  background-repeat: no-repeat;
  background-position: center 0%;
  width: 100%;
  height: 300px;
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