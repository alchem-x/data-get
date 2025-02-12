<template>
  <div class="drawer-body-container">
    <div class="action-line">
      <NH4>Sidecar Action</NH4>
      <div class="action-content">
        <NButton @click="onClickAction">Click</NButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NButton, NH4, useMessage } from 'naive-ui'

const message = useMessage()

async function onClickAction() {
  message.info('Click Action')
}
</script>

<style scoped lang="less">
.drawer-body-container {
  text-align: left;

  .action-line {
    .action-content {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>
