export const products = [
  { slug:"200ml", size:"200 ml", title:"Infinidairy 2% Low Fat Milk — 200 ml", short:"A convenient single-serving pack for school, travel and quick refreshment.", description:"A compact everyday pack designed for convenience while keeping a clean, fresh milk experience.", image:"/images/product-showcase.png", price:35, category:"Single Serve", calories:"50 kcal", protein:"3.3 g", fat:"2.0 g", calcium:"120 mg" },
  { slug:"500ml", size:"500 ml", title:"Infinidairy 2% Low Fat Milk — 500 ml", short:"A practical everyday pack for individual use and smaller households.", description:"A balanced pack size for breakfast, tea, coffee, smoothies and everyday recipes.", image:"/images/brand-collage.png", price:55, category:"Everyday", calories:"50 kcal", protein:"3.3 g", fat:"2.0 g", calcium:"120 mg" },
  { slug:"1-litre", size:"1 Litre", title:"Infinidairy 2% Low Fat Milk — 1 Litre", short:"The family-friendly everyday pack for daily nutrition.", description:"A versatile 1 litre carton for family breakfasts, drinks and cooking.", image:"/images/hero-banner.png", price:78, category:"Family", calories:"50 kcal", protein:"3.3 g", fat:"2.0 g", calcium:"120 mg" },
  { slug:"2-litre", size:"2 Litre", title:"Infinidairy 2% Low Fat Milk — 2 Litre", short:"A bigger pack for families and everyday kitchen use.", description:"More milk for bigger households, breakfast tables and everyday recipes.", image:"/images/giant-product.png", price:145, category:"Family", calories:"50 kcal", protein:"3.3 g", fat:"2.0 g", calcium:"120 mg" }
];

export const nutritionRows = [
 ["Energy","50 kcal"],["Protein","3.3 g"],["Total Fat","2.0 g"],["Saturated Fat","1.3 g"],
 ["Trans Fat","0.0 g"],["Cholesterol","10 mg"],["Total Carbohydrate","4.8 g"],["Sugar","4.8 g"],
 ["Calcium","120 mg"],["Vitamin D","1.0 mcg"],["Vitamin A","60 mcg"]
];

export const processSteps = [
 {number:"01",title:"Farm sourcing",text:"Milk begins with careful dairy sourcing and responsible handling."},
 {number:"02",title:"Pasteurisation",text:"Processing is designed around safety, freshness and consistency."},
 {number:"03",title:"Quality testing",text:"Checks are performed throughout production to maintain standards."},
 {number:"04",title:"Hygienic packaging",text:"Convenient packaging protects the product through distribution."}
];

export const faqs = [
 ["What does 2% low fat mean?","The 2% label describes the product's milk-fat profile. Always check the final pack label for the product-specific nutrition declaration."],
 ["How should Infinidairy milk be stored?","Keep the product refrigerated as directed on the final pack and follow the storage instructions after opening."],
 ["Which pack sizes are available?","The showcase range includes 200 ml, 500 ml, 1 litre and 2 litre packs."],
 ["Can I use it for cooking?","Milk can be used in everyday recipes such as oats, sauces, desserts, tea, coffee and smoothies."],
 ["Where can I buy Infinidairy?","Availability can vary by location. Use the Contact page to ask about distributors, retailers or future availability."],
 ["How do I contact the brand?","Use the Contact page or the business contact details shown on the website."]
];

export const blogPosts = [
 {slug:"simple-breakfast-routine",category:"Lifestyle",title:"How to build a simple breakfast routine",excerpt:"Practical ideas for making mornings easier with simple, balanced choices.",image:"/images/brand-collage.png",content:"A good breakfast routine does not need to be complicated. Keep a few familiar staples ready, plan ahead, and choose foods that fit your family's routine. Milk can be an easy addition to cereal, oats, smoothies, tea, coffee or a simple glass alongside breakfast."},
 {slug:"understanding-low-fat-milk",category:"Nutrition",title:"Understanding the basics of low-fat milk",excerpt:"What the 2% label means and how it can fit into everyday meals.",image:"/images/product-showcase.png",content:"Low-fat milk contains less milk fat than whole milk. Infinidairy's 2% positioning is designed for people who want a familiar milk experience with a lower-fat profile. Always use the nutrition panel on the pack as the final source for product-specific information."},
 {slug:"farm-to-fridge",category:"Quality",title:"From farm inspiration to your fridge",excerpt:"A closer look at the journey from sourcing to convenient packaging.",image:"/images/hero-banner.png",content:"Milk quality begins with careful sourcing and continues through processing, testing, hygienic packaging and responsible handling. A consistent process helps preserve the freshness and convenience customers expect from a modern dairy product."},
 {slug:"milk-in-everyday-recipes",category:"Recipes",title:"Easy ways to use milk every day",excerpt:"Simple ideas for breakfast drinks, smoothies and home cooking.",image:"/images/giant-product.png",content:"Milk works naturally in everyday routines. Use it in oats, smoothies, tea, coffee, sauces and desserts, or enjoy a chilled glass with a meal."}
];

export const getProduct = slug => products.find(p=>p.slug===slug);
export const getPost = slug => blogPosts.find(p=>p.slug===slug);
