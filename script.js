/* ===================== DATA (fictional, FY2024–2025) ===================== */
const DATA = {
  trend: {
    y2024: [38.2,34.1,39.5,41.0,42.3,40.8,37.9,39.2,44.6,47.1,58.4,72.9],
    y2025: [42.7,38.9,44.8,46.2,48.9,45.6,43.1,44.0,50.3,53.8,66.1,81.4]
  },
  countries: [
    ["France",168.4],["Germany",102.7],["United Kingdom",88.9],["USA",71.3],["Netherlands",49.6],
    ["Belgium",38.2],["Spain",31.5],["Italy",27.8],["Japan",15.1],["Other",12.3]
  ],
  categories: [["vinyl",278.7],["hifi",157.5],["turntables",115.1],["cd",54.5]],
  genres: [["Rock",31],["Jazz",19],["Electronic",16],["Hip-Hop",12],["Soul/Funk",9],["Classical",7],["other",6]],
  artists: [
    ["Pink Floyd",14.8],["Miles Davis",11.2],["Daft Punk",10.6],["Fleetwood Mac",9.7],
    ["Radiohead",8.9],["Kendrick Lamar",8.1],["John Coltrane",7.4],["Stevie Wonder",6.8]
  ],
  customers: [
    ["C-1042","Paris, FR",9.8,41,"hifi"],["C-2210","Berlin, DE",8.4,12,"hifi"],
    ["C-0877","London, UK",7.9,58,"vinyl"],["C-3301","Lyon, FR",6.6,9,"turntables"],
    ["C-1590","Amsterdam, NL",6.1,47,"vinyl"],["C-0456","New York, US",5.7,14,"hifi"],
    ["C-2788","Munich, DE",5.2,33,"vinyl"],["C-1123","Brussels, BE",4.9,22,"turntables"],
    ["C-3045","Bordeaux, FR",4.6,39,"vinyl"],["C-0912","Manchester, UK",4.3,28,"hifi"]
  ],
  segments: [ // [key, % customers, % revenue, count]
    ["vip",4,31,127],["high",14,29,446],["mid",37,27,1179],["low",45,13,1434]
  ]
};

