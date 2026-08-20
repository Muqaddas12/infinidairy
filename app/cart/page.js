"use client";

import Link from "next/link";
import { useCart } from "../../components/CartProvider";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, clear } = useCart();
  const total = items.reduce((sum, p) => sum + p.price, 0);

  return <main className="innerPage"><div className="innerHero"><div className="container"><div className="sectionKicker light">YOUR CART</div><h1>Your milk.<br/><em>Your choice.</em></h1><p>Review the packs you've selected.</p></div></div><section className="section"><div className="container cartLayout"><div>{items.length === 0 ? <div className="emptyState"><h2>Your cart is empty.</h2><p>Choose a pack from our products to get started.</p><Link className="primaryBtn" href="/products">Browse products →</Link></div> : items.map((p,i)=><div className="cartItem" key={`${p.slug}-${i}`}><div><b>{p.size}</b><small>Infinidairy 2% Low Fat Milk</small></div><strong>₹{p.price}</strong><button onClick={()=>removeItem(i)}><Trash2 size={17}/></button></div>)}</div>{items.length > 0 && <aside className="cartSummary"><span>Total</span><b>₹{total}</b><button className="primaryBtn" onClick={()=>alert("Demo checkout — connect your payment gateway here.")}>Checkout →</button><button className="clearBtn" onClick={clear}>Clear cart</button></aside>}</div></section></main>;
}
