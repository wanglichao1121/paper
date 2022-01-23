<template>
  <div @click="flipChecked" :class="{
      checked
    }">
        <p>{{text}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: ['value','text'],
    emits: ['update:value'],
    setup(props,{emit}) {
        const checked=ref<boolean>(props.value)
        const flipChecked=()=>{
            checked.value=!checked.value
            emit('update:value',checked.value)
        }
        return {
            checked,
            flipChecked
        }
    },
})
</script>


<style lang="scss" scoped>
$theme-color:rgb(237,125,49);
div {
    width: 100%;
    height: 80px;
    margin-top: 20px;
    border-radius: 8px;
    border: 1px solid rgb(235, 237, 240);
    background: white  linear-gradient(to right,rgba(255,255,255,0.9),rgba(255,255,255,1));
    transition: background-color 0.5s ease,border-color 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5%;
    &:hover{
        background-color: $theme-color
    }
    p{
        margin: 0;
    }
}
.checked {
    border-color: $theme-color
}
</style>