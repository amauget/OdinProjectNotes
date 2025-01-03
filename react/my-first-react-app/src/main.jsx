import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Hooks.jsx'
import Button from './Button.jsx'
import Keys from './Keys.jsx'
import PackingList from './PackingList.jsx'
import RenderLoops from './RenderWithLoops.jsx'
import RenderArray from './RenderArray.jsx'
import App from './App.jsx'
import Clock from './learningUseEffect.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Convert></Convert> */}
    {/* <RenderLoops></RenderLoops> */}
    {/* <PackingList /> */}
    {/* <RenderArray></RenderArray> */}
    {/* <Keys></Keys> */}
    {/* <Button></Button> */}
    {/* <Counter /> */}
    <Clock></Clock>
  </StrictMode>,
)
