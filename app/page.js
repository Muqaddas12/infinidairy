import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Facebook, Youtube, Sparkles } from "lucide-react";

export const metadata = {
  title: "Infinidairy | Coming Soon",
  description: "Infinidairy 2% low-fat milk — pure, fresh, natural. Our new dairy experience is coming soon.",
};

export default function Home() {
  return (
    <main className="comingSoon">
      <Image src="/images/hero-banner.png" alt="Infinidairy 2% low-fat milk" fill priority className="comingImage" sizes="100vw" />
      <div className="comingOverlay" />
      <div className="comingMagic one" /><div className="comingMagic two" />
      <div className="comingParticles">{Array.from({length:18}).map((_,i)=><i key={i}/>)}</div>

      <div className="container comingInner">
        <Link href="/" className="comingLogo"><span>Infinidairy</span></Link>
        <div className="comingCopy">
          <div className="comingKicker"><Sparkles size={14}/> PURE • FRESH • NATURAL</div>
          <div className="comingBadge">OUR NEW EXPERIENCE IS ARRIVING</div>
          <h1>Something<br/><em>delicious is coming.</em></h1>
          <p>Infinidairy is preparing a fresh new home for milk, nutrition, quality and everyday goodness.</p>
          <div className="comingActions">
            <Link className="primaryBtn" href="/products">Explore products <ArrowRight size={18}/></Link>
            <Link className="ghostBtn" href="/about">Discover Infinidairy</Link>
          </div>
          <div className="comingProgress"><span/><span/><span/><span/></div>
          <small>Website launch in progress • Explore the site while we prepare the full experience</small>
        </div>
        <div className="comingBottom">
          <div>2% LOW FAT • FAMILY GOODNESS • QUALITY FOCUSED</div>
          <div className="comingSocials"><a href="#contact"><Instagram/></a><a href="#contact"><Facebook/></a><a href="#contact"><Youtube/></a></div>
        </div>
      </div>
    </main>
  );
}
