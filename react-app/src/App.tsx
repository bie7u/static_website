import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Products from './pages/Products';
import FAQ from './pages/FAQ';

// Import only React-specific CSS
import './css/react-overrides.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="products" element={<Products />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
