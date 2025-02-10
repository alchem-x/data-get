<template>
  <div class="drawer-body-container">
    <NButton @click="onClickDownload">下载一些东西</NButton>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'

async function onClickDownload() {
  const { showSaveFilePicker } = window
  try {
    const handle = await showSaveFilePicker({
      suggestedName: 'data.csv',
    })
    const writable = await handle.createWritable()
    await writable.write(new Blob([`1,2,3`]))
    await writable.close()
  } catch (err) {
    //
  }
}
</script>

<style scoped lang="less">
.drawer-body-container {
  text-align: left;
}
</style>