/* ===================== TRANSLATIONS ===================== */
const T = {
  en: {
    loading:"CHARGING PROJECT", tag:"DATA ANALYSIS PROJECT · FY 2025",
    title:"Sales Performance Analysis",
    subtitle:"Music retailer — vinyl, CDs, turntables & hi-fi. Revenue, customers and products analysed to drive decisions.",
    hint:"▸ Click any chart for the explanation & business insight.",
    kRev:"Revenue 2025", kOrd:"Orders", kAov:"Avg. order value", kCus:"Active customers",
    cTrend:"How does revenue trend over time?", cCountry:"Which countries generate the most revenue?",
    cCategory:"Revenue by product category", cGenre:"Which genres drive revenue?",
    cArtist:"Top artists by revenue", cCustomers:"Who are the top customers?", cSegments:"Customer value segments",
    recoTitle:"Key recommendations",
    r1t:"Protect the VIPs", r1:"4% of customers bring 31% of revenue. Launch a loyalty tier with early access to limited pressings.",
    r2t:"Prepare for Q4", r2:"Nov–Dec = 24.5% of yearly revenue. Build stock 8 weeks ahead and bundle turntables with vinyl.",
    r3t:"Grow Germany & UK", r3:"Markets #2 and #3 at 60% of France's level. Localised ads and faster shipping are the cheapest lever.",
    r4t:"Cross-sell hi-fi", r4:"Vinyl buyers are the entry point; hi-fi carries the high baskets. Recommend equipment after the 3rd vinyl order.",
    footer:"Portfolio project · Fictional data · Built with HTML, CSS & vanilla JavaScript",
    mWhat:"WHAT IT SHOWS", mInsight:"KEY INSIGHT", mAction:"BUSINESS ACTION",
    months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    cat:{vinyl:"Vinyl",hifi:"Hi-Fi equipment",turntables:"Turntables",cd:"CDs"},
    seg:{vip:"VIP (>€1,000)",high:"High (€400–1,000)",mid:"Medium (€100–400)",low:"Low (<€100)"},
    other:"Other", pctCust:"% customers", pctRev:"% revenue",
    thId:"Customer", thCity:"City", thRev:"Revenue", thOrd:"Orders", thCat:"Main category",
    ofMedia:"of music media revenue (€333.2K)", customersLbl:"customers",
    info:{
      trend:{t:"Revenue trend",
        w:"Monthly revenue (K€) for 2025 against 2024. Each point is one month of total sales across all categories.",
        i:"Revenue grew +13.0% (€536.0K → €605.8K). Seasonality is strong: November and December make up 24.5% of the year, and February is always the low point.",
        a:"Plan stock, staffing and marketing budget around Q4. Use February for clearance sales and email reactivation campaigns."},
      country:{t:"Revenue by country",
        w:"Total 2025 revenue (K€) per customer country, ranked.",
        i:"France leads with 27.8% of revenue. The top 4 countries (FR, DE, UK, US) make up 71%. Germany and the UK show volume but stay at about 55–60% of France's level.",
        a:"Put acquisition budget into Germany & the UK (localised sites, local carriers). Test the Netherlands, which has high revenue per customer."},
      category:{t:"Product category",
        w:"2025 revenue split between the four product families.",
        i:"Vinyl is the core business (46%). Hi-fi and turntables bring 45% of revenue with far fewer orders, which means high-value baskets. CDs (9%) are declining.",
        a:"Use vinyl to bring in traffic and hardware for margin. Cut the CD catalogue down to its best-sellers and free up shelf space for equipment."},
      genre:{t:"Genre share",
        w:"Share of music media revenue (vinyl + CD) by genre.",
        i:"Rock and jazz make up half of music sales: an older, collector audience with high spend. Electronic and hip-hop (28%) bring younger buyers.",
        a:"Curate premium reissues for rock and jazz. Target electronic and hip-hop on social media to build the next generation of customers."},
      artist:{t:"Top artists",
        w:"The 8 artists with the highest 2025 revenue (K€), all formats combined.",
        i:"Catalogue classics lead (Pink Floyd, Miles Davis). The top 8 artists alone bring 23% of music revenue, so demand is concentrated.",
        a:"Never run out of these references. Negotiate volume deals and limited editions on the top artists."},
      customers:{t:"Top 10 customers",
        w:"The ten highest-spending customers in 2025, with order count and preferred category.",
        i:"The top 10 bring €63.5K (10.5% of revenue). There are two profiles: hi-fi buyers (few orders, very large baskets) and vinyl collectors (40–60 orders a year).",
        a:"Give each customer a dedicated contact and a personalised offer: upgrade paths for hi-fi buyers, pre-orders for collectors."},
      segments:{t:"Value segments",
        w:"Customers grouped by yearly spend: share of customers vs share of revenue.",
        i:"This is a Pareto pattern: VIP + High = 18% of customers but 60% of revenue. Low-value customers are 45% of the base for only 13% of revenue.",
        a:"Keep VIPs with a loyalty programme. Move Medium customers up with bundles and free shipping thresholds. Reach Low-value customers by automated email only."}
    }
  },
  fr: {
    loading:"CHARGEMENT DU PROJET", tag:"PROJET D'ANALYSE DE DONNÉES · EXERCICE 2025",
    title:"Analyse de la performance commerciale",
    subtitle:"Disquaire — vinyles, CD, platines & hi-fi. Chiffre d'affaires, clients et produits analysés pour guider les décisions.",
    hint:"▸ Cliquez sur un graphique pour l'explication & l'insight business.",
    kRev:"CA 2025", kOrd:"Commandes", kAov:"Panier moyen", kCus:"Clients actifs",
    cTrend:"Comment le CA évolue-t-il dans le temps ?", cCountry:"Quels pays génèrent le plus de CA ?",
    cCategory:"CA par catégorie de produit", cGenre:"Quels genres génèrent le CA ?",
    cArtist:"Top artistes par CA", cCustomers:"Qui sont les meilleurs clients ?", cSegments:"Segments de valeur client",
    recoTitle:"Recommandations clés",
    r1t:"Fidéliser les VIP", r1:"4 % des clients génèrent 31 % du CA. Lancer un programme fidélité avec accès anticipé aux éditions limitées.",
    r2t:"Préparer le T4", r2:"Nov–déc = 24,5 % du CA annuel. Constituer le stock 8 semaines avant et proposer des packs platine + vinyles.",
    r3t:"Développer l'Allemagne & le R-U", r3:"Les marchés n°2 et n°3 sont à 60 % du niveau de la France. Pub localisée et livraison rapide = levier le moins cher.",
    r4t:"Vente croisée hi-fi", r4:"Les acheteurs de vinyles sont la porte d'entrée ; la hi-fi fait les gros paniers. Recommander du matériel après la 3e commande.",
    footer:"Projet portfolio · Données fictives · Réalisé en HTML, CSS & JavaScript natif",
    mWhat:"CE QUE ÇA MONTRE", mInsight:"INSIGHT CLÉ", mAction:"ACTION BUSINESS",
    months:["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Aoû","Sep","Oct","Nov","Déc"],
    cat:{vinyl:"Vinyles",hifi:"Matériel hi-fi",turntables:"Platines",cd:"CD"},
    seg:{vip:"VIP (>1 000 €)",high:"Élevé (400–1 000 €)",mid:"Moyen (100–400 €)",low:"Faible (<100 €)"},
    other:"Autres", pctCust:"% clients", pctRev:"% CA",
    thId:"Client", thCity:"Ville", thRev:"CA", thOrd:"Cmd", thCat:"Catégorie principale",
    ofMedia:"du CA supports musicaux (333,2 K€)", customersLbl:"clients",
    info:{
      trend:{t:"Évolution du CA",
        w:"CA mensuel (K€) 2025 comparé à 2024. Chaque point représente un mois de ventes, toutes catégories confondues.",
        i:"Le CA progresse de +13,0 % (536,0 K€ → 605,8 K€). La saisonnalité est forte : novembre et décembre pèsent 24,5 % de l'année, et février est toujours le point bas.",
        a:"Planifier le stock, le personnel et le budget marketing autour du T4. Utiliser février pour le déstockage et les campagnes de réactivation."},
      country:{t:"CA par pays",
        w:"CA total 2025 (K€) par pays du client, classé.",
        i:"La France domine avec 27,8 % du CA. Le top 4 (FR, DE, R-U, US) pèse 71 %. L'Allemagne et le R-U ont du volume mais restent à 55–60 % du niveau de la France.",
        a:"Investir l'acquisition en Allemagne et au R-U (sites localisés, transporteurs locaux). Tester les Pays-Bas, où le CA par client est élevé."},
      category:{t:"Catégories de produits",
        w:"Répartition du CA 2025 entre les quatre familles de produits.",
        i:"Le vinyle est le cœur de métier (46 %). Hi-fi et platines font 45 % du CA avec beaucoup moins de commandes, donc de gros paniers. Le CD (9 %) décline.",
        a:"Le vinyle attire le trafic, le matériel fait la marge. Réduire le catalogue CD à ses meilleures ventes et libérer de la place pour le matériel."},
      genre:{t:"Part des genres",
        w:"Part du CA supports musicaux (vinyle + CD) par genre.",
        i:"Rock et jazz font la moitié des ventes musicales : un public de collectionneurs plus âgé, qui dépense beaucoup. Électro et hip-hop (28 %) attirent les plus jeunes.",
        a:"Proposer des rééditions premium en rock et jazz. Cibler électro et hip-hop sur les réseaux sociaux pour construire la prochaine génération de clients."},
      artist:{t:"Top artistes",
        w:"Les 8 artistes au plus fort CA en 2025 (K€), tous formats confondus.",
        i:"Les classiques du catalogue dominent (Pink Floyd, Miles Davis). Le top 8 à lui seul fait 23 % du CA musical : la demande est concentrée.",
        a:"Ne jamais être en rupture sur ces références. Négocier des volumes et des éditions limitées sur les artistes phares."},
      customers:{t:"Top 10 clients",
        w:"Les dix clients les plus dépensiers en 2025, avec nombre de commandes et catégorie préférée.",
        i:"Le top 10 pèse 63,5 K€ (10,5 % du CA). Deux profils : acheteurs hi-fi (peu de commandes, très gros paniers) et collectionneurs vinyles (40–60 commandes par an).",
        a:"Un interlocuteur dédié et une offre personnalisée pour chacun : montée en gamme pour la hi-fi, précommandes pour les collectionneurs."},
      segments:{t:"Segments de valeur",
        w:"Clients regroupés par dépense annuelle : part des clients vs part du CA.",
        i:"Schéma de Pareto : VIP + Élevé = 18 % des clients mais 60 % du CA. Les clients à faible valeur sont 45 % de la base pour seulement 13 % du CA.",
        a:"Fidéliser les VIP avec un programme dédié. Faire monter les clients Moyens avec des packs et des seuils de livraison gratuite. Toucher les Faibles uniquement par e-mail automatisé."}
    }
  }
};

