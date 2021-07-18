import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route path="/" component={Home} />

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
