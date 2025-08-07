// context/DataProvider.js
import React from "react";
import DataContext from "./DataContext";
import {Mencontext, Womencontext, Under1, Under2, Under3, Under4, Under5} from "./DataContext";

//dataa h y
import laptopData from "../dummydata/lapptopdata.js";
import fashionData from "../dummydata/fashionData.js";
import womensFashionData from "../dummydata/womensFashionData.js";
import under1000MixedData from "../dummydata/under1000MixedData.js";
import under5000MixedData from "../dummydata/under5000MixedData.js";
import under10000MixedData from "../dummydata/under10000MixedData.js";
import under20000MixedData from "../dummydata/under20000MixedData.js";
import above20000MixedData from "../dummydata/above20000MixedData.js";

//men provider
export const MenProvider = ({ children }) => {
  return (
      <Mencontext.Provider value={{ data2: fashionData }}>
      {children}
    </Mencontext.Provider>
  );
};
//women provider
export const WomenProvider = ({ children }) => {
  return (
      <Womencontext.Provider value={{ data3: womensFashionData }}>
      {children}
    </Womencontext.Provider>
  );
};
//under1000MixedData
export const Under1000 = ({ children }) => {
  return (
      <Under1.Provider value={{ data4: under1000MixedData }}>
      {children}
    </Under1.Provider>
  );
};
//under5000MixedData
export const Under5000 = ({ children }) => {
  return (
      <Under2.Provider value={{ data5: under5000MixedData }}>
      {children}
    </Under2.Provider>
  );
};
//under10000MixedData
export const Under10000 = ({ children }) => {
  return (
      <Under3.Provider value={{ data6: under10000MixedData }}>
      {children}
    </Under3.Provider>
  );
};
//under10000MixedData
export const Under20000 = ({ children }) => {
  return (
      <Under4.Provider value={{ data7: under20000MixedData }}>
      {children}
    </Under4.Provider>
  );
};
//above20000MixedData
export const Under20000plus = ({ children }) => {
  return (
      <Under5.Provider value={{ data8: above20000MixedData }}>
      {children}
    </Under5.Provider>
  );
};





const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ data: laptopData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
