"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "./CartProvider";

export default function AddToCart({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function click() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return <button className="primaryBtn addBtn" onClick={click}>{added ? <><Check size={18}/> Added</> : <><ShoppingCart size={18}/> Add to cart</>}</button>;
}
