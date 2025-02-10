<template>
  <div class="drawer-body-container">
    <NButton @click="onClickDownload">下载一些东西</NButton>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { downloadData } from '@/services/get_data.js'

async function onClickDownload() {
  await downloadData()
}
</script>

<style scoped lang="less">
.drawer-body-container {
  text-align: left;
}
</style>
