import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, fetchAsyncProducts } from "./redux/productSlice";
import { PENDING } from "./redux/Constants";


function App() {
  const dispatch=useDispatch();
  const products=useSelector((store)=>store.product)
  
  useEffect(()=>{
    console.log(dispatch)
    dispatch(fetchAsyncProducts())
 },[dispatch])
  
 
 if(products.status===PENDING){
  return <h1>loading........</h1>
 }
  return (
    <div>
      {
        products.product.map((prod,index)=>{
          return <h1 key={index} >{prod.title}</h1>
        })
      }
    </div>
  );
}

export default App;
