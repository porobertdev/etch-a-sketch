import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ref: https://stackoverflow.com/a/66358693
createRoot(document.getElementById('root') as HTMLElement).render(
    // <StrictMode>
        <App />
    // </StrictMode>
);
