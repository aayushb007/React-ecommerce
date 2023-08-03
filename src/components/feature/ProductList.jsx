import React,{ useEffect, useState , useContext}  from 'react'
import ProductContext from '../../context/ProductContext'
import ProductItem from './ProductItem';

function ProductList() {
  const context = useContext(ProductContext);
  const { products, getProduct} = context;
  useEffect(() => {

    getProduct();
  },[]);
console.log(products.length);

  return (
    <>

 <div class="container ">
    <h2 className="text">
    <i class="fa fa-th-large" aria-hidden="true">  </i> Trending Products
    </h2>
 
    <div className="row">
    {products.map(product => (
      <ProductItem key={product._id} id={product._id}   product={product} />
    ))}
     </div>
    
  </div>


    </>
  )
}

export default ProductList