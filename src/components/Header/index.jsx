import React from "react";
import s from "./style.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={s.title}>Cart</h1>
      <div className={s.info}>
        <div className={s.name}>PRODUCT</div>
        <div className={s.price}>PRISE PER ITEM </div>
        <div className={s.count}>COUNT</div>
        <div className={s.price}>PRICE</div>
      </div>
    </div>
  );
}
