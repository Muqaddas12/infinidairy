import Image from "next/image";
import Link from "next/link";
import { Award, BadgeCheck, Bone, Droplets, Leaf, ShieldCheck, Snowflake, Truck, Milk, ArrowRight } from "lucide-react";
import { products } from "../lib/data";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image src="/images/hero-banner.png" alt="Infinidairy 2% low-fat milk" fill priority className="heroImage" sizes="100vw" />
        <div className="heroOverlay" />
        <div className="magicAura magicAuraOne" aria-hidden="true" />
        <div className="magicAura magicAuraTwo" aria-hidden="true" />
        <div className="magicRing magicRingOne" aria-hidden="true" />
        <div className="magicRing magicRingTwo" aria-hidden="true" />
        <div className="magicParticles" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i /><i />
        </div>
        <div className="container heroContent">
          <div className="heroCopy">
            <div className="eyebrow">PURE • FRESH • NATURAL</div>
            <div className="magicBadge">
              <span className="magicDot" /> SCARLET MAGIC • SPECIAL SHOWCASE
            </div>
            <h1>Low fat.<br /><em>Full of goodness.</em></h1>
            <p>Infinidairy 2% low-fat milk brings a smooth, fresh taste to your everyday routine.</p>
            <div className="heroActions">
              <Link className="primaryBtn" href="#products">Explore products <ArrowRight size={18}/></Link>
              <Link className="ghostBtn" href="#about">Discover our story</Link>
            </div>
            <div className="heroStats">
              <div><b>2%</b><span>Low fat</span></div>
              <div><b>1L</b><span>Family pack</span></div>
              <div><b>100%</b><span>Quality focused</span></div>
            </div>
            <div className="magicFeatureStrip">
              <span>✦</span>
              <b>2% LOW FAT</b>
              <span>✦</span>
              <b>PURE FRESH TASTE</b>
              <span>✦</span>
              <b>SCARLET GLOW EDITION</b>
            </div>
          </div>
        </div>
      </section>

      <section className="trustBar">
        <div className="container trustGrid">
          <Trust icon={<Snowflake/>} title="Keep refrigerated" text="For freshness" />
          <Trust icon={<ShieldCheck/>} title="Quality assured" text="Carefully tested" />
          <Trust icon={<Leaf/>} title="Fresh & pure" text="Farm sourced" />
          <Trust icon={<Milk/>} title="Balanced nutrition" text="Everyday goodness" />
        </div>
      </section>

      <section id="about" className="section">
        <div className="container split">
          <div className="imageCard">
            <Image src="/images/product-showcase.png" alt="Infinidairy milk product showcase" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <div className="floatingBadge"><Award size={21}/> Trusted quality</div>
          </div>
          <div>
            <div className="sectionKicker">ABOUT INFINIDAIRY</div>
            <h2>Goodness that<br /><em>grows with you.</em></h2>
            <p className="lead">We make everyday milk feel simple: fresh taste, thoughtful processing and packaging designed around modern family life.</p>
            <p className="muted">From farm-inspired freshness to a convenient screw cap, every touchpoint is designed to make your daily glass of milk easier to enjoy.</p>
            <div className="miniGrid">
              <Mini icon={<Leaf/>} title="Fresh & pure" text="A clean, simple milk experience."/>
              <Mini icon={<ShieldCheck/>} title="Quality first" text="Carefully handled at every step."/>
              <Mini icon={<Droplets/>} title="Smooth taste" text="Made for everyday drinking."/>
              <Mini icon={<Milk/>} title="For everyone" text="A family-friendly everyday choice."/>
            </div>
            <Link className="textBtn" href="#quality">How we make it <ArrowRight size={17}/></Link>
          </div>
        </div>
      </section>

      <section id="products" className="section productsSection">
        <div className="container">
          <div className="sectionHead">
            <div><div className="sectionKicker">OUR PRODUCTS</div><h2>Quality in <em>every drop.</em></h2></div>
            <p>Choose the pack that fits your day, from quick single servings to family-size cartons.</p>
          </div>
          <div className="productGrid">{products.map(p => <ProductCard key={p.slug} product={p} />)}</div>
        </div>
      </section>

      <section id="nutrition" className="nutrition">
        <div className="container nutritionInner">
          <div>
            <div className="sectionKicker light">NUTRITION FACTS</div>
            <h2>Packed with<br /><em>essential nutrients.</em></h2>
            <p>Approximate values per 100 ml. Always use the final product label for the latest nutrition information.</p>
            <Link className="lightBtn" href="/nutrition">View full chart <ArrowRight size={17}/></Link>
          </div>
          <NutritionTable />
        </div>
      </section>

      <section id="quality" className="section">
        <div className="container">
          <div className="centerHead">
            <div className="sectionKicker">QUALITY & PROCESS</div>
            <h2>From farm <em>to your home.</em></h2>
            <p>Thoughtful handling, careful testing and hygienic packaging help protect the freshness you expect.</p>
          </div>
          <div className="processGrid">
            <Process n="01" icon={<Leaf/>} title="Farm sourcing" text="Milk begins with trusted dairy sourcing and responsible handling."/>
            <Process n="02" icon={<Droplets/>} title="Pasteurisation" text="Processing is designed around safety and freshness."/>
            <Process n="03" icon={<BadgeCheck/>} title="Quality testing" text="Checks are performed throughout the production process."/>
            <Process n="04" icon={<Truck/>} title="Hygienic packaging" text="Convenient packaging protects the product through distribution."/>
          </div>
          <div className="qualityBanner">
            <Image src="/images/giant-product.png" alt="Countryside dairy scene" fill sizes="100vw" />
            <div><span>PURE • FRESH • NATURAL</span><h3>Goodness in every sip.</h3><p>Built around a fresh, approachable milk experience.</p></div>
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container">
          <div className="centerHead">
            <div className="sectionKicker">WHY INFINIDAIRY</div>
            <h2>Simple goodness, <em>every day.</em></h2>
          </div>
          <div className="whyGrid">
            <Why icon={<Bone/>} title="Calcium" text="A good source of calcium for everyday nutrition."/>
            <Why icon={<ShieldCheck/>} title="Protein" text="Protein contributes to a balanced everyday diet."/>
            <Why icon={<SparkIcon/>} title="Vitamins" text="Made with a nutrition-focused product profile."/>
            <Why icon={<Snowflake/>} title="Freshness" text="Keep refrigerated and handle with care."/>
          </div>
        </div>
      </section>

      <section className="magicShowcase">
        <div className="magicGridGlow" aria-hidden="true" />
        <div className="container magicShowcaseInner">
          <div className="magicText">
            <div className="sectionKicker magicKicker">SCARLET MAGIC • CINEMATIC THEME</div>
            <h2>Milk with a <em>mystic glow.</em></h2>
            <p>
              A cinematic visual treatment inspired by deep crimson, ruby red, magenta and violet
              energy — giving the product a dramatic superhero-style showcase without changing the
              product itself.
            </p>
            <div className="magicPills">
              <span>Crimson light</span>
              <span>Magenta aura</span>
              <span>Violet energy</span>
              <span>Deep shadow</span>
            </div>
            <Link className="magicBtn" href="#products">Explore the collection <ArrowRight size={18}/></Link>
          </div>
          <div className="magicProductFrame">
            <div className="magicOrb orbA" />
            <div className="magicOrb orbB" />
            <div className="magicEnergy energyA" />
            <div className="magicEnergy energyB" />
            <div className="magicCard">
              <Image src="/images/hero-banner.png" alt="Infinidairy cinematic product showcase" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="farmSection">
        <Image src="/images/giant-product.png" alt="Infinidairy countryside lifestyle" fill sizes="100vw" />
        <div className="farmOverlay"/>
        <div className="container farmContent">
          <div className="sectionKicker light">FARM • FAMILY • FRESHNESS</div>
          <h2>From open fields<br /><em>to everyday tables.</em></h2>
          <p>A countryside-inspired brand experience that connects the product to the simple moments milk is made for.</p>
          <Link className="primaryBtn" href="/#products">Find your pack <ArrowRight size={18}/></Link>
        </div>
      </section>

      <section className="section blogSection">
        <div className="container">
          <div className="sectionHead">
            <div><div className="sectionKicker">FROM THE BLOG</div><h2>Milk, made <em>interesting.</em></h2></div>
            <Link className="textBtn" href="/blog">View all articles <ArrowRight size={17}/></Link>
          </div>
          <div className="blogGrid">
            <Blog image="/images/brand-collage.png" tag="Lifestyle" title="How to build a simple breakfast routine" slug="simple-breakfast-routine"/>
            <Blog image="/images/product-showcase.png" tag="Nutrition" title="Understanding the basics of low-fat milk" slug="understanding-low-fat-milk"/>
            <Blog image="/images/hero-banner.png" tag="Quality" title="From farm inspiration to your fridge" slug="farm-to-fridge"/>
          </div>
        </div>
      </section>

      <Newsletter />

      <section id="contact" className="section contact">
        <div className="container contactGrid">
          <div>
            <div className="sectionKicker">CONTACT</div>
            <h2>Let's talk <em>milk.</em></h2>
            <p className="lead">Questions about products, availability or partnerships? Send us a message.</p>
            <div className="contactFacts">
              <div><ShieldCheck/><span><b>Quality support</b>Product & quality questions</span></div>
              <div><Truck/><span><b>Availability</b>Ask about pack sizes and distribution</span></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function Trust({icon,title,text}) { return <div className="trustItem"><span>{icon}</span><div><b>{title}</b><small>{text}</small></div></div>; }
