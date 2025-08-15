import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './features/route/ui/App'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './features/doc/ui/CodeBlock'

const components = {
  pre: (props: any) => <div {...props} />,
  code: (props: any) => {
    const { children, className } = props;
    
    // Si c'est un bloc de code (avec className)
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>;
    }
    
    // Si c'est du code inline
    return (
      <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded-md text-[14px] font-mono border border-slate-200">
        {children}
      </code>
    );
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MDXProvider components={components}>
    <App />
    </MDXProvider>
  </StrictMode>,
)