/* ===================== STATE ===================== */
let lang = localStorage.getItem("gg-lang") || "en";
const t = () => T[lang];
const PAL = () => ["var(--accent)","#F2B705","#2B59C3","#1B998B","var(--fg)","#E07A5F","#8D99AE"];
const nf = (v, d=1) => v.toLocaleString(lang === "fr" ? "fr-FR" : "en-GB", {minimumFractionDigits:d, maximumFractionDigits:d});
const kEur = v => lang === "fr" ? `${nf(v)} K€` : `€${nf(v)}K`;

/* ===================== LOADER ===================== */
(function loader(){
  const fill = document.getElementById("loaderFill"), pct = document.getElementById("loaderPct");
  let p = 0;
  const step = () => {
    p = Math.min(100, p + Math.random() * 6 + 1.5);
    fill.style.width = p + "%"; pct.textContent = Math.floor(p) + "%";
    if (p < 100) setTimeout(step, 45);
    else setTimeout(() => { document.getElementById("loader").classList.add("done"); countUp(); renderAll(); }, 350);
  };
  step();
})();

/* ===================== KPI COUNT UP ===================== */
function countUp(){
  document.querySelectorAll(".kpi-val").forEach(el => {
    const target = +el.dataset.count, f = el.dataset.fmt, start = performance.now();
    const tick = now => {
      const k = Math.min(1, (now - start) / 1400), v = target * (1 - Math.pow(1 - k, 3));
      el.textContent = f === "int" ? nf(Math.round(v), 0)
        : f === "money" ? kEur(v)
        : (lang === "fr" ? `${nf(v)} €` : `€${nf(v)}`);
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* ===================== CHART HELPERS ===================== */
function barH(el, items, color){
  const W = 560, rowH = 30, L = 120, H = items.length * rowH + 10, max = Math.max(...items.map(d => d[1]));
  let s = `<svg viewBox="0 0 ${W} ${H}">`;
  items.forEach((d, i) => {
    const w = (d[1] / max) * (W - L - 70), y = i * rowH + 4;
    const c = typeof color === "function" ? color(i) : color;
    s += `<text x="${L - 8}" y="${y + 16}" text-anchor="end">${d[0]}</text>
      <rect class="grow" style="animation-delay:${i * 60}ms" x="${L}" y="${y}" width="${w}" height="${rowH - 10}" fill="${c}" stroke="var(--fg)" stroke-width="1.5" data-tip="${d[0]} · ${kEur(d[1])}"/>
      <text x="${L + w + 6}" y="${y + 15}" font-weight="800">${kEur(d[1])}</text>`;
  });
  el.innerHTML = s + `<line class="axis" x1="${L}" y1="0" x2="${L}" y2="${H}"/></svg>`;
}

function lineChart(el){
  const W = 900, H = 280, P = {l:50, r:20, t:20, b:34}, m = t().months;
  const max = 90, x = i => P.l + i * (W - P.l - P.r) / 11, y = v => H - P.b - (v / max) * (H - P.t - P.b);
  let s = `<svg viewBox="0 0 ${W} ${H}">`;
  for (let g = 0; g <= max; g += 15) s += `<line class="gridl" x1="${P.l}" x2="${W - P.r}" y1="${y(g)}" y2="${y(g)}"/><text x="${P.l - 8}" y="${y(g) + 4}" text-anchor="end">${g}K</text>`;
  m.forEach((mm, i) => s += `<text x="${x(i)}" y="${H - 12}" text-anchor="middle">${mm}</text>`);
  // Q4 highlight
  s += `<rect x="${x(9) - 20}" y="${P.t}" width="${x(11) - x(9) + 40}" height="${H - P.t - P.b}" fill="var(--accent)" opacity=".08"/>
        <text x="${x(10)}" y="${P.t + 14}" text-anchor="middle" font-weight="800" fill="var(--accent)">Q4 PEAK</text>`;
  const path = arr => arr.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
  const area = `${path(DATA.trend.y2025)} L${x(11)},${y(0)} L${x(0)},${y(0)} Z`;
  s += `<path d="${area}" fill="var(--accent)" opacity=".12"/>
        <path class="draw" d="${path(DATA.trend.y2024)}" fill="none" stroke="var(--muted)" stroke-width="3" stroke-dasharray="6 5"/>
        <path class="draw" d="${path(DATA.trend.y2025)}" fill="none" stroke="var(--accent)" stroke-width="4"/>`;
  DATA.trend.y2025.forEach((v, i) => {
    const prev = DATA.trend.y2024[i], g = ((v / prev - 1) * 100).toFixed(1);
    s += `<rect x="${x(i) - 6}" y="${y(v) - 6}" width="12" height="12" fill="var(--card)" stroke="var(--fg)" stroke-width="2.5" data-tip="${m[i]} 2025 · ${kEur(v)} (+${g}% vs ${kEur(prev)})"/>`;
  });
  s += `<line class="axis" x1="${P.l}" y1="${H - P.b}" x2="${W - P.r}" y2="${H - P.b}"/></svg>
    <div class="legend"><span><i style="background:var(--accent)"></i>2025 · ${kEur(605.8)}</span><span><i style="background:var(--muted)"></i>2024 · ${kEur(536.0)}</span><span>▲ +13.0%</span></div>`;
  el.innerHTML = s;
}

function donut(el, items, unit, centerTop, centerBot){
  const total = items.reduce((a, d) => a + d[1], 0), R = 80, C = 2 * Math.PI * R, pal = PAL();
  let off = 0, s = `<svg viewBox="0 0 220 220"><g transform="rotate(-90 110 110)">`;
  items.forEach((d, i) => {
    const len = (d[1] / total) * C, pct = (d[1] / total * 100).toFixed(1);
    s += `<circle cx="110" cy="110" r="${R}" fill="none" stroke="${pal[i % pal.length]}" stroke-width="34"
      stroke-dasharray="${len - 2} ${C - len + 2}" stroke-dashoffset="${-off}"
      data-tip="${d[0]} · ${unit === "pct" ? d[1] + "%" : kEur(d[1]) + " (" + pct + "%)"}"/>`;
    off += len;
  });
  s += `</g><text x="110" y="106" text-anchor="middle" font-size="22" font-weight="900">${centerTop}</text>
        <text x="110" y="126" text-anchor="middle" font-size="11">${centerBot}</text></svg>`;
  const legend = items.map((d, i) => `<span><i style="background:${pal[i % pal.length]}"></i>${d[0]} ${unit === "pct" ? d[1] + "%" : Math.round(d[1] / total * 100) + "%"}</span>`).join("");
  el.innerHTML = `<div style="max-width:260px;margin:auto">${s}</div><div class="legend">${legend}</div>`;
}

function segmentsChart(el){
  const W = 560, H = 260, P = {l:40, b:44, t:20}, gw = (W - P.l) / 4, y = v => H - P.b - (v / 50) * (H - P.b - P.t);
  let s = `<svg viewBox="0 0 ${W} ${H}">`;
  for (let g = 0; g <= 50; g += 10) s += `<line class="gridl" x1="${P.l}" x2="${W}" y1="${y(g)}" y2="${y(g)}"/><text x="${P.l - 6}" y="${y(g) + 4}" text-anchor="end">${g}%</text>`;
  DATA.segments.forEach((d, i) => {
    const x0 = P.l + i * gw + gw * 0.15, bw = gw * 0.32, lbl = t().seg[d[0]];
    s += `<rect class="growY" x="${x0}" y="${y(d[1])}" width="${bw}" height="${y(0) - y(d[1])}" fill="var(--fg)" opacity=".35" data-tip="${lbl} · ${d[1]}% ${t().pctCust} (${nf(d[3],0)})"/>
          <rect class="growY" x="${x0 + bw + 4}" y="${y(d[2])}" width="${bw}" height="${y(0) - y(d[2])}" fill="var(--accent)" stroke="var(--fg)" stroke-width="1.5" data-tip="${lbl} · ${d[2]}% ${t().pctRev}"/>
          <text x="${x0 + bw / 2}" y="${y(d[1]) - 5}" text-anchor="middle" font-weight="800">${d[1]}</text>
          <text x="${x0 + bw * 1.5 + 4}" y="${y(d[2]) - 5}" text-anchor="middle" font-weight="800">${d[2]}</text>
          <text x="${x0 + bw + 2}" y="${H - 24}" text-anchor="middle" font-weight="800">${lbl.split(" ")[0]}</text>
          <text x="${x0 + bw + 2}" y="${H - 10}" text-anchor="middle" font-size="10">${nf(d[3],0)} ${t().customersLbl}</text>`;
  });
  el.innerHTML = s + `<line class="axis" x1="${P.l}" y1="${y(0)}" x2="${W}" y2="${y(0)}"/></svg>
    <div class="legend"><span><i style="background:var(--fg);opacity:.35"></i>${t().pctCust}</span><span><i style="background:var(--accent)"></i>${t().pctRev}</span></div>`;
}

function customersTable(el){
  const max = DATA.customers[0][2];
  let s = `<table class="ctable"><thead><tr><th>${t().thId}</th><th>${t().thCity}</th><th>${t().thRev}</th><th>${t().thOrd}</th><th class="barcell">${t().thCat}</th></tr></thead><tbody>`;
  DATA.customers.forEach(c => {
    s += `<tr data-tip="${c[0]} · ${kEur(c[2])} · ${c[3]} ${t().thOrd.toLowerCase()}"><td><b>${c[0]}</b></td><td>${c[1]}</td><td><b>${kEur(c[2])}</b></td><td>${c[3]}</td>
      <td class="barcell"><div class="minibar grow" style="width:${c[2] / max * 100}%"></div><small>${t().cat[c[4]]}</small></td></tr>`;
  });
  el.innerHTML = s + `</tbody></table>`;
}

/* ===================== RENDER ===================== */
function renderAll(){
  const pal = PAL();
  lineChart(document.getElementById("chTrend"));
  barH(document.getElementById("chCountry"), DATA.countries.map(d => [d[0] === "Other" ? t().other : d[0], d[1]]), i => i === 0 ? "var(--accent)" : i < 4 ? "var(--fg)" : "var(--muted)");
  donut(document.getElementById("chCategory"), DATA.categories.map(d => [t().cat[d[0]], d[1]]), "eur", kEur(605.8), "TOTAL 2025");
  donut(document.getElementById("chGenre"), DATA.genres.map(d => [d[0] === "other" ? t().other : d[0], d[1]]), "pct", "50%", "Rock + Jazz");
  barH(document.getElementById("chArtist"), DATA.artists, i => pal[i % 4]);
  customersTable(document.getElementById("chCustomers"));
  segmentsChart(document.getElementById("chSegments"));
}

/* ===================== I18N ===================== */
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = t()[el.dataset.i18n]; if (v) el.textContent = v; });
  document.querySelectorAll("#langBtn [data-l]").forEach(s => s.classList.toggle("on", s.dataset.l === lang));
  localStorage.setItem("gg-lang", lang);
}
document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "fr" : "en"; applyLang(); renderAll(); countUp();
});

