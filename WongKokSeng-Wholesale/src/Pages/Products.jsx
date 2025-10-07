import React from 'react'
import cabbageImg from '../assets/cabbage.jpg'

const productsName =["Cabbage", "Cabbage", "Cabbage"];
const productPrice = [10.99, 19.99, 5.49];
const productSize = ["500g", "1kg", "250g"];
const imageUrl = [
  cabbageImg,
  cabbageImg,
  cabbageImg
];



function Products() {
  return (
    
    <div>
      <h1>Our Products</h1>
      <ul>
        {productsName.map((name, index) => (
          <li key={index}>
            <img src={imageUrl[index]} alt={name} />
            <div>{name} - ${productPrice[index].toFixed(2)} - {productSize[index]}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
