import React, { useState } from "react";
import './index.css';

import { Route, Switch } from 'wouter';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import RegisterPage from './RegisterPage';
import FlashMessage from "./FlashMessage";

function App() {

  const [isNavbarShowing, setNavbarShowing] = useState(false);
  // Toggle the collapse state
  const toggleNavbar = () => {
    console.log("Toggling navbar. Current state:", isNavbarShowing);
    setNavbarShowing(!isNavbarShowing);
    console.log("Navbar state after toggle:", !isNavbarShowing);
  };

  return (
    <>

      <Navbar />
      <FlashMessage/>

      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
