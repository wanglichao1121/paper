<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import {surveyItem,fetchSurveyList} from '@/util'
import { ref } from 'vue'
//import {List,ListItem} from 'ant-design-vue'

export default {
  setup(){
    const surveyList=ref<surveyItem[]>([])
    const getSurveyList=async()=>{
      surveyList.value=await fetchSurveyList();
    }
    return {
      surveyList,
      getSurveyList
    }
  },
  components:{
    //Button
  }
}
</script>
