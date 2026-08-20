"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="productCard">
      <Link href={`/products/${product.slug}`} className="productImage">
        <Image src={product.image} alt={product.title} fill sizes="(max-width: 700px) 100vw, 25vw" />
        <span>2% LOW FAT</span>
      </Link>
      <div className="productInfo">
        <div className="productTitle">
          <h3>{product.size}</h3>
          <strong>2% LF</strong>
        </div>
        <p>{product.short}</p>
        <div className="productBottom">
          <span className="price">₹{product.price}</span>
          <div className="productActions">
            <Link href={`/products/${product.slug}`} className="outlineBtn">Details</Link>
            <button className="roundBtn" onClick={() => addItem(product)} aria-label={`Add ${product.size} to cart`}>
              <ShoppingCart size={17} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
