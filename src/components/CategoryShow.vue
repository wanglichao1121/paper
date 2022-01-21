<template>
    <MyTitle :text="title"/>
    <div class="cagegory-paper-list">
        <div v-for="(item,index) in items" :key="index" class="cagetory-paper-item">
            <img :src="item.icon"/>
            <h3>{{item.title}}</h3>
        </div>
    </div>
</template>
<script lang="ts">
import { categoryItem } from '@/interface'
import { PropType } from '@vue/runtime-core'
import MyTitle from '@/components/MyTitle.vue'
export default {
  components: { MyTitle },
    props: {
        data: {
            type: Object as PropType<categoryItem>,
            required: true
        }
    },
    setup(props){
        return {
            title: props.data.category,
            items: props.data.papers
        }
    }
}
</script>
<style lang="scss" scoped>
.cagegory-paper-list {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;
    flex-wrap: wrap;
}
.cagetory-paper-item {
    border-radius: 8px;
    display: flex;
    transition: 0.3s background-color ease;
    background-color: #F5F5F5;
    height: 60px;
    margin-right: 25px;
    margin-bottom: 15px;
    flex-direction: row;
    padding: 8px;
    h3 {
        transition: 0.3s background-color ease;
        margin: 8px;
        white-space: nowrap;
        line-height: 28px;
        //font-weight: bold;
    }
    &:hover {
        background-color: #E5E5E5;
    }
} 
</style>
