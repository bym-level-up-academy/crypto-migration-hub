import { createFileRoute } from "@tanstack/react-router";
import { content as C } from "@/content/crypto";

const HERO = C.heroImage;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boost Your Money — Atteins ta liberté financière" },
      { name: "description", content: "Coaching crypto et money mindset pour les femmes : investis en confiance, même en partant de zéro." },
      { property: "og:title", content: "Boost Your Money — Atteins ta liberté financière" },
      { property: "og:description", content: "Coaching crypto et money mindset pour les femmes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btn =
  "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:bg-brand-deep";
const h2 = "font-display text-3xl md:text-5xl font-bold text-brand-deep text-center";

function Index() {
  return (
    <div className="font-sans text-foreground">
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur px-6 py-3 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <a href="#" className="font-display text-2xl md:text-3xl font-bold text-primary">BOOST YOUR MONEY</a>
          <nav className="hidden md:flex gap-10 text-sm font-medium text-primary">
            <a href="#temoignages">Témoignages</a>
            <a href="#formations">Formations</a>
            <a href="#apropos">À propos</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href={C.ebookUrl} className={btn + " text-sm"}>Mon guide crypto offert</a>
        </div>
      </header>

      <section className="bg-hero-bg px-6 py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary md:text-center">Atteins ta liberté financière plus rapidement</h1>
            <p className="mt-6 text-lg text-primary">
              <b>Salariée, freelance, entrepreneure</b> ou <b>en reconversion</b> :<br />
              Ton ambition est là, mais un verrou te retient ? Tu veux investir, mais tu ne sais pas où commencer ou tu as peur de te tromper ? Je t'accompagne pour casser tes blocages, <b>libérer ton potentiel financier</b> et <b>gagner en confiance</b>.
            </p>
            <div className="mt-6 md:text-center"><a href={C.ebookUrl} className={btn}>Je veux recevoir mon e-book gratuit</a></div>
          </div>
          <img src={HERO} alt="Femmes réunies autour d'une table avec un bitcoin" className="w-full rounded-lg object-cover" />
        </div>
      </section>

      <section className="bg-primary px-6 py-8 text-center text-primary-foreground">
        <p className="font-display text-2xl md:text-3xl font-bold">" Rien dans la vie n'est à craindre, tout est à comprendre "</p>
        <p className="mt-3 text-sm">Marie Curie, physicienne et chimiste, première femme à remporter deux fois le prix nobel</p>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-2xl bg-card p-8 shadow-soft">
          <h2 className={h2}>Boost Your Money, c'est plus de :</h2>
          <div className="mt-6 grid gap-6 text-center md:grid-cols-3">
            {C.stats.map((s) => (
              <div key={s.n}><p className="text-4xl font-bold text-primary">{s.n}</p><p className="mt-2">{s.l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <h2 className={h2}>Avec Boost Your Money, nous accompagnons les femmes à :</h2>
        <div className="mx-auto mt-10 grid max-w-7xl gap-8 md:grid-cols-3">
          {C.pillars.map((p, i) => (
            <div key={p.t} className="rounded-2xl bg-muted p-6 shadow-soft">
              <p className="font-display text-5xl font-bold text-primary">{i + 1}</p>
              <img src={p.img} alt="" className="my-4 h-48 w-full rounded-lg object-cover" loading="lazy" />
              <h3 className="text-xl font-bold text-brand-deep">{p.t}</h3>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><a href={C.calendly} className={btn}>Réserver un appel stratégique gratuit de 30 minutes</a></div>
      </section>

      <section className="bg-hero-bg px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className={h2}>Des résultats concrets et durables... et transformateurs</h2>
          <p className="mt-6">Avec Boost Your Money, tu ne te contentes pas d'apprendre des concepts :</p>
          <p className="mt-3">👉 Tu passes à l'action, tu reprends le pouvoir total sur ton argent, et tu transformes ta vie financière en profondeur.</p>
          <ul className="mt-4 space-y-3">{C.results.map((r) => <li key={r}>{r}</li>)}</ul>
          <p className="mt-6 font-bold text-brand-deep">Parce que les femmes aussi ont le droit de rêver grand. Et surtout… de réussir.</p>
        </div>
      </section>

      <section id="temoignages" className="px-6 py-12 scroll-mt-20">
        <h2 className={h2}>Témoignages - Elles l'ont fait et toi aussi tu peux le faire !</h2>
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {C.testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="h-16 w-16 rounded-full object-cover" loading="lazy" />
                <div><p className="text-lg font-bold text-brand-deep">{t.name}</p><p className="text-sm text-muted-foreground">{t.role}</p></div>
              </div>
              <blockquote className="mt-4 whitespace-pre-line text-sm">{t.text}</blockquote>
            </figure>
          ))}
        </div>
      </section>

      <section id="formations" className="bg-muted px-6 py-12 scroll-mt-20">
        <h2 className={h2}>Mes formations pour t'accompagner dans ta réussite financière</h2>
        <div className="mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-2">
          {C.courses.map((c) => (
            <div key={c.title} className="relative rounded-2xl bg-card p-8 shadow-soft">
              {c.soon && <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">À venir</span>}
              <h3 className="font-display text-3xl font-bold text-primary">{c.title}</h3>
              <p className="mt-3 font-bold text-brand-deep">{c.pitch}</p>
              <ul className="mt-4 space-y-2 text-sm">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><a href={C.calendly} className={btn}>Réserver un appel stratégique gratuit de 30 minutes</a></div>
      </section>

      <section id="apropos" className="px-6 py-12 scroll-mt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className={h2 + " md:text-left"}>À propos de Boost Your Money</h2>
            {C.about.map((a, i) => <p key={i} className={a.b ? "font-bold text-brand-deep" : ""}>{a.t}</p>)}
            <a href={C.calendly} className={btn}>Prête pour rejoindre l'aventure ?</a>
          </div>
          <img src={C.aboutImage} alt="Emily, fondatrice de Boost Your Money" className="w-full rounded-2xl object-cover shadow-soft" loading="lazy" />
        </div>
      </section>

      <section id="faq" className="bg-hero-bg px-6 py-12 scroll-mt-20">
        <h2 className={h2}>FAQ</h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {C.faq.map((f) => (
            <details key={f.q} className="rounded-xl bg-card p-5 shadow-soft">
              <summary className="cursor-pointer font-bold text-brand-deep">{f.q}</summary>
              <p className="mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-primary px-6 py-8 text-center text-primary-foreground">
        <div className="flex justify-center gap-6 text-sm font-medium">
          {C.socials.map((s) => <a key={s.l} href={s.u} target="_blank" rel="noreferrer">{s.l}</a>)}
        </div>
        <p className="mt-4 text-xs">© Boost Your Money</p>
      </footer>
    </div>
  );
}
