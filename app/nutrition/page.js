export const metadata = { title: "Nutrition | Infinidairy" };

export default function NutritionPage() {
  const rows = [
    ["Energy","50 kcal"],["Protein","3.3 g"],["Total Fat","2.0 g"],["Saturated Fat","1.3 g"],
    ["Trans Fat","0.0 g"],["Cholesterol","10 mg"],["Total Carbohydrate","4.8 g"],["Sugar","4.8 g"],
    ["Calcium","120 mg"],["Vitamin D","1.0 mcg"],["Vitamin A","60 mcg"]
  ];
  return <main className="innerPage"><div className="innerHero"><div className="container"><div className="sectionKicker light">NUTRITION</div><h1>Goodness you can<br/><em>understand.</em></h1><p>Approximate values per 100 ml. Check the pack for final product-specific information.</p></div></div><section className="section"><div className="container nutritionFull"><div><div className="sectionKicker">2% LOW FAT</div><h2>Balanced for <em>everyday.</em></h2><p className="lead">Infinidairy is positioned as a 2% low-fat milk choice for everyday routines.</p></div><div className="fullTable">{rows.map(([a,b])=><div key={a}><span>{a}</span><b>{b}</b></div>)}</div></div></section></main>;
}
