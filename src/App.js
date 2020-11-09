import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';


function App() {
  return (
    <div>
      <Router>
        <Hero/>
        <Navbar/>
        <Route exact path = {["/","/about"]} component = {About} />
        <Route exact path = "/portfolio" component = {Portfolio} />
        <Footer/>
      </Router>
    </div>
  )
}

export default App;