/* ===================== THEME ===================== */
if (localStorage.getItem("gg-theme") === "dark") document.body.classList.add("dark");
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("gg-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

/* ===================== ACCENT ===================== */
function setAccent(c){
  document.documentElement.style.setProperty("--accent", c);
  document.querySelectorAll(".swatch[data-color]").forEach(s => s.classList.toggle("active", s.dataset.color.toLowerCase() === c.toLowerCase()));
  document.getElementById("accentInput").value = c;
  localStorage.setItem("gg-accent", c);
}
document.querySelectorAll(".swatch[data-color]").forEach(s => s.addEventListener("click", () => setAccent(s.dataset.color)));
document.getElementById("accentInput").addEventListener("input", e => setAccent(e.target.value));
setAccent(localStorage.getItem("gg-accent") || "#D62828");

/* ===================== TOOLTIP ===================== */
const tip = document.getElementById("tooltip");
document.addEventListener("mousemove", e => {
  const el = e.target.closest("[data-tip]");
  if (el) {
    tip.textContent = el.dataset.tip; tip.style.opacity = 1;
    const x = Math.min(e.clientX + 14, innerWidth - tip.offsetWidth - 10);
    tip.style.left = x + "px"; tip.style.top = (e.clientY + 16) + "px";
  } else tip.style.opacity = 0;
});

/* ===================== MODAL ===================== */
const modal = document.getElementById("modal");
document.querySelectorAll(".card").forEach(card => card.addEventListener("click", () => {
  const info = t().info[card.dataset.info];
  document.getElementById("mTitle").textContent = info.t;
  document.getElementById("mWhat").textContent = info.w;
  document.getElementById("mInsight").textContent = info.i;
  document.getElementById("mAction").textContent = info.a;
  modal.classList.add("open");
}));
const closeModal = () => modal.classList.remove("open");
document.getElementById("mClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ===================== STARS BACKGROUND ===================== */
(function stars(){
  const cv = document.getElementById("stars"), ctx = cv.getContext("2d");
  let W, H, pts = [], mouse = {x:-999, y:-999};
  const resize = () => {
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    pts = Array.from({length: Math.round(W * H / 9000)}, () => ({
      x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.4 + .3,
      vx: (Math.random() - .5) * .15, vy: (Math.random() - .5) * .15, ox: 0, oy: 0, tw: Math.random() * 6
    }));
  };
  addEventListener("resize", resize); resize();
  addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  addEventListener("mouseleave", () => { mouse.x = mouse.y = -999; });
  const loop = () => {
    ctx.clearRect(0, 0, W, H);
    const col = getComputedStyle(document.body).getPropertyValue("--fg").trim();
    const acc = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.tw += .03;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      const dx = p.x + p.ox - mouse.x, dy = p.y + p.oy - mouse.y, d = Math.hypot(dx, dy);
      if (d < 120) { const f = (120 - d) / 120 * 2.2; p.ox += dx / d * f; p.oy += dy / d * f; }
      p.ox *= .94; p.oy *= .94;
      ctx.globalAlpha = .35 + Math.sin(p.tw) * .25;
      ctx.fillStyle = d < 120 ? acc : col;
      const s = p.r * 2; // square stars = discrete geometry
      ctx.fillRect(p.x + p.ox - s / 2, p.y + p.oy - s / 2, s, s);
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  };
  loop();
})();

applyLang();
