import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';

const App: React.FC = () => {
  sessionStorage.setItem('offset', '0');
  return <Routes />;
};

export default App;
