"use client";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";

const links = [["About","/about"],["Products","/products"],["Nutrition","/nutrition"],["Quality","/quality"],["Why Us","/why-infinidairy"],["Blog","/blog"],["Contact","/contact"]];

export default function Header(){
 const [open,setOpen]=useState(false); const {count}=useCart();
 return <header className="header">
  <div className="container nav">
   <Link href="/" className="logo" onClick={()=>setOpen(false)}><span>Infinidairy</span></Link>
   <nav className={`navLinks ${open?"open":""}`}>{links.map(([a,h])=><Link key={a} href={h} onClick={()=>setOpen(false)}>{a}</Link>)}<Link className="navBuy" href="/products" onClick={()=>setOpen(false)}>Shop Milk</Link></nav>
   <Link className="cartButton" href="/cart"><ShoppingCart size={20}/>{count>0&&<b>{count}</b>}</Link>
   <button className="menuButton" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
  </div>
 </header>
}
