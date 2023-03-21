import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './headder';
import Content from './content';
console.log(React.version)

const root = ReactDOM.createRoot(document.getElementById('headder'));
root.render(
  <React.StrictMode>
    <Header />    
  </React.StrictMode>
 
);
const cont = ReactDOM.createRoot(document.getElementById('content'));
cont.render(
  <React.StrictMode>
    <Content />    
  </React.StrictMode>
 
);



