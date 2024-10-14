import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Ensure this line is present to load Tailwind CSS
import { registerLicense } from '@syncfusion/ej2-base';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-navigations/styles/material.css';

// Register your Syncfusion license key here
registerLicense('YOUR_LICENSE_KEY');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
