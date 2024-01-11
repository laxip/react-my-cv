import React from 'react';
import ReactDOM from 'react-dom/client';

import CvContext from './cv/ctx/cvContext.js';
import description from './description.js';
import Link from './link/index.jsx';

const App = () => {
  return (
    <CvContext.Provider value={description}>
      <Link />
    </CvContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
