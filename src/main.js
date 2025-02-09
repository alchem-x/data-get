import { createApp, h } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

function startApp() {
  const app = createApp({
    render() {
      return h(App)
    },
  })
  app.use(createPinia())
  const divRef = document.createElement('div')
  document.body.appendChild(divRef)
  app.mount(divRef)
}

startApp()
