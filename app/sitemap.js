import { products, blogPosts } from "../lib/data";
export default function sitemap(){
 const base="https://www.infinidairy.com";
 const pages=["","about","products","nutrition","quality","why-infinidairy","blog","faq","contact","privacy","terms"].map(p=>({url:`${base}/${p}`,lastModified:new Date(),changeFrequency:"weekly",priority:p===""?1:0.8}));
 const productUrls=products.map(p=>({url:`${base}/products/${p.slug}`,lastModified:new Date(),changeFrequency:"monthly",priority:.7}));
 const blogUrls=blogPosts.map(p=>({url:`${base}/blog/${p.slug}`,lastModified:new Date(),changeFrequency:"monthly",priority:.6}));
 return [...pages,...productUrls,...blogUrls];
}