function Mini({icon,title,text}) { return <div className="mini"><span>{icon}</span><div><b>{title}</b><small>{text}</small></div></div>; }
function Process({n,icon,title,text}) { return <div className="process"><div className="processTop"><span>{n}</span>{icon}</div><h3>{title}</h3><p>{text}</p></div>; }
function Why({icon,title,text}) { return <div className="whyCard"><span>{icon}</span><h3>{title}</h3><p>{text}</p></div>; }
function Blog({image,tag,title,slug}) { return <article className="blogCard"><Link href={`/blog/${slug}`}><div className="blogImage"><Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw"/></div><div><span>{tag}</span><h3>{title}</h3><b>Read article →</b></div></Link></article>; }
function NutritionTable() { return <div className="nutritionTable">{[
  ["Energy","50 kcal"],["Protein","3.3 g"],["Total fat","2.0 g"],["Saturated fat","1.3 g"],["Carbohydrate","4.8 g"],["Sugar","4.8 g"],["Calcium","120 mg"],["Vitamin D","1.0 mcg"],["Vitamin A","60 mcg"],["Cholesterol","10 mg"]
].map(([k,v])=><div className="nutRow" key={k}><span>{k}</span><strong>{v}</strong></div>)}</div>; }
function SparkIcon() { return <span style={{fontSize:24}}>✦</span>; }
