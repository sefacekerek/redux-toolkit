import React from "react";
import {BsFillBasketFill} from "react-icons/bs"
import { useSelector } from "react-redux";
import { store } from "../store";

export default function () {
    const {quantity} = useSelector((store) => store.cart)
  return (
    <nav>
      <div className="nav-container">
        <h3>My Courses</h3>
        <div>
          <p>{quantity}</p>
          <BsFillBasketFill className="icon"></BsFillBasketFill>
        </div>
      </div>
    </nav>
  );
}
