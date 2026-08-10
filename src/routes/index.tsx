import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import lockup from "@/assets/element-lockup.svg.asset.json";
import mark from "@/assets/element-mark.svg.asset.json";
import canHero from "@/assets/can-hero.jpg.asset.json";
import canBack from "@/assets/can-back.jpg.asset.json";
import canSide from "@/assets/can-side.jpg.asset.json";
import canGuarana from "@/assets/can-guarana.jpg.asset.json";
import canAcai from "@/assets/can-acai.jpg.asset.json";
import canCha from "@/assets/can-cha.jpg.asset.json";
import canIce from "@/assets/can-ice.jpg.asset.json";

const TITLE = "ELEMENT — Naturalmente forte1.";
const DESCRIPTION =
  "Element é uma proposta de bebida energética natural que une energia, foco, desempenho e uma identidade premium.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const flavors = [
  {
    n: "01",
    name: "Guaraná + Limão",
    img: canGuarana.url,
    accent: "var(--lime-accent)",
    desc: "Uma combinação marcante entre o guaraná e o toque cítrico do limão, pensada para entregar uma experiência refrescante e energética.",
    tag: "Produto principal da linha",
  },
  {
    n: "02",
    name: "Açaí",
    img: canAcai.url,
    accent: "var(--acai-accent)",
    desc: "Uma proposta inspirada no açaí, ingrediente associado à identidade brasileira e conhecido por sua presença de compostos antioxidantes.",
    tag: "Identidade brasileira",
  },
  {
    n: "03",
    name: "Chá Verde",
    img: canCha.url,
    accent: "var(--tea-accent)",
    desc: "Uma opção de perfil mais leve e sofisticado, utilizando o chá verde como um dos ingredientes de destaque da linha.",
    tag: "Perfil leve",
  },
];

const science = [
  {
    k: "Biologia",
    t: "A cafeína presente no guaraná estimula o sistema nervoso central, aumentando atenção e disposição. O açaí fornece antioxidantes e o chá verde contém compostos bioativos associados ao metabolismo.",
  },
  {
    k: "Química",
    t: "A cafeína é um alcaloide natural responsável pelo efeito estimulante. A bebida também utiliza ingredientes que apresentam compostos fenólicos e antioxidantes. O pH influencia diretamente a conservação e a estabilidade do produto.",
  },
  {
    k: "Física",
    t: "A energia química presente nos nutrientes é transformada em energia utilizada pelo organismo. A embalagem de alumínio facilita o resfriamento da bebida e contribui para sua conservação.",
  },
];

const dre: { label: string; value: string; n: number; strong?: boolean }[] = [
  { label: "Receita bruta", value: "R$ 360.000,00", n: 360000, strong: true },
  { label: "Tributos estimados", value: "R$ 65.000,00", n: 65000 },
  { label: "Receita líquida", value: "R$ 295.000,00", n: 295000, strong: true },
  { label: "Ingredientes", value: "R$ 77.500,00", n: 77500 },
  { label: "Embalagens", value: "R$ 59.000,00", n: 59000 },
  { label: "Impressão", value: "R$ 24.000,00", n: 24000 },
  { label: "Envase", value: "R$ 16.000,00", n: 16000 },
  { label: "Transporte", value: "R$ 22.000,00", n: 22000 },
  { label: "Lucro bruto", value: "R$ 96.500,00", n: 96500, strong: true },
  { label: "Marketing", value: "R$ 20.000,00", n: 20000 },
  { label: "Administrativo", value: "R$ 15.000,00", n: 15000 },
];

const marketing = [
  { label: "Instagram Ads", value: "R$ 10.000", pct: 50 },
  { label: "TikTok Ads", value: "R$ 5.000", pct: 25 },
  { label: "Influenciadores", value: "R$ 3.000", pct: 15 },
  { label: "Degustações e materiais", value: "R$ 2.000", pct: 10 },
];

const canais = [
  "Instagram",
  "TikTok",
  "Academias",
  "Eventos esportivos",
  "Influenciadores fitness",
  "Degustações",
  "Parcerias",
  "Conteúdo de performance",
  "Conteúdo lifestyle",
];

