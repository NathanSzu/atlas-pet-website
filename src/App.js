import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ShopInStore from "./pages/ShopInStore";
import ShopByCategory from "./pages/ShopByCategory";
import ClientContextProvider from './utils/ClientContext';
import User from './pages/User'
import SecuredRoute from './pages/SecuredRoute'
import { AuthProvider } from './utils/AuthContext';
import { Helmet } from 'react-helmet'


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <ClientContextProvider>
            <Navbar />
            <Route exact path="/" render={() => <Home Helmet={Helmet} />} />
            <Route exact path="/Contact" render={() => <Contact Helmet={Helmet} />} />
            <Route exact path="/Shop-Local" render={() => <ShopInStore Helmet={Helmet} />} />
            <Route exact path="/Careers" render={() => <Careers Helmet={Helmet} />} />
            <Route exact path="/Shop-Category" render={() => <ShopByCategory Helmet={Helmet} />} />
            <SecuredRoute exact path="/User-Page" render={() => <User Helmet={Helmet} />}/>
          </ClientContextProvider>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
