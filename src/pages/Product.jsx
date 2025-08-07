import React from 'react'
import ProductPage from '../components/ProductPage';

function Product({productdetails}) {
    console.log(productdetails);
  return (
    <div>
     <ProductPage productdetails={productdetails}/>
    </div>
  )
}

export default Product
