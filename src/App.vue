<template>
  <NButton type="primary" class="open-button" @click="onActivate"> 数据抓手</NButton>
  <NDrawer v-model:show="active" :width="502" placement="right">
    <NDrawerContent title="数据抓手" closable>
      <DatGetContent />
    </NDrawerContent>
  </NDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { NButton, NDrawer, NDrawerContent } from 'naive-ui'
import DatGetContent from '@/DatGetContent.vue'

const active = ref(false)

function onActivate() {
  active.value = true
}
</script>

<style scoped lang="less">
.open-button {
  position: fixed;
  top: 4rem;
  right: 1rem;
}
</style>
