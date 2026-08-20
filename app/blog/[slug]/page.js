import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "../../../lib/data";

export function generateStaticParams() { return blogPosts.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }) { const post = getPost(params.slug); return { title: post ? `${post.title} | Infinidairy` : "Article | Infinidairy" }; }

export default function Article({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return <main className="articlePage">
    <div className="articleHero"><Image src={post.image} alt="" fill priority sizes="100vw"/><div className="heroOverlay"/><div className="container articleHeroCopy"><span>{post.category}</span><h1>{post.title}</h1></div></div>
    <article className="container articleBody"><Link className="textBtn" href="/blog">← All articles</Link><p className="articleLead">{post.excerpt}</p><p>{post.content}</p><h2>Keep it simple</h2><p>Small, consistent choices can make everyday routines easier. Use the information on the product pack and choose foods that fit your own needs and preferences.</p><Link className="primaryBtn" href="/#products">Explore Infinidairy products →</Link></article>
  </main>;
}
