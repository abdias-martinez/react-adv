import React from 'react';
import App from './App';
import './index.css';

import { createRoot } from 'react-dom/client';

const container: any = document.getElementById('root') ;
const root = createRoot(container);
root.render(<App />);

// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );