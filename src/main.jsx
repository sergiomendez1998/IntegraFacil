import React from 'react'
import ReactDOM from 'react-dom/client'
import '../public/styles/WelcomePage.css'
import '../public/styles/canvas.css'
import {CanvasApp} from "./CanvasApp.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <CanvasApp/>

    </React.StrictMode>,
)
