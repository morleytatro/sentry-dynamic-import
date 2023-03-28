import { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const appVar = 'App';
const App = lazy(() => import(`./nested/${appVar}.tsx`));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense>
      <App />
    </Suspense>
  </StrictMode>,
)
