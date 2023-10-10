import React from 'react'
import ReactDOM from 'react-dom/client'
import '../public/styles/WelcomePage.css'
import '../public/styles/canvas.css'
import {IntegralesApp} from "./IntegralesApp";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <IntegralesApp/>
    </React.StrictMode>,
)
