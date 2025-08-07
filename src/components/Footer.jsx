import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './css/Footer.module.css';
import DataContext, { Mencontext, Under1, Under2, Under3, Under4, Under5, Womencontext } from '../context/DataContext';

const Footer = ({setrprocxductdata,setproductdetails}) => {
  const navigate = useNavigate();
  //electronics
    const { data } = useContext(DataContext);
  const laptops = data[0].products;
  //men
  const { data2 } = useContext(Mencontext);
    const Men= data2[0].products;
  //   //women
  const { data3} = useContext(Womencontext);
    const Women= data3[0].products;
  //   console.log(data3[0].products);
    
  //   //
  const { data4 } = useContext(Under1);
    const under1= data4[0].products;
    //
  const { data5 } = useContext(Under2);
    const under2= data5[0].products;
    //
  const { data6 } = useContext(Under3);
    const under3= data6[0].products;
    //
  const { data7 } = useContext(Under4);
    const under4= data7[0].products;
    //
  const { data8 } = useContext(Under5);
    const under5= data8[0].products;
    //


  const men=() => {
    console.log('typeof setrproductdata:', typeof setrproductdata);
    setrprocxductdata(Men);
    navigate("/productdetails");
  }
  const women=(a) => {
    setrprocxductdata(a);
    navigate("/productdetails");
  }
  const u1=() => {
    setrprocxductdata(under1);
    navigate("/productdetails");
  }
  const u2=() => {
    setrprocxductdata(under2);
    navigate("/productdetails");
  }
  const u3=() => {
    setrprocxductdata(under3);
    navigate("/productdetails");
  }
  const u4=() => {
    setrprocxductdata(under4);
    navigate("/productdetails");
  }
  const u5=() => {
    setrprocxductdata(under5);
    navigate("/productdetails");
  }
  const electronics=() => {
    setrprocxductdata(laptops);
    navigate("/productdetails");
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.logoSection}>
          <h1 className={styles.logo}>LOGO</h1>
          <p>Your trusted online store for quality products, great deals, and fast, reliable delivery.</p>
        </div>

        <div className={styles.linkGroup}>
          <h4>Account</h4>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>

        <div className={styles.linkGroup}>
          <h4>Services</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/termandcondition">Terms & Conditions</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/refund">Refund & Return Policy</Link></li>
            <li><Link to="/pagenotfound">pagenotfound</Link></li>
            <li><Link to="/pleasewait">pleasewait</Link></li>
          </ul>
        </div>

        <div className={styles.linkGroup}>
          <h4>Shop</h4>
         <ul>
  <li className={styles.linkItem} onClick={() => women(Women)}>Women</li>
  <li className={styles.linkItem} onClick={men}>Men</li>
  <li className={styles.linkItem} onClick={electronics}>Electronics</li>
  <li className={styles.linkItem} onClick={u5}>New Arrivals</li>
  <li className={styles.linkItem} onClick={u3}>Best Sellers</li>
  <li className={styles.linkItem} onClick={u1}>Sale</li>
</ul>

        </div>
      </div>

      <div className={styles.bottomNote}>
        © 2025 Name All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
