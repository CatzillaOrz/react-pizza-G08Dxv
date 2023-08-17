import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello React!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
 * StrictMode will render components twice 
 * in order to : 
 * 1. to find any bugs in components
 * 2. to check if deprecated methods has been used
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
 * react 17 would be like
 * import ReactDOM from 'react-dom';
 * React.rander(<App/>);
 */
