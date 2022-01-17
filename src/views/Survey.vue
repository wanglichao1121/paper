<template>
  <div class="about">
    <h1>This is {{surveyId}}</h1>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fetchSurveyContent, problemItem } from '@/util'
export default {
  setup() {
    const route=useRoute()
    const surveyId=ref<string>("")
    const problems=ref<problemItem[]>([])
    const getSurveyContent=async (id:string)=>{
      problems.value=await fetchSurveyContent(id)
    }
    watch(
      ()=>route.params.id,
      async (newId) => {
        if(typeof newId=="string"){
          surveyId.value=newId;
          await getSurveyContent(newId);
        }
      },{
        immediate: true
      }
    )
    return {
      surveyId
    }
  },
}
</script>

