<template>
    <p>{{text}}</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        text: String
    }
})
</script>
<style lang="scss" scoped>
p {
    border-left: 3px solid black;
    align-self: flex-start;
    font-size: 24px;
    padding-left: 8px;
}
</style>