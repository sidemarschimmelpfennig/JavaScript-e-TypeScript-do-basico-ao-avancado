import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header';
import RoutesMenu from './routes';
import GlobalStyle from './styles/GlobalStyle';
// import history from './services/history'

function App() {
  return (
    <Router>
       <Header />
       <RoutesMenu />
       <GlobalStyle/>
    </Router>
  );
}

export default App;
