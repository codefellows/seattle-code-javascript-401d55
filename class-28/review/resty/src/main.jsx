import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import.meta.env.VITE_<variable-name>
// +----------------+
// |      App(class)|
// |----------------|
// | data           | props
// | requestParams  |
// |----------------|
// | callApi()      | methods
// +----------------+
//      /  |  \  \
//     /   |   \  \
//    /    |    \  \
// +-------+ +-------+ +-------+          +-------+
// | Header| | Footer| | Form  |          |Results|
// +-------+ +-------+ +-------+________  +-------+
//                     | handleSubmit() | (method)
//                     +----------------+


