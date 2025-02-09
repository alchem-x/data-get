import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import AppWithProvider from '@/components/AppWithProvider.vue'

const app = createApp({
  render() {
    return h(AppWithProvider)
  },
})
app.use(createPinia())
const divRef = document.createElement('div')
document.body.appendChild(divRef)
app.mount(divRef)
