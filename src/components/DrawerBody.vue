<template>
  <div class="drawer-body-container">
    <div class="action-line">
      <div class="action-content">
        <NButton dashed @click="onClickAction">益卦·六三</NButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NButton, useMessage } from 'naive-ui'

const message = useMessage()

async function onClickAction() {
  message.info('益之用凶事，无咎。有孚中行，告公用圭。')
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
