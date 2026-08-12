import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CountUp } from "@/components/CountUp";
import { useScrollY } from "@/components/useScrollY";
import lockup from "@/assets/element-lockup.svg.asset.json";
import mark from "@/assets/element-mark.svg.asset.json";
import identidade from "@/assets/brand-identity.jpg.asset.json";
import trio from "@/assets/trio-cans.jpg.asset.json";
import imgGuarana from "@/assets/flavor-guarana.jpg.asset.json";
import imgAcai from "@/assets/flavor-acai.jpg.asset.json";
import imgCha from "@/assets/flavor-cha.jpg.asset.json";
import canIce from "@/assets/can-ice.jpg.asset.json";
import canSide from "@/assets/can-side.jpg.asset.json";

const TITLE = "ELEMENT — Naturalmente forte.";
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
    short: "Energia cítrica.",
    img: imgGuarana.url,
    accent: "var(--lime-accent)",
    desc: "Uma combinação marcante entre o guaraná e o toque cítrico do limão, pensada para entregar uma experiência refrescante e energética.",
    tag: "Produto principal da linha",
  },
  {
    n: "02",
    name: "Açaí",
    short: "Uma experiência inspirada no sabor brasileiro.",
    img: imgAcai.url,
    accent: "var(--acai-accent)",
    desc: "Uma proposta inspirada no açaí, ingrediente associado à identidade brasileira e conhecido por sua presença de compostos antioxidantes.",
    tag: "Identidade brasileira",
  },
  {
    n: "03",
    name: "Chá Verde",
    short: "Perfil leve e sofisticado.",
    img: imgCha.url,
    accent: "var(--tea-accent)",
    desc: "Uma opção de perfil mais leve e sofisticado, utilizando o chá verde como um dos ingredientes de destaque da linha.",
    tag: "Perfil leve",
  },
];

