import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "../../../components/AddToCart";
import { getProduct, products } from "../../../lib/data";

export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  return { title: product ? `${product.size} | Infinidairy` : "Product | Infinidairy" };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const productSchema={"@context":"https://schema.org","@type":"Product","name":product.title,"description":product.description,"image":[`https://www.infinidairy.com${product.image}`],"brand":{"@type":"Brand","name":"Infinidairy"},"offers":{"@type":"Offer","priceCurrency":"INR","price":String(product.price),"availability":"https://schema.org/InStock","url":`https://www.infinidairy.com/products/${product.slug}`}};
  return (
    <main className="detailPage"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(productSchema)}}/>
      <div className="container breadcrumbs"><Link href="/">Home</Link> / <Link href="/products">Products</Link> / {product.size}</div>
      <section className="container detailGrid">
        <div className="detailImage"><Image src={product.image} alt={product.title} fill priority sizes="(max-width: 800px) 100vw, 50vw"/></div>
        <div className="detailCopy">
          <div className="sectionKicker">INFINIDAIRY • 2% LOW FAT</div>
          <h1>{product.size}<br/><em>Low Fat Milk</em></h1>
          <p className="detailLead">{product.description}</p>
          <div className="detailPrice">₹{product.price}</div>
          <AddToCart product={product}/>
          <div className="detailBenefits">
            <span>✓ Keep refrigerated</span><span>✓ Quality focused</span><span>✓ Everyday convenience</span>
          </div>
        </div>
      </section>
      <section className="section detailNutrition">
        <div className="container">
          <div className="sectionKicker">NUTRITION</div><h2>What is inside <em>every 100 ml?</em></h2>
          <div className="detailNutGrid">
            <Metric label="Energy" value={product.calories}/><Metric label="Protein" value={product.protein}/><Metric label="Total fat" value={product.fat}/><Metric label="Calcium" value={product.calcium}/>
          </div>
        </div>
      </section>
    </main>
  );
}
function Metric({label,value}) { return <div className="metric"><small>{label}</small><b>{value}</b></div>; }
