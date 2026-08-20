import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../lib/data";

export const metadata = { title: "Blog | Infinidairy" };

export default function BlogPage() {
  return (
    <main className="innerPage">
      <div className="innerHero">
        <div className="container"><div className="sectionKicker light">INFINIDAIRY JOURNAL</div><h1>Good food.<br/><em>Good reading.</em></h1><p>Stories about milk, nutrition, quality and everyday family routines.</p></div>
      </div>
      <section className="section"><div className="container"><div className="blogGrid">{blogPosts.map(p => <article className="blogCard" key={p.slug}><Link href={`/blog/${p.slug}`}><div className="blogImage"><Image src={p.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw"/></div><div><span>{p.category}</span><h3>{p.title}</h3><p>{p.excerpt}</p><b>Read article →</b></div></Link></article>)}</div></div></section>
    </main>
  );
}
