import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import AppNotes from './components/notes/AppNotes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppNotes />
  </React.StrictMode>
)
