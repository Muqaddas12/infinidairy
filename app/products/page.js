import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/data";

export const metadata = { title: "Products | Infinidairy" };

export default function ProductsPage() {
  return (
    <main className="innerPage">
      <div className="innerHero">
        <div className="container"><div className="sectionKicker light">OUR PRODUCTS</div><h1>Find your <em>perfect pack.</em></h1><p>Explore Infinidairy 2% low-fat milk in convenient pack sizes.</p></div>
      </div>
      <section className="section productsSection">
        <div className="container"><div className="productGrid">{products.map(p => <ProductCard key={p.slug} product={p}/>)}</div></div>
      </section>
    </main>
  );
}
