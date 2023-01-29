import React from "react";
import s from "./style.module.css";

export default function Card({ title, price, model, count, img,deleteProduct,id, changeCount}) {
  return (
    <div className={s.container}>
      <img className={s.pict} src={img} alt="foto" />
      <div className={s.info}>
        <h3>{title}</h3>
        <h4>{model} </h4>
      </div>
      <div className={s.price}>{price} $</div>
      <div className={s.count}>
        <div>{count}</div>
        <div>
          <button className={s.countButton} onClick = {()=>count>1?changeCount(id,1):deleteProduct(id)}>+</button>
          <button className={s.countButton} onClick = {()=>count>1?changeCount(id,-1):deleteProduct(id)}>-</button>
        </div>
      </div>
      <div className={s.countOfOneType}>
        {price*count} $
      </div>
      <div className={s.delEl}>
        <button onClick={()=>deleteProduct(id)} className={s.delButton}>×</button>
      </div>
    </div>
  );
}
