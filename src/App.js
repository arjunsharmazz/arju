import './App.css';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Cart from './pages/Cart.jsx';
import TermCon from './pages/TermCon.jsx';
import Faq from './pages/Faq.jsx';
import Privacyp from './pages/Privacyp.jsx';
import ReturnRefund from './pages/ReturnRefund.jsx';
import Contact from './pages/Contact.jsx';
import Pleasewait from './pages/Pleasewait.jsx';
import Pagenotfound from './pages/Pagenotfound.jsx';
import { useEffect, useState } from 'react';
import Productdetails from './pages/Productdetails.jsx';
import Product from './pages/Product.jsx';
import Checkout from './pages/Checkout.jsx';
import OrderComplete from './pages/OrderComplete.jsx';
import ScrollToTop from './pages/ScrollToTop.jsx';
import Services from './pages/Services.jsx';

function App() {
  const [productdata, setrproductdata] = useState([]);
  const [productdetails, setproductdetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("yaha s data fetch hoga ");
  }, []);

  if (loading) {
    return (
      <div className="loading-page">
        <Pleasewait />
        {setTimeout(() => {
        setLoading(false);
        }, 1000)
        }
      </div>
    );
  }
  return (
    <div className="App">
        <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home productdata={productdata} setrproductdata={setrproductdata} setproductdetails={setproductdetails}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/termandcondition" element={<TermCon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacyp" element={<Privacyp />} />
        <Route path="/refund" element={<ReturnRefund />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pagenotfound" element={<Pagenotfound />} />
        <Route path="/pleasewait" element={<Pleasewait />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ordercomplete" element={<OrderComplete />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product productdetails={productdetails} />} />
        <Route path="/productdetails" element={<Productdetails productdata={productdata} setproductdetails={setproductdetails} />} />
      </Routes>
      <Footer productdata={productdata} setrprocxductdata={setrproductdata} />
    </div>
  );
}

export default App;
