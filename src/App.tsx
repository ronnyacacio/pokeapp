import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  sessionStorage.setItem('offset', '0');
  return <h1>Hello World</h1>;
};

export default App;
