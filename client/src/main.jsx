import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
import App1 from './App1.jsx'
import {CssBaseline} from '@mui/material' ;

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
   <CssBaseline /> 
   <App1 />
    {/* <App /> */}
  </>
    //  {/* // This will apply Material-UI's baseline styles */}
  
   
  // </StrictMode>,
)