const science = [
  {
    n: "01",
    k: "Biologia",
    t: "A cafeína presente no guaraná estimula o sistema nervoso central, aumentando atenção e disposição. O açaí fornece antioxidantes e o chá verde contém compostos bioativos associados ao metabolismo.",
  },
  {
    n: "02",
    k: "Química",
    t: "A cafeína é um alcaloide natural responsável pelo efeito estimulante. A bebida também utiliza ingredientes que apresentam compostos fenólicos e antioxidantes. O pH influencia diretamente a conservação e a estabilidade do produto.",
  },
  {
    n: "03",
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
    <section id={id} className={`relative px-5 py-24 sm:px-8 md:py-36 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Hero() {
  const y = useScrollY();
  const vh = typeof window === "undefined" ? 900 : window.innerHeight;
  const p = Math.min(1, y / Math.max(vh, 1));

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(100% 70% at 50% 20%, color-mix(in oklab, var(--card) 60%, transparent), transparent 70%), linear-gradient(180deg, #000 0%, var(--ink) 45%, var(--background) 100%)",
        }}
      />
      <div aria-hidden className="tech-grid absolute inset-0 -z-20 opacity-60" />
      <div
        aria-hidden
        className="absolute top-[42%] left-1/2 -z-10 h-[40vh] w-[70vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          background: "color-mix(in oklab, var(--primary) 10%, transparent)",
          opacity: 1 - p * 0.8,
        }}
      />

      {/* imagem das três latas */}
      <div className="absolute inset-x-0 top-[46%] -z-10 flex -translate-y-1/2 justify-center">
        <img
          src={trio.url}
          alt="Três latas Element de 473 mL em azul profundo com grafismo de raio amarelo"
          width={1651}
          height={616}
          className="photo-blend ml-[-30%] w-[160%] max-w-none object-contain sm:ml-0 sm:w-[112%] md:w-full md:max-w-6xl"
          style={{
            transform: `scale(${1 + p * 0.18}) translateY(${p * -20}px)`,
            opacity: 1 - p * 0.55,
            transition: "transform 120ms linear",
          }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pt-24 pb-10 sm:px-8">
        <div
          className="mt-auto"
          style={{ opacity: Math.max(0, 1 - p * 1.5), transform: `translateY(${p * 40}px)` }}
        >
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <p className="micro text-primary">473 mL — Energy drink</p>
            <h1 className="font-display mt-4 text-[clamp(3.2rem,17vw,11rem)] leading-[0.82] font-extrabold tracking-[-0.03em]">
              ELEMENT
            </h1>
            <div className="mt-6 grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-end">
              <p className="font-display text-[clamp(0.95rem,3.6vw,1.5rem)] tracking-[0.28em] text-primary uppercase">
                Naturalmente forte.
              </p>
              <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase sm:text-right">
                Energia que te move.
              </p>
            </div>
            <div className="hairline mt-8 w-full" />
            <div className="mt-4 flex items-center justify-between">
              <span className="micro">01 / 03 — Lançamento</span>
              <a
                href="#marca"
                className="micro text-primary transition-opacity hover:opacity-70"
              >
                Role ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlavorBlock({ f, index }: { f: (typeof flavors)[number]; index: number }) {
  const y = useScrollY();
  const shift = ((y / 12) % 40) - 20;

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(70% 60% at ${index % 2 ? "80%" : "20%"} 50%, color-mix(in oklab, ${f.accent} 9%, transparent), transparent 70%), linear-gradient(180deg, var(--ink), var(--background))`,
        }}
      />
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4">
            <span
              className="font-display text-[clamp(2.5rem,9vw,5rem)] leading-none font-extrabold"
              style={{ color: f.accent, opacity: 0.9 }}
            >
              {f.n}
            </span>
            <div className="min-w-0">
              <h3 className="text-[clamp(1.6rem,6vw,3.6rem)] leading-[0.95] uppercase">
                {f.name}
              </h3>
            </div>
          </div>
          <div className="hairline mt-6" />
        </Reveal>

        <Reveal delay={100}>
          <figure className="relative mt-8">
            <img
              src={f.img}
              alt={`Lata Element ${f.name} de 473 mL`}
              loading="lazy"
              width={1651}
              height={478}
              className="photo-blend w-full object-contain"
              style={{ transform: `translateY(${shift * 0.25}px)` }}
            />
          </figure>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1fr] md:gap-16">
            <p
              className="font-display text-[clamp(1.1rem,3.4vw,1.8rem)] leading-tight uppercase"
              style={{ color: f.accent }}
            >
              {f.short}
            </p>
            <div className="min-w-0">
              <p className="leading-[1.9] text-muted-foreground">{f.desc}</p>
              <p className="micro mt-6">{f.tag} — 473 mL</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  const [dreOpen, setDreOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      <ScrollProgress />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-8">
          <a href="#topo" className="pointer-events-auto justify-self-start">
            <img
              src={mark.url}
              alt="Logo oficial Element"
              className="h-8 w-auto sm:h-10"
              width={110}
              height={80}
            />
          </a>
          <span className="micro hidden sm:block">473 mL — Energy drink</span>
        </div>
      </header>

      <main id="topo">
        <Hero />

        {/* MARCA */}
        <Section id="marca" className="overflow-hidden">
          <Reveal className="flex justify-center">
            <img
              src={identidade.url}
              alt="Identidade oficial Element — símbolo, logotipo e assinatura Naturalmente Forte"
              loading="lazy"
              width={1651}
              height={616}
              className="photo-blend w-full max-w-4xl object-contain"
            />
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <Reveal>
              <p className="micro text-primary">A marca</p>
              <h2 className="mt-5 text-[clamp(2.1rem,6vw,4.2rem)] leading-[0.95]">
                MAIS QUE UM
                <br />
                ENERGÉTICO.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="leading-[1.95] text-muted-foreground sm:text-lg">
                A Element foi criada para oferecer uma alternativa aos energéticos tradicionais,
                unindo energia, foco e desempenho a uma proposta baseada em ingredientes naturais.
              </p>
              <p className="mt-6 leading-[1.95] text-muted-foreground sm:text-lg">
                A marca busca equilibrar qualidade, sustentabilidade e preço competitivo, criando um
                produto pensado para pessoas que possuem uma rotina intensa e valorizam performance.
              </p>
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
                <div className="hairline w-full" />
                <h3 className="mt-5 text-sm tracking-[0.2em] text-primary uppercase">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PRODUTOS */}
        <div id="produtos">
          <Section className="!pb-8">
            <Reveal>
              <p className="micro text-primary">A linha</p>
              <h2 className="mt-5 text-[clamp(2.1rem,6vw,4.2rem)] leading-[0.95]">TRÊS SABORES.</h2>
              <p className="mt-5 max-w-md leading-[1.9] text-muted-foreground">
                Uma mesma família. 473 mL cada.
              </p>
            </Reveal>
          </Section>
          {flavors.map((f, i) => (
            <FlavorBlock key={f.name} f={f} index={i} />
          ))}
        </div>

        {/* LATA NO GELO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{ background: "linear-gradient(180deg, var(--background), #000 70%, var(--ink))" }}
          />
          <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
            <Reveal className="flex justify-center">
              <img
                src={canIce.url}
                alt="Lata Element gelada sobre gelo, em fotografia de campanha"
                loading="lazy"
                width={1400}
                height={744}
                className="photo-blend w-full max-w-5xl object-contain"
              />
            </Reveal>
            <Reveal delay={140} className="mt-10">
              <h2 className="max-w-3xl text-[clamp(2rem,6.5vw,4.6rem)] leading-[0.95]">
                FEITA PARA OS
                <br />
                <span className="text-primary">DIAS INTENSOS.</span>
              </h2>
              <p className="mt-8 max-w-xl leading-[1.9] text-muted-foreground sm:text-lg">
                Energia, foco e desempenho para acompanhar uma rotina que não para.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CIÊNCIA */}
        <Section className="bg-[var(--ink)]">
          <Reveal>
            <p className="micro text-primary">Interdisciplinar</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2rem,5.8vw,4.2rem)] leading-[0.96]">
              A CIÊNCIA POR TRÁS DA ENERGIA.
            </h2>
          </Reveal>
          <div className="mt-16 space-y-14">
            {science.map((s, i) => (
              <Reveal key={s.k} delay={i * 90}>
                <div className="hairline" />
                <div className="mt-6 grid gap-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-16">
                  <span className="font-display text-[clamp(3rem,12vw,7rem)] leading-[0.8] font-extrabold text-primary/25">
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[clamp(1.4rem,4.5vw,2.4rem)] tracking-[0.08em] uppercase">
                      {s.k}
                    </h3>
                    <p className="mt-5 max-w-2xl leading-[1.95] text-muted-foreground">{s.t}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* MISSÃO VISÃO VALORES */}
        <Section>
          <Reveal>
            <p className="micro text-primary">Essência</p>
          </Reveal>
          <div className="mt-12 space-y-16">
            <Reveal>
              <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-16">
                <h3 className="text-2xl tracking-[0.18em] text-primary uppercase">Missão</h3>
                <p className="max-w-2xl leading-[1.95] text-muted-foreground sm:text-lg">
                  Produzir bebidas energéticas naturais de alta qualidade, oferecendo energia, foco
                  e desempenho através de ingredientes selecionados.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-16">
                <h3 className="text-2xl tracking-[0.18em] text-primary uppercase">Visão</h3>
                <p className="max-w-2xl leading-[1.95] text-muted-foreground sm:text-lg">
                  Tornar-se referência nacional em bebidas energéticas naturais, competindo com
                  grandes marcas por meio da qualidade, inovação e acessibilidade.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-16">
                <h3 className="text-2xl tracking-[0.18em] text-primary uppercase">Valores</h3>
                <ul className="grid gap-4 sm:grid-cols-2">
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
                      className="flex items-baseline gap-3 text-muted-foreground before:h-px before:w-5 before:shrink-0 before:bg-primary before:content-['']"
                    >
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* PÚBLICO */}
        <Section className="bg-[var(--ink)]">
          <Reveal>
            <p className="micro text-primary">Público-alvo</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2rem,5.8vw,4.2rem)] leading-[0.96]">
              FEITA PARA QUEM NÃO PARA.
            </h2>
            <p className="mt-8 max-w-xl leading-[1.9] text-muted-foreground sm:text-lg">
              Pessoas entre 16 e 35 anos com rotina intensa, que buscam performance e bem-estar no
              dia a dia.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Praticantes de atividade física",
              "Estudantes",
              "Trabalhadores",
              "Pessoas com rotina intensa",
              "Interessados em performance",
              "Interessados em bem-estar",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 70}>
                <div className="hairline" />
                <p className="mt-4 text-sm tracking-[0.16em] text-foreground/90 uppercase">{t}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* POSICIONAMENTO */}
        <Section>
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <Reveal>
              <p className="micro text-primary">Posicionamento</p>
              <h2 className="mt-5 text-[clamp(2rem,5.8vw,4.2rem)] leading-[0.96]">
                POR QUE ELEMENT?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="leading-[1.95] text-muted-foreground sm:text-lg">
                A Element busca ocupar um espaço entre os energéticos tradicionais e o universo
                fitness, oferecendo uma marca com forte identidade visual, proposta baseada em
                ingredientes naturais e preço competitivo.
              </p>
              <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  "Identidade premium",
                  "Ingredientes naturais como conceito central",
                  "Lata de 473 mL",
                  "Posicionamento fitness",
                  "Visual sofisticado",
                  "Preço competitivo",
                  "Foco em sustentabilidade",
                  "Marca pensada para redes sociais",
                ].map((d) => (
                  <li
                    key={d}
                    className="border-t border-border pt-4 text-sm text-foreground/90 transition-colors hover:border-primary/60"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* NÚMEROS */}
        <Section className="bg-[var(--ink)]">
          <Reveal>
            <p className="micro text-primary">Projeção financeira mensal</p>
            <h2 className="mt-5 text-[clamp(2rem,5.8vw,4.2rem)] leading-[0.96]">
              ELEMENT EM NÚMEROS.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-12">
            {[
              {
                v: <CountUp to={50000} />,
                k: "latas / mês",
                sub: "Produção estimada",
              },
              {
                v: <CountUp to={360} prefix="R$ " suffix=" mil" />,
                k: "receita bruta",
                sub: "Base: 50.000 latas",
              },
              {
                v: <CountUp to={61.5} decimals={1} prefix="R$ " suffix=" mil" />,
                k: "lucro operacional",
                sub: "Após custos e despesas",
              },
              {
                v: <CountUp to={17.1} decimals={1} suffix="%" />,
                k: "margem operacional",
                sub: "Sobre a receita bruta",
              },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 80}>
                <div className="hairline" />
                <div className="mt-5 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                  <p className="font-display min-w-0 text-[clamp(2.8rem,12vw,6.5rem)] leading-[0.85] font-extrabold text-primary">
                    {item.v}
                  </p>
                  <div className="md:text-right">
                    <p className="text-sm tracking-[0.24em] text-foreground uppercase">{item.k}</p>
                    <p className="micro mt-2">{item.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-20">
              <button
                type="button"
                onClick={() => setDreOpen((o) => !o)}
                aria-expanded={dreOpen}
                className="micro flex min-h-11 items-center gap-4 text-primary transition-opacity hover:opacity-70"
              >
                <span className="hairline w-10 bg-primary" />
                {dreOpen ? "Ocultar DRE detalhada" : "Ver DRE detalhada"}
              </button>

              {dreOpen && (
                <div className="animate-in fade-in slide-in-from-top-2 mt-10 duration-500">
                  <p className="max-w-2xl leading-[1.9] text-muted-foreground">
                    A DRE é uma demonstração simplificada das receitas, custos e despesas projetadas
                    para avaliar a viabilidade financeira da empresa. Base de cálculo: 50.000 latas
                    por mês.
                  </p>
                  <div className="mt-10 space-y-5">
                    {dre.map((row) => (
                      <div key={row.label}>
                        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                          <span
                            className={`min-w-0 truncate text-sm tracking-wide uppercase ${
                              row.strong ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {row.label}
                          </span>
                          <span
                            className={`font-display shrink-0 text-sm font-bold sm:text-base ${
                              row.strong ? "text-primary" : "text-foreground/90"
                            }`}
                          >
                            {row.value}
                          </span>
                        </div>
                        <div className="mt-2 h-[2px] w-full bg-border/60">
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
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </Section>

        {/* MODELO DE NEGÓCIO */}
        <Section>
          <Reveal>
            <p className="micro text-primary">Empreendedorismo</p>
            <h2 className="mt-5 text-[clamp(2rem,5.8vw,4.2rem)] leading-[0.96]">
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
                <div className="hairline" />
                <p className="micro mt-4">{k}</p>
                <p className="font-display mt-3 text-[clamp(2.2rem,7vw,3.4rem)] leading-none font-extrabold text-primary">
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

        {/* MARKETING */}
        <Section className="bg-[var(--ink)]">
          <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
            <Reveal>
              <p className="micro text-primary">Investimento</p>
              <div className="mt-8">
                <p className="font-display text-[clamp(2.6rem,11vw,5rem)] leading-[0.85] font-extrabold text-primary">
                  <CountUp to={20000} prefix="R$ " />
                </p>
                <p className="mt-3 text-sm tracking-[0.24em] uppercase">Investimento mensal</p>
              </div>
              <div className="mt-10">
                <p className="font-display text-[clamp(2.2rem,9vw,4rem)] leading-[0.85] font-extrabold">
                  R$ 0,40
                </p>
                <p className="mt-3 text-sm tracking-[0.24em] text-muted-foreground uppercase">
                  Por lata
                </p>
              </div>
              <p className="mt-10 max-w-lg leading-[1.9] text-muted-foreground">
                Considerando uma produção de 50.000 latas por mês, o investimento de R$ 20.000 em
                marketing representa aproximadamente{" "}
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
                    <div className="mt-2 h-[2px] w-full bg-border/60">
                      <div className="h-full bg-primary" style={{ width: `${m.pct}%` }} />
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

        {/* DESEJO */}
        <Section>
          <Reveal>
            <h2 className="max-w-4xl text-[clamp(1.9rem,5.4vw,3.6rem)] leading-[1.05]">
              A ELEMENT NÃO QUER APENAS SER VENDIDA.
              <br />
              <span className="text-primary">QUER SER LEMBRADA.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-12 flex flex-wrap gap-2">
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
        </Section>

        {/* SUSTENTABILIDADE */}
        <Section className="bg-[var(--ink)]">
          <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <Reveal>
              <p className="micro text-primary">Sustentabilidade</p>
              <h2 className="mt-5 text-[clamp(1.9rem,5.2vw,3.4rem)] leading-[1.02]">
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
                className="can-fade h-[46vh] max-h-[520px] w-auto object-contain"
                style={{ filter: "drop-shadow(0 30px 45px rgba(0,0,0,0.55))" }}
              />
            </Reveal>
          </div>
        </Section>

        {/* CONCLUSÃO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{ background: "linear-gradient(180deg, var(--ink), #000)" }}
          />
          <div className="mx-auto max-w-6xl px-5 py-28 text-center sm:px-8 md:py-36">
            <Reveal className="flex justify-center">
              <img
                src={identidade.url}
                alt="Logo oficial Element — Naturalmente Forte"
                loading="lazy"
                width={1651}
                height={616}
                className="photo-blend w-full max-w-3xl object-contain"
              />
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-10 text-[clamp(2.1rem,7vw,5rem)] leading-[0.95]">
                NATURALMENTE FORTE.
              </h2>
              <p className="mx-auto mt-8 max-w-2xl leading-[1.95] text-muted-foreground sm:text-lg">
                A Element combina ciência, desempenho, sustentabilidade e empreendedorismo em uma
                proposta de bebida energética natural desenvolvida para uma nova geração de
                consumidores.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-black px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <img src={lockup.url} alt="Logo Element" loading="lazy" width={300} height={180} className="w-36 sm:w-44" />
            <p className="mt-5 text-sm text-muted-foreground">Bebidas energéticas naturais.</p>
          </div>
          <div className="text-sm text-muted-foreground sm:text-right">
            <p className="micro">Projeto interdisciplinar</p>
            <p className="mt-3">Química • Física • Biologia • Empreendedorismo</p>
            <p className="mt-4 text-primary">@element.drink</p>
            <p className="mt-4 text-xs text-steel">Marca fictícia criada para fins acadêmicos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
