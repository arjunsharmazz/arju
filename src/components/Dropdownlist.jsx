
import React, { useContext, useState } from "react";
import styles from "./css/Dropdownlist.module.css";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import DataContext, { Mencontext, Under1, Under2, Under3, Under4, Under5, Womencontext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
const Dropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={styles.dropdown} onMouseLeave={() => setOpen(false)}>
      <button className={styles.optionButton} onClick={() => setOpen(!open)}>
        {label} <FaChevronDown className={styles.icon} />
      </button>
      {open && <div className={styles.dropdownMenu}>{children}</div>}
    </div>
  );
};

const Dropdownlist = ({ productdata, setrproductdata }) => {

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
    setrproductdata(Men);
    navigate("/productdetails");
  }
  const women=() => {
    setrproductdata(Women);
    navigate("/productdetails");
  }
  const u1=() => {
    setrproductdata(under1);
    navigate("/productdetails");
  }
  const u2=() => {
    setrproductdata(under2);
    navigate("/productdetails");
  }
  const u3=() => {
    setrproductdata(under3);
    navigate("/productdetails");
  }
  const u4=() => {
    setrproductdata(under4);
    navigate("/productdetails");
  }
  const u5=() => {
    setrproductdata(under5);
    navigate("/productdetails");
  }
  const electronics=() => {
    setrproductdata(laptops);
    navigate("/productdetails");
  }
  return (
    <div className={styles.container}>
      {/* <button className={styles.mainButton}>
        Shop by Category <FaChevronDown className={styles.icon} />
      </button> */}

      <Dropdown label="Shop by Category">
        <div className={styles.dropdownItem} onClick={men} >Men</div>
        <div className={styles.dropdownItem} onClick={women}>Women</div>
        <div className={styles.dropdownItem} onClick={electronics}>Electronics</div>
      </Dropdown>
      <Dropdown label="Men">
        <div className={styles.dropdownItem} onClick={men}>Shirts</div>
        <div className={styles.dropdownItem} onClick={men}>Pants</div>
        <div className={styles.dropdownItem} onClick={men}>Shoes</div>
      </Dropdown>

      <Dropdown label="Women">
        <div className={styles.dropdownItem} onClick={women}>Dresses</div>
        <div className={styles.dropdownItem} onClick={women}>Tops</div>
        <div className={styles.dropdownItem} onClick={women}>Accessories</div>
      </Dropdown>

      <Dropdown label="Shop by Price">
        <div className={styles.dropdownItem} onClick={u1}>Under 1000</div>
        <div className={styles.dropdownItem} onClick={u2}>Under 5000</div>
        <div className={styles.dropdownItem} onClick={u3}>Under 10000</div>
        <div className={styles.dropdownItem} onClick={u4}>Under 20000</div>
        <div className={styles.dropdownItem} onClick={u5}>20000 +</div>
      </Dropdown>

      <Dropdown label="New Arrivals">
        <div className={styles.dropdownItem}  onClick={u5}>This Week</div>
        <div className={styles.dropdownItem}      onClick={u5}  >This Month</div>
      </Dropdown>

      <Dropdown label="Deals">
        <div className={styles.dropdownItem} onClick={women}>Clearance</div>
        <div className={styles.dropdownItem}onClick={women} >Buy 1 Get 1</div>
      </Dropdown>

      <div className={styles.searchBox}>
        <FaSearch className={styles.searchIcon} />
        <span>Search</span>
      </div>
    </div>
  );
};

export default Dropdownlist;
