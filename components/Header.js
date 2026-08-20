"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";

const links = [
  ["About", "/#about"],
  ["Products", "/#products"],
  ["Nutrition", "/#nutrition"],
  ["Quality", "/#quality"],
  ["Blog", "/blog"],
  ["Contact", "/#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="header tw-backdrop-blur-sm tw-bg-white/95">
      <div className="container nav">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span>Infinidairy</span>
        </Link>

        <nav className={`navLinks ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="navBuy" href="/#products" onClick={() => setOpen(false)}>
            Buy Now <ShoppingCart size={16} />
          </Link>
        </nav>

        <Link className="cartButton" href="/cart" aria-label="Shopping cart">
          <ShoppingCart size={20} />
          {count > 0 && <b>{count}</b>}
        </Link>

        <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
