import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './features/route/ui/App'
import { MDXProvider } from '@mdx-js/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MDXProvider>
    <App />
    </MDXProvider>
  </StrictMode>,
)
