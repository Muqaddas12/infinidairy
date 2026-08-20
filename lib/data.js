export const products = [
  {
    slug: "200ml",
    size: "200 ml",
    title: "Infinidairy 2% Low Fat Milk — 200 ml",
    short: "A convenient single-serving pack for school, travel and quick refreshment.",
    description: "The compact Infinidairy 2% Low Fat Milk pack is designed for everyday convenience while keeping the same clean, fresh milk experience.",
    image: "/images/product-showcase.png",
    price: 35,
    calories: "50 kcal",
    protein: "3.3 g",
    fat: "2.0 g",
    calcium: "120 mg",
  },
  {
    slug: "500ml",
    size: "500 ml",
    title: "Infinidairy 2% Low Fat Milk — 500 ml",
    short: "A practical everyday pack for individual use and smaller households.",
    description: "A balanced pack size for breakfast, tea, coffee, smoothies and everyday recipes.",
    image: "/images/brand-collage.png",
    price: 55,
    calories: "50 kcal",
    protein: "3.3 g",
    fat: "2.0 g",
    calcium: "120 mg",
  },
  {
    slug: "1-litre",
    size: "1 Litre",
    title: "Infinidairy 2% Low Fat Milk — 1 Litre",
    short: "The family-friendly everyday pack for daily nutrition.",
    description: "A versatile 1 litre carton for family breakfasts, drinks and cooking, with Infinidairy's 2% low-fat profile.",
    image: "/images/hero-banner.png",
    price: 78,
    calories: "50 kcal",
    protein: "3.3 g",
    fat: "2.0 g",
    calcium: "120 mg",
  },
  {
    slug: "2-litre",
    size: "2 Litre",
    title: "Infinidairy 2% Low Fat Milk — 2 Litre",
    short: "A bigger pack for families and everyday kitchen use.",
    description: "More milk for bigger households, breakfast tables and everyday recipes, with the same fresh brand experience.",
    image: "/images/giant-product.png",
    price: 145,
    calories: "50 kcal",
    protein: "3.3 g",
    fat: "2.0 g",
    calcium: "120 mg",
  },
];

export const blogPosts = [
  {
    slug: "simple-breakfast-routine",
    category: "Lifestyle",
    title: "How to build a simple breakfast routine",
    excerpt: "A practical look at making mornings easier with simple, balanced choices.",
    image: "/images/brand-collage.png",
    content: "A good breakfast routine does not need to be complicated. Keep a few familiar staples ready, plan ahead, and choose foods that fit your family's routine. Milk can be an easy addition to cereal, oats, smoothies, tea, coffee or a simple glass alongside breakfast.",
  },
  {
    slug: "understanding-low-fat-milk",
    category: "Nutrition",
    title: "Understanding the basics of low-fat milk",
    excerpt: "What the 2% label means and how it fits into everyday meals.",
    image: "/images/product-showcase.png",
    content: "Low-fat milk contains less milk fat than whole milk. Infinidairy's 2% positioning is designed for people who want a familiar milk taste with a lower-fat profile. Always use the nutrition panel on the pack as the final source for product-specific information.",
  },
  {
    slug: "farm-to-fridge",
    category: "Quality",
    title: "From farm inspiration to your fridge",
    excerpt: "A closer look at the journey from sourcing to convenient packaging.",
    image: "/images/hero-banner.png",
    content: "Milk quality begins with careful sourcing and continues through processing, testing, hygienic packaging and responsible handling. A consistent process helps preserve the freshness and convenience customers expect from a modern dairy product.",
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function getPost(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
