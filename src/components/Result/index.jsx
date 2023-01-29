import React from "react";
import s from './style.module.css'

export default function Result({currentProducts}) {

console.log(currentProducts)
const totalCount = currentProducts.reduce((prev,{count})=>count+prev,0)
const totalPrice = currentProducts.reduce((prev,{count,price})=>count*price+prev,0)
console.log(totalPrice)
console.log(totalCount)

  return <div className={s.result}>
    <p>TOTAL COUNT: {totalCount}</p>
    <p>TOTAL PRICE: {totalPrice} $</p>
  </div>;
}
