import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const drawerActive = ref(false)

  function openDrawer() {
    drawerActive.value = true
  }

  return {
    drawerActive,
    openDrawer,
  }
})
