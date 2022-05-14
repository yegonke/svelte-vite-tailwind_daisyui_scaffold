import App from './App.svelte'

// import custom elements for vite preprocessing
import './main.css'

const app = new App({
  target: document.getElementById('app')
})

export default app
