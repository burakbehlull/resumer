import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/index'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
