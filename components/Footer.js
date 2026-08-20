import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
export default function Footer(){return <footer className="footer"><div className="container footerGrid">
 <div className="footerBrand"><div className="logo"><span>Infinidairy</span></div><p>Pure. Fresh. Natural.<br/>Goodness in every drop.</p><div className="socials"><a href="/contact"><Facebook/></a><a href="/contact"><Instagram/></a><a href="/contact"><Youtube/></a></div></div>
 <Col title="Company" links={[["About","/about"],["Quality","/quality"],["Why Infinidairy","/why-infinidairy"],["FAQ","/faq"]]}/>
 <Col title="Explore" links={[["Products","/products"],["Nutrition","/nutrition"],["Blog","/blog"],["Contact","/contact"]]}/>
 <Col title="Legal" links={[["Privacy","/privacy"],["Terms","/terms"],["Sitemap","/sitemap.xml"]]}/>
 </div><div className="footerBottom"><div className="container"><span>© 2026 Infinidairy. All rights reserved.</span><span>Pure • Fresh • Natural</span></div></div></footer>}
function Col({title,links}){return <div><h4>{title}</h4><ul>{links.map(([a,h])=><li key={a}><Link href={h}>{a}</Link></li>)}</ul></div>}
