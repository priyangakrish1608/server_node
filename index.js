import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Product from './product/Product';
// import Bankmenucollapse from './product/Bankmenucollapse';
// import Collapsableitem from './product/Collapsableitem';
// import Menubar from './product/Menubar';

import Welcomepage from './Welcomepage';
import Aboutme from './Aboutmepage';
import Resume from './Resume/Resume';
import Projects from './Resume/Project';
import Contactme from './Resume/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Welcomepage/>
    { <Aboutme/> }
    { <Resume/> }
    { <Projects/> }
    { <Contactme/> }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();