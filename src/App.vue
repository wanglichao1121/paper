<template>
  <background/>
  <div class="root">
    <div class="main-content column" ref="maincard">
      <card-header class="full-width"/>
      <div align="center">hello</div>
    </div>
    <sidebar class="sidebar column"/>
  </div>
</template>
<script lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Background from '@/components/Background.vue'
import CardHeader from '@/components/CardHeader.vue'
import { onMounted, provide, ref } from 'vue'
export default {
  components: {
    Sidebar,Background,CardHeader
  }
}
</script>


<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #E7E8E8;
}
.root {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
}
.column {
  flex-direction: column;
}
.main-content {
//  flex: 2 0 auto;
  width: 70%;
}
.sidebar {
//  flex: 1 0 auto;
  width: 30%;
}
.main-card {
  margin: 12px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
}
.full-width {
  width: 100%;
}
</style>