const concorrentes = [
  {
    marca: "Element",
    volume: "473 mL",
    pos: "Natural + fitness",
    preco: "R$ 9,49 (sugerido)",
    id: "Azul profundo e amarelo",
    pub: "16 a 35 anos, rotina intensa",
    own: true,
  },
  {
    marca: "Red Bull",
    volume: "a verificar",
    pos: "Energético tradicional",
    preco: "a verificar",
    id: "Consolidada",
    pub: "Amplo",
  },
  {
    marca: "Monster",
    volume: "a verificar",
    pos: "Energético intenso",
    preco: "a verificar",
    id: "Consolidada",
    pub: "Jovem",
  },
  {
    marca: "TNT",
    volume: "a verificar",
    pos: "Energético popular",
    preco: "a verificar",
    id: "Consolidada",
    pub: "Amplo",
  },
  {
    marca: "Fusion",
    volume: "a verificar",
    pos: "Energético popular",
    preco: "a verificar",
    id: "Consolidada",
    pub: "Amplo",
  },
];

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-24 sm:px-8 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="relative overflow-x-hidden">
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#topo" className="pointer-events-auto">
            <img
              src={mark.url}
              alt="Logo oficial Element"
              className="h-9 w-auto sm:h-11"
              width={110}
              height={80}
            />
          </a>
          <span className="eyebrow pointer-events-none hidden sm:block">473 ml</span>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(90% 60% at 50% 30%, color-mix(in oklab, var(--card) 85%, transparent), transparent 70%), linear-gradient(180deg, var(--ink), var(--background) 55%, var(--ink))",
            }}
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-[38%] -z-10 h-[46vh] w-[46vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
            style={{ background: "color-mix(in oklab, var(--primary) 22%, transparent)" }}
          />

          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pb-10 pt-28 sm:px-8">
            <img
              src={canHero.url}
              alt="Lata Element Energy Drink de 473 ml em azul profundo com raio amarelo"
              width={520}
              height={1370}
              className="can-fade animate-in fade-in zoom-in-95 slide-in-from-bottom-6 h-[46svh] w-auto object-contain duration-1000 sm:h-[52svh] md:h-[58svh]"
              style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.6))" }}
            />
            <div className="animate-in fade-in slide-in-from-bottom-4 mt-8 text-center delay-200 duration-1000">
              <h1 className="font-display text-[clamp(3rem,14vw,9rem)] leading-[0.85] font-extrabold tracking-[0.02em] text-foreground">
                ELEMENT
              </h1>
              <p className="eyebrow mt-4 text-[0.72rem] sm:text-sm">Naturalmente forte1.</p>
              <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Energia que te move.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <a
              href="#marca"
              className="eyebrow text-[0.6rem] opacity-70 transition-opacity hover:opacity-100"
            >
              Role para descobrir
            </a>
          </div>
        </section>

        {/* MARCA */}
        <Section id="marca" className="surface">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
            <Reveal>
              <p className="eyebrow">A marca</p>
              <h2 className="mt-5 text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95]">
                MAIS QUE UM
                <br />
                ENERGÉTICO.
              </h2>
              <div className="rule-y mt-8 w-40" />
              <p className="mt-8 max-w-xl text-base leading-[1.9] text-muted-foreground sm:text-lg">
                A Element foi criada para oferecer uma alternativa aos energéticos tradicionais,
                unindo energia, foco e desempenho a uma proposta baseada em ingredientes naturais. A
                marca busca equilibrar qualidade, sustentabilidade e preço competitivo, criando um
                produto pensado para pessoas que possuem uma rotina intensa e valorizam performance.
              </p>
            </Reveal>
            <Reveal delay={120} className="flex justify-center">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full blur-[70px]"
                  style={{ background: "color-mix(in oklab, var(--primary) 18%, transparent)" }}
                />
                <img
                  src={lockup.url}
                  alt="Símbolo e logotipo oficial da Element"
                  loading="lazy"
                  width={520}
                  height={300}
                  className="w-full max-w-sm"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {[
              ["Energia limpa", "Mais disposição para o dia todo."],
              ["Foco", "Mais foco para o que importa."],
              ["Desempenho", "Ultra performance em qualquer desafio."],
              ["Resistência", "Corpo e mente sempre prontos."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="rule-y w-full" />
                <h3 className="mt-5 text-sm tracking-[0.2em] text-primary uppercase">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* MISSÃO VISÃO VALORES */}
        <Section className="bg-[var(--ink)]">
          <Reveal>
            <p className="eyebrow">Essência</p>
          </Reveal>
          <div className="mt-10 grid gap-14 md:grid-cols-3 md:gap-12">
            <Reveal>
              <h3 className="text-2xl tracking-[0.12em] text-primary uppercase">Missão</h3>
              <p className="mt-5 leading-[1.9] text-muted-foreground">
                Produzir bebidas energéticas naturais de alta qualidade, oferecendo energia, foco e
                desempenho através de ingredientes selecionados.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="text-2xl tracking-[0.12em] text-primary uppercase">Visão</h3>
              <p className="mt-5 leading-[1.9] text-muted-foreground">
                Tornar-se referência nacional em bebidas energéticas naturais, competindo com
                grandes marcas por meio da qualidade, inovação e acessibilidade.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <h3 className="text-2xl tracking-[0.12em] text-primary uppercase">Valores</h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Qualidade",
                  "Sustentabilidade",
                  "Transparência",
                  "Inovação",
                  "Respeito ao consumidor",
                  "Incentivo ao esporte e à saúde",
                ].map((v) => (
                  <li
                    key={v}
                    className="flex items-baseline gap-3 text-muted-foreground before:h-px before:w-4 before:shrink-0 before:bg-primary before:content-['']"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* PRODUTOS */}
        <Section id="produtos">
          <Reveal className="text-center">
            <p className="eyebrow">A linha</p>
            <h2 className="mt-5 text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95]">TRÊS SABORES.</h2>
            <p className="mt-4 text-muted-foreground">Uma mesma família. 473 ml cada.</p>
          </Reveal>

          <div className="mt-16 space-y-24 md:space-y-32">
            {flavors.map((f, i) => (
              <Reveal key={f.name}>
                <div
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="relative flex justify-center">
                    <div
                      aria-hidden
                      className="absolute bottom-6 h-40 w-40 rounded-full blur-[60px] sm:h-56 sm:w-56"
                      style={{ background: `color-mix(in oklab, ${f.accent} 22%, transparent)` }}
                    />
                    <img
                      src={f.img}
                      alt={`Lata Element ${f.name} de 473 ml`}
                      loading="lazy"
                      width={440}
                      height={580}
                      className="can-fade relative h-[46vh] max-h-[480px] w-auto object-contain"
                      style={{ filter: "drop-shadow(0 30px 45px rgba(0,0,0,0.55))" }}
                    />
                  </figure>
                  <div className="min-w-0">
                    <span
                      className="font-display text-5xl font-extrabold sm:text-6xl"
                      style={{ color: f.accent, opacity: 0.85 }}
                    >
                      {f.n}
                    </span>
                    <h3 className="mt-4 text-[clamp(1.8rem,5vw,3rem)] leading-[1] uppercase">
                      Element
                      <br />
                      <span className="text-primary">{f.name}</span>
                    </h3>
                    <div className="rule-y mt-6 w-28" />
                    <p className="mt-6 max-w-lg leading-[1.9] text-muted-foreground">{f.desc}</p>
                    <p className="mt-6 text-xs tracking-[0.25em] text-steel uppercase">
                      {f.tag} • 473 ml
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CIÊNCIA */}
        <Section className="bg-[var(--ink)]">
          <Reveal>
            <p className="eyebrow">Interdisciplinar</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2rem,5.5vw,4rem)] leading-[0.98]">
              A CIÊNCIA POR TRÁS DA ENERGIA.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {science.map((s, i) => (
              <Reveal key={s.k} delay={i * 110}>
                <div className="h-full border-t border-primary/60 pt-6">
                  <h3 className="text-xl tracking-[0.2em] text-primary uppercase">{s.k}</h3>
                  <p className="mt-5 leading-[1.9] text-muted-foreground">{s.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PÚBLICO */}
        <Section className="surface">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="eyebrow">Público-alvo</p>
              <h2 className="mt-5 text-[clamp(2rem,5.5vw,4rem)] leading-[0.98]">
                FEITA PARA QUEM NÃO PARA.
              </h2>
              <p className="mt-8 leading-[1.9] text-muted-foreground">
                Pessoas entre 16 e 35 anos com rotina intensa, que buscam performance e bem-estar no
                dia a dia.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {[
                  "Praticantes de atividade física",
                  "Estudantes",
                  "Trabalhadores",
                  "Rotina intensa",
                  "Performance e bem-estar",
                ].map((t) => (
                  <li
                    key={t}
                    className="border border-primary/30 px-4 py-2 text-xs tracking-[0.14em] text-foreground/90 uppercase"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={canIce.url}
                alt="Lata Element gelada sobre gelo, destacando o acabamento premium"
                loading="lazy"
                width={700}
                height={372}
                className="can-fade w-full object-cover"
              />
            </Reveal>
          </div>
        </Section>

        {/* POSICIONAMENTO */}
        <Section>
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <Reveal>
              <p className="eyebrow">Posicionamento</p>
              <h2 className="mt-5 text-[clamp(2rem,5.5vw,4rem)] leading-[0.98]">POR QUE ELEMENT?</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="leading-[1.9] text-muted-foreground">
                A Element busca ocupar um espaço entre os energéticos tradicionais e o universo
                fitness, oferecendo uma marca com forte identidade visual, proposta baseada em
                ingredientes naturais e preço competitivo.
              </p>
              <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  "Identidade premium",
                  "Ingredientes naturais como conceito central",
                  "Lata de 473 ml",
                  "Posicionamento fitness",
                  "Visual sofisticado",
                  "Preço competitivo",
                  "Foco em sustentabilidade",
                  "Marca pensada para redes sociais",
                ].map((d) => (
                  <li key={d} className="border-t border-border pt-4 text-sm text-foreground/90">
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* MODELO DE NEGÓCIO */}
        <Section className="bg-[var(--ink)]">
          <Reveal>
            <p className="eyebrow">Empreendedorismo</p>
            <h2 className="mt-5 text-[clamp(2rem,5.5vw,4rem)] leading-[0.98]">
              DO PRODUTO AO MERCADO.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              ["Produção estimada", "50.000", "latas por mês"],
              ["Preço ao varejo", "R$ 7,20", "por lata"],
              ["Sugerido ao consumidor", "R$ 9,49", "por lata"],
            ].map(([k, v, s], i) => (
              <Reveal key={k} delay={i * 100}>
                <p className="text-xs tracking-[0.25em] text-steel uppercase">{k}</p>
                <p className="font-display mt-3 text-[clamp(2.4rem,7vw,3.6rem)] leading-none font-extrabold text-primary">
                  {v}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-12 max-w-2xl leading-[1.9] text-muted-foreground">
              A proposta é manter o preço final abaixo ou próximo da faixa dos principais
              concorrentes, permitindo que a Element seja competitiva.
            </p>
          </Reveal>
        </Section>

        {/* DRE */}
        <Section className="surface">
          <Reveal>
            <p className="eyebrow">Projeção financeira mensal</p>
            <h2 className="mt-5 text-[clamp(2rem,5.5vw,4rem)] leading-[0.98]">
              ELEMENT EM NÚMEROS.
            </h2>
            <p className="mt-6 max-w-2xl leading-[1.9] text-muted-foreground">
              A DRE é uma demonstração simplificada das receitas, custos e despesas projetadas para
              avaliar a viabilidade financeira da empresa. Base de cálculo: 50.000 latas por mês.
            </p>
          </Reveal>

          <div className="mt-14 space-y-5">
            {dre.map((row, i) => (
              <Reveal key={row.label} delay={Math.min(i * 45, 300)}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                  <span
                    className={`min-w-0 truncate text-sm tracking-wide uppercase ${
                      row.strong ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {row.label}
                  </span>
                  <span
                    className={`shrink-0 font-display text-sm font-bold sm:text-base ${
                      row.strong ? "text-primary" : "text-foreground/90"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
                <div className="mt-2 h-[3px] w-full bg-border/60">
                  <div
                    className="h-full"
                    style={{
                      width: `${Math.max((row.n / 360000) * 100, 2)}%`,
                      background: row.strong
                        ? "var(--primary)"
                        : "color-mix(in oklab, var(--primary) 40%, transparent)",
                    }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-16 grid gap-10 border-t border-primary/60 pt-10 sm:grid-cols-2">
              <div>
                <p className="text-xs tracking-[0.25em] text-steel uppercase">Lucro operacional</p>
                <p className="font-display mt-3 text-[clamp(2.6rem,9vw,4.5rem)] leading-none font-extrabold text-primary">
                  R$ 61.500
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] text-steel uppercase">Margem operacional</p>
                <p className="font-display mt-3 text-[clamp(2.6rem,9vw,4.5rem)] leading-none font-extrabold text-foreground">
                  ≈ 17,1%
                </p>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* MARKETING INVESTIMENTO */}
        <Section className="bg-[var(--ink)]">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
            <Reveal>
              <p className="eyebrow">Investimento</p>
              <h2 className="mt-5 text-[clamp(1.9rem,5vw,3.4rem)] leading-[1]">
                R$ 20.000 POR MÊS EM MARKETING.
              </h2>
              <p className="mt-8 leading-[1.9] text-muted-foreground">
                O custo por lata é um rateio do investimento mensal: dividindo R$ 20.000 por 50.000
                latas, o marketing representa{" "}
                <span className="text-primary">R$ 0,40 por lata</span>.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-7">
                {marketing.map((m) => (
                  <li key={m.label}>
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                      <span className="min-w-0 truncate text-sm tracking-wide text-muted-foreground uppercase">
                        {m.label}
                      </span>
                      <span className="font-display shrink-0 text-sm font-bold text-foreground">
                        {m.value}
                      </span>
                    </div>
                    <div className="mt-2 h-[3px] w-full bg-border/60">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${m.pct}%` }}
                      />
                    </div>
                  </li>
                ))}
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-t border-primary/60 pt-5">
                  <span className="text-sm tracking-[0.2em] uppercase">Total</span>
                  <span className="font-display font-bold text-primary">R$ 20.000/mês</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* SUSTENTABILIDADE */}
        <Section className="surface">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="eyebrow">Sustentabilidade</p>
              <h2 className="mt-5 text-[clamp(1.9rem,5vw,3.4rem)] leading-[1.02]">
                ENERGIA PARA HOJE.
                <br />
                <span className="text-primary">RESPONSABILIDADE PARA AMANHÃ.</span>
              </h2>
              <ul className="mt-10 space-y-4">
                {[
                  "Utilização de lata de alumínio",
                  "Material reciclável",
                  "Preocupação com sustentabilidade",
                  "Redução de desperdícios",
                  "Possibilidade de fornecedores nacionais",
                  "Preocupação ambiental",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-baseline gap-3 text-muted-foreground before:h-px before:w-5 before:shrink-0 before:bg-primary before:content-['']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="flex justify-center">
              <img
                src={canSide.url}
                alt="Lata Element vista lateral com grafismo de raio em amarelo metálico"
                loading="lazy"
                width={540}
                height={1320}
                className="can-fade h-[50vh] max-h-[520px] w-auto object-contain"
                style={{ filter: "drop-shadow(0 30px 45px rgba(0,0,0,0.55))" }}
              />
            </Reveal>
          </div>
        </Section>

        {/* MARKETING / DESEJO */}
        <Section>
          <Reveal>
            <h2 className="max-w-4xl text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.05]">
              A ELEMENT NÃO QUER APENAS SER VENDIDA.
              <br />
              <span className="text-primary">QUER SER LEMBRADA.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <Reveal>
              <ul className="flex flex-wrap gap-2">
                {canais.map((c) => (
                  <li
                    key={c}
                    className="border border-border px-4 py-2 text-xs tracking-[0.14em] uppercase transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-xl leading-[1.9] text-muted-foreground">
                A identidade visual forte da lata funciona como elemento de desejo: um produto que
                chama atenção na prateleira e que as pessoas querem fotografar e compartilhar.
              </p>
            </Reveal>
            <Reveal delay={120} className="flex justify-center">
              <img
                src={canBack.url}
                alt="Verso da lata Element com os atributos de energia, foco, desempenho e resistência"
                loading="lazy"
                width={480}
                height={1320}
                className="can-fade h-[48vh] max-h-[500px] w-auto object-contain"
                style={{ filter: "drop-shadow(0 30px 45px rgba(0,0,0,0.55))" }}
              />
            </Reveal>
          </div>
        </Section>

        {/* CONCLUSÃO */}
        <Section className="surface text-center">
          <Reveal>
            <img
              src={lockup.url}
              alt="Logo Element"
              loading="lazy"
              width={320}
              height={190}
              className="mx-auto w-40 sm:w-56"
            />
            <h2 className="mt-10 text-[clamp(2.2rem,7vw,5rem)] leading-[0.95]">
              NATURALMENTE FORTE.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl leading-[1.9] text-muted-foreground">
              A Element demonstra como conhecimentos de Química, Física, Biologia e Empreendedorismo
              podem ser integrados no desenvolvimento de um produto. A proposta combina ingredientes
              naturais, identidade visual forte, sustentabilidade e um modelo financeiro projetado
              para competir em um mercado consolidado.
            </p>
            <p className="mx-auto mt-6 max-w-2xl leading-[1.9] text-muted-foreground">
              A empresa foi pensada para unir ciência, desempenho e posicionamento de marca em um
              único produto.
            </p>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-border bg-[var(--ink)] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <h2 className="font-display text-4xl leading-none font-extrabold sm:text-5xl">
              ELEMENT
            </h2>
            <p className="eyebrow mt-3">Naturalmente forte1.</p>
            <p className="mt-4 text-sm text-muted-foreground">Bebidas energéticas naturais.</p>
          </div>
          <div className="text-sm text-muted-foreground sm:text-right">
            <p className="text-xs tracking-[0.22em] text-steel uppercase">Projeto interdisciplinar</p>
            <p className="mt-2">Química • Física • Biologia • Empreendedorismo</p>
            <p className="mt-4 text-primary">@element.drink</p>
            <p className="mt-4 text-xs text-steel">
              Marca fictícia criada para fins acadêmicos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
