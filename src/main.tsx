import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NavigationProvider } from './context/navigation.tsx'


createRoot(document.getElementById('root')!).render(
  <NavigationProvider>
    <App />
  </NavigationProvider>,
)
