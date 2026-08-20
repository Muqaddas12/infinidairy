import "./globals.css";
import { CartProvider } from "../components/CartProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
 title:{default:"Infinidairy | Pure. Fresh. Natural.",template:"%s | Infinidairy"},
 description:"Infinidairy 2% low-fat milk — pure, fresh, natural milk for everyday family goodness.",
 keywords:["Infinidairy","2% low fat milk","low fat milk","milk","dairy","fresh milk","family milk","milk nutrition"],
 metadataBase:new URL("https://www.infinidairy.com"),
 alternates:{canonical:"/"},
 openGraph:{type:"website",siteName:"Infinidairy",title:"Infinidairy | Pure. Fresh. Natural.",description:"Discover Infinidairy 2% low-fat milk.",images:["/images/hero-banner.png"]},
 twitter:{card:"summary_large_image",title:"Infinidairy | Pure. Fresh. Natural.",description:"Discover Infinidairy 2% low-fat milk.",images:["/images/hero-banner.png"]},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":"-1","max-video-preview":"-1"}},
};
export default function RootLayout({children}){
 const schema={"@context":"https://schema.org","@type":"Organization","name":"Infinidairy","url":"https://www.infinidairy.com","logo":"https://www.infinidairy.com/images/product-showcase.png","description":"Infinidairy 2% low-fat milk brand."};
 return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><CartProvider><Header/>{children}<Footer/></CartProvider></body></html>;
}
