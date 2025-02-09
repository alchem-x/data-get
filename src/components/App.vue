<template>
  <div class="data-get-app-container">
    <NButton secondary class="open-button" @click="appStore.openDrawer"> ䷩ </NButton>
    <NDrawer v-model:show="appStore.drawerActive" placement="right" width="450">
      <NDrawerContent title="益之" closable>
        <DrawerBody />
      </NDrawerContent>
    </NDrawer>
  </div>
</template>

<script setup>
import { NButton, NDrawer, NDrawerContent } from 'naive-ui'
import DrawerBody from '@/components/DrawerBody.vue'
import { useAppStore } from '@/store/app.js'
import { onMounted } from 'vue'

const appStore = useAppStore()

onMounted(() => {
  if (location.hostname === 'localhost') {
    appStore.openDrawer()
  }
})
</script>

<style scoped lang="less">
.data-get-app-container {
  position: relative;
  z-index: 10;

  .open-button {
    position: fixed;
    top: 4rem;
    right: 1rem;
  }
}
</style>
