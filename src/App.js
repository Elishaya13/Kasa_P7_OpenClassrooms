import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import PublicRouter from './routes/PublicRouter';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>

    </div>
  );
}

export default App;
