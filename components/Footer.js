import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="footerBrand">
          <div className="logo"><span>Infinidairy</span></div>
          <p>Pure. Fresh. Natural.<br />Goodness in every drop.</p>
          <div className="socials">
            <a href="#contact" aria-label="Facebook"><Facebook /></a>
            <a href="#contact" aria-label="Instagram"><Instagram /></a>
            <a href="#contact" aria-label="YouTube"><Youtube /></a>
          </div>
        </div>
        <FooterColumn title="Explore" links={[
          ["Home", "/"], ["About", "/#about"], ["Products", "/#products"], ["Nutrition", "/#nutrition"], ["Quality", "/#quality"]
        ]} />
        <FooterColumn title="Support" links={[
          ["Blog", "/blog"], ["Contact", "/#contact"], ["FAQ", "/#contact"], ["Privacy", "/privacy"], ["Terms", "/terms"]
        ]} />
        <div>
          <h4>Get in touch</h4>
          <p className="footerContact">Daily dairy support<br />hello@infinidairy.example<br />+91 98765 42190</p>
          <Link className="footerBuy" href="/#products">Shop products →</Link>
        </div>
      </div>
      <div className="footerBottom">
        <div className="container">
          <span>© 2026 Infinidairy. All rights reserved.</span>
          <span>Pure. Fresh. Natural.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}
      </ul>
    </div>
  );
}
