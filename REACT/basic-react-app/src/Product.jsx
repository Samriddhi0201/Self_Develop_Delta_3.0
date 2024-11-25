import React from 'react';
import "./Product.css"
import Price from './Price';

function Product({title, idx}) {
  //console.log("abc", features);

 // const list = features ? features.map((feature, index) => <li key={index}>{feature}</li>) : <li>No features available</li>;
//  let isDiscount =price >30000;
//  let styles = {backgroundColor : isDiscount ?"pink" : ""}
let oldPrices = ["12,495" , "11,900" , "1,599" , "599"];
let newPrices = ["8,999" , "9,199", "899" , "278"];
let description = [["8,000 DPI" , "5 Programmable buttons"] , ["Intuitive surface", "Designe For Ipad Pro"] , ["Designed for Ipad Pro"  , "Intuitive Touch Surface" ],["Wireless Mouse 2.4GHz", "Optical Orientation"]]
  return (
    // <div className='Product' style= {styles}>
    //   <h3>{title}</h3>
    //   <h5>{price}</h5>
    //   { isDiscount && <p>" Discount of 5%"</p>}
    //   {/* <ul>{list}</ul> */}
    // </div>


    // Activity start

    <div className='Product'>
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
     <Price oldPrice= {oldPrices[idx]} newPrice = {newPrices[idx]}/>
    </div>
  );
}

export default Product;