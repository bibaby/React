import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import axios from 'axios'

axios.defaults.headers.put["Content-Type"] = "application/json"

if(process.env.NODE_ENV === 'development')

{
    const username = process.env.REACT_APP_USER
    const password = process.env.REACT_APP_PASSWORD
    axios.defaults.auth = {
        username,
        password
    }
}else{
axios.defaults.headers["X-userToken"] = window.servicenowUserToken
}
const root = document.getElementById('root');
createRoot(root).render(<App />);

 