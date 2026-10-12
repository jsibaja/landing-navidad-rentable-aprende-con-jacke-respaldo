import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Calculator,
  Check,
  ClipboardList,
  Gift,
  Lock,
  Plus,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  X,
} from "lucide-react";

import { CHECKOUT_URL, CURRENCY, GUARANTEE_DAYS, PRICE } from "@/lib/offer";
import {
  BENEFITS,
  BONUSES,
  FAILED_ATTEMPTS,
  FAQS,
  FOR_YOU,
  HERO_STATS,
  MODULES,
  NOT_FOR_YOU,
  OFFER_ITEMS,
  JOURNEY,
  PAINS,
  PRODUCT_GALLERY,
  PROOF_STATS,
} from "./content";
import { APP_DEMO, PRODUCT_SAMPLES } from "./samples";

const CTA_LABEL = "Quiero empezar a vender";
const JOURNEY_ICONS = [Sparkles, Utensils, Calculator, Send, ClipboardList];
const TOTAL_VALUE = OFFER_ITEMS.reduce((sum, item) => sum + item.value, 0);

// Separador de miles también en números de 4 cifras ("2.385"), que Intl "es" no agrupa.
const formatNumber = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export function Landing() {
  useReveal();
  const showStickyCta = useScrolledPast("hero");

  return (
    <div className="nr">
      <Hero />
      <Pain />
      <Journey />
      <ProductSample />
      <Benefits />
      <Modules />
      <AppDemo />
      <ForWhom />
      <Proof />
      <Bonuses />
      <Offer />
      <Guarantee />
      <Creator />
      <Faq />
      <FinalCta />
      <Legal />
      <Footer />
      <div className={`nr-sticky ${showStickyCta ? "is-shown" : ""}`} aria-hidden={!showStickyCta}>
        <div>
          <strong>{PRICE}</strong> <span>un solo pago</span>
        </div>
        <a className="nr-btn nr-btn--small" href={CHECKOUT_URL} tabIndex={showStickyCta ? 0 : -1}>
          Comprar ahora
        </a>
      </div>
    </div>
  );
}

/* ---------- Secciones ---------- */

function Hero() {
  return (
    <header id="hero" className="nr-sec nr-hero">
      <div className="nr-container nr-hero__grid">
        <div className="nr-hero__copy">
          <p className="nr-kicker reveal">Galletas · cenas · coronas · regalos</p>
          <h1 className="nr-h1 reveal">
            <span className="nr-gradient-text">Gana dinero</span> esta Navidad vendiendo lo que
            haces con tus manos
          </h1>
          <p className="nr-lead reveal">
            Aprende a hacer productos navideños que la gente compra y a cobrarlos con ganancia.{" "}
            <strong>Aunque nunca hayas vendido nada.</strong>
          </p>
          <ul className="nr-hero__stats reveal reveal-stagger">
            {HERO_STATS.map((stat) => (
              <li key={stat.label}>
                <CountUp value={stat.value} />
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="nr-hero__visual reveal">
          <div className="nr-hero__frame">
            <img
              src="/img/hero.webp"
              alt="Emprendedora empacando galletas navideñas en su cocina"
              width={928}
              height={1152}
              fetchPriority="high"
            />
          </div>
          <div className="nr-chip nr-chip--a">
            <span className="nr-chip__icon">
              <Utensils />
            </span>
            <div>
              <strong>Paso 4 de 9</strong>
              <small>Está listo cuando dora en los bordes</small>
            </div>
          </div>
          <div className="nr-chip nr-chip--b">
            <span className="nr-chip__icon nr-chip__icon--pine">
              <BadgeCheck />
            </span>
            <div>
              <strong>Pedido de Ana</strong>
              <small>Anticipo recibido</small>
            </div>
          </div>
          <span className="nr-float nr-float--1" aria-hidden />
          <span className="nr-float nr-float--2" aria-hidden />
        </div>
      </div>
    </header>
  );
}

function Pain() {
  return (
    <section className="nr-sec nr-pat-b">
      <div className="nr-container nr-pain">
        <div className="nr-pain__image reveal">
          <img
            src="/img/dolor.webp"
            alt="Mujer agobiada de noche haciendo cuentas en la cocina"
            width={1200}
            height={896}
            loading="lazy"
          />
        </div>
        <div>
          <p className="nr-eyebrow reveal">¿Te pasa esto?</p>
          <h2 className="nr-h2 reveal">Si llegaste hasta aquí, probablemente…</h2>
          <ul className="nr-pain__list reveal-stagger">
            {PAINS.map((pain) => (
              <li key={pain} className="reveal">
                <span className="nr-pain__dot" aria-hidden />
                {pain}
              </li>
            ))}
          </ul>
          <p className="nr-pain__close reveal">
            No es falta de talento. <strong>Es que nadie te dio el camino completo.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="camino" className="nr-sec nr-pat-c">
      <div className="nr-container">
        <div className="nr-narrow nr-center">
          <p className="nr-eyebrow reveal">Por qué no funcionó antes</p>
          <h2 className="nr-h2 reveal">
            Lo que intentaste no falló por ti. Falló porque te daba solo un pedazo.
          </h2>
        </div>
        <div className="nr-attempts reveal-stagger">
          {FAILED_ATTEMPTS.map((attempt) => (
            <div key={attempt.title} className="nr-attempt reveal">
              <X aria-hidden />
              <div>
                <strong>{attempt.title}</strong>
                <p>{attempt.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="nr-narrow nr-center">
          <p className="nr-eyebrow reveal">Tu temporada, paso a paso</p>
          <h2 className="nr-h2 reveal">
            Así vas a llegar a tu <span className="nr-gradient-text">primera venta</span>
          </h2>
          <p className="nr-lead reveal">
            Vender en Navidad tiene cinco momentos, y si falla uno, se cae todo. Esta vez los vas a
            recorrer en orden, sin saltarte ninguno:
          </p>
        </div>
        <ol className="nr-pillars reveal-stagger">
          {JOURNEY.map((step, i) => {
            const Icon = JOURNEY_ICONS[i] ?? Sparkles;
            return (
              <li key={step.name} className="nr-card nr-pillar reveal">
                <div className="nr-pillar__image">
                  <img src={step.image} alt="" width={1000} height={747} loading="lazy" />
                  <span className="nr-pillar__letter">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="nr-pillar__body">
                  <span className="nr-icon-badge">
                    <Icon />
                  </span>
                  <h3>{step.name}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="nr-journey__close nr-center reveal">
          Y lo vas a ver con tus propios ojos: tu primer producto terminado, tu primer precio con
          ganancia, tu primer pedido pagado. <strong>Sí puedes.</strong>
        </p>
      </div>
    </section>
  );
}

function ProductSample() {
  const [active, setActive] = useState(0);
  const product = PRODUCT_SAMPLES[active] ?? PRODUCT_SAMPLES[0];
  return (
    <section className="nr-sec nr-pat-b">
      <div className="nr-container">
        <div className="nr-narrow nr-center">
          <p className="nr-eyebrow reveal">Una muestra real</p>
          <h2 className="nr-h2 reveal">Así de claro vas a aprender</h2>
          <p className="nr-muted reveal">
            Este es uno de los 285 productos, tal como lo vas a ver: cada paso con su foto y la
            señal de que te quedó bien. Elige cuál quieres ver.
          </p>
        </div>
        <div className="nr-tabs reveal" role="tablist" aria-label="Producto de muestra">
          {PRODUCT_SAMPLES.map((sample, i) => (
            <button
              key={sample.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={active === i ? "is-active" : ""}
              onClick={() => setActive(i)}
            >
              {sample.label}
            </button>
          ))}
        </div>
        <div className="nr-sample" key={product.id}>
          <div className="nr-sample__head">
            <h3>{product.name}</h3>
            <p>{product.tagline}</p>
            <ul>
              {product.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
          <ol className="nr-steps">
            {product.steps.map((step, i) => (
              <li key={step.image} className="nr-step">
                <div className="nr-step__image">
                  <img src={step.image} alt={step.title} width={640} height={480} loading="lazy" />
                  <span>Paso {i + 1}</span>
                </div>
                <div className="nr-step__body">
                  <strong>{step.title}</strong>
                  <p>
                    <em>Está listo cuando</em> {step.check}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="nr-sample__close nr-center reveal">
          Y así, con cada uno de los 285 productos: desde la cena por encargo hasta la canasta para
          empresas.
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="nr-sec nr-pat-b">
      <div className="nr-container">
        <div className="nr-narrow nr-center">
          <p className="nr-eyebrow reveal">Lo que vas a lograr</p>
          <h2 className="nr-h2 reveal">Esto es lo que vas a lograr esta temporada</h2>
        </div>
        <figure className="nr-banner reveal">
          <img
            src="/img/logro-familia.webp"
            alt="Familia abriendo regalos junto al árbol de Navidad"
            width={1584}
            height={672}
            loading="lazy"
          />
          <figcaption>
            Al final, de eso se trata: una Navidad tranquila, con regalos y cena pagados con lo que
            tú ganaste.
          </figcaption>
        </figure>
        <ul className="nr-benefits reveal-stagger">
          {BENEFITS.map((benefit) => (
            <li key={benefit.title} className="nr-benefit reveal">
              <span className="nr-check">
                <Check />
              </span>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="nr-sec nr-pat-d">
      <div className="nr-bg-image" style={{ backgroundImage: "url(/img/og.webp)" }} aria-hidden />
      <div className="nr-container nr-modules">
        <div className="nr-modules__image reveal">
          <img
            src="/img/contenido.webp"
            alt="Celular con el paso a paso de galletas navideñas en la app"
            width={928}
            height={1152}
            loading="lazy"
          />
        </div>
        <div>
          <p className="nr-eyebrow reveal">Tu herramienta</p>
          <h2 className="nr-h2 reveal">Para lograrlo, tienes acceso a Navidad Rentable</h2>
          <p className="nr-muted reveal">
            Una herramienta en tu celular con todo lo que necesitas, en el orden en que lo vas a
            necesitar:
          </p>
          <ol className="nr-timeline">
            {MODULES.map((module, i) => (
              <li key={module.title} className="reveal">
                <span className="nr-timeline__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="nr-timeline__text">
                  <h3>{module.title}</h3>
                  <ul>
                    {module.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="nr-phone nr-phone--mini">
                  <img
                    src={module.screen}
                    alt={`Pantalla de la app: ${module.title}`}
                    width={520}
                    height={1125}
                    loading="lazy"
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function AppDemo() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const stage = APP_DEMO[active] ?? APP_DEMO[0];

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((i) => (i + 1) % APP_DEMO.length), 6000);
    return () => window.clearInterval(timer);
  }, [auto]);

  return (
    <section className="nr-sec nr-pat-c">
      <div className="nr-container">
        <div className="nr-narrow nr-center">
          <p className="nr-eyebrow reveal">Mira cómo funciona</p>
          <h2 className="nr-h2 reveal">Así se ve en tu celular</h2>
          <p className="nr-muted reveal">
            Pantallas reales, en el mismo orden en que vas a avanzar: de elegir qué vender a cobrar
            tu último pedido.
          </p>
        </div>
        <div className="nr-tabs nr-tabs--steps reveal" role="tablist" aria-label="Etapas">
          {APP_DEMO.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={active === i ? "is-active" : ""}
              onClick={() => {
                setAuto(false);
                setActive(i);
              }}
            >
              <span>{i + 1}</span>
              {item.label}
            </button>
          ))}
        </div>
        <div className="nr-phones" key={stage.id}>
          {stage.shots.map((shot) => (
            <figure key={shot.image} className="nr-phone-shot">
              <div className="nr-phone">
                <img src={shot.image} alt={shot.caption} width={520} height={1125} loading="lazy" />
              </div>
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  return (
    <section className="nr-sec nr-pat-a">
      <div className="nr-container">
        <div className="nr-narrow nr-center">
          <p className="nr-eyebrow reveal">Sin rodeos</p>
          <h2 className="nr-h2 reveal">¿Es para ti?</h2>
          <p className="nr-muted reveal">
            Mamás, estudiantes, abuelas que cocinan rico, gente hábil con las manos: si tienes ganas
            de intentarlo, aquí tienes por dónde empezar.
          </p>
        </div>
        <figure className="nr-banner nr-banner--plain reveal">
          <img
            src="/img/para-quien.webp"
            alt="Tres personas preparando productos navideños en sus casas"
            width={1376}
            height={768}
            loading="lazy"
          />
        </figure>
        <div className="nr-forwhom">
          <div className="nr-card nr-forwhom__yes reveal">
            <h3>Es para ti si…</h3>
            <ul>
              {FOR_YOU.map((item) => (
                <li key={item}>
                  <Check aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="nr-card nr-forwhom__no reveal">
            <h3>No es para ti si…</h3>
            <ul>
              {NOT_FOR_YOU.map((item) => (
                <li key={item}>
                  <X aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="nr-sec nr-pat-b">
      <div className="nr-container">
        <div className="nr-narrow nr-center">
          <p className="nr-eyebrow reveal">No son promesas</p>
          <h2 className="nr-h2 reveal">Todo lo que vas a aprender ya está listo para ti</h2>
          <p className="nr-muted reveal">
            Cada ficha se revisó una por una: cantidades, rendimientos, medidas y utensilios que
            cuadran entre sí.
          </p>
        </div>
        <ul className="nr-proof reveal-stagger">
          {PROOF_STATS.map((stat) => (
            <li key={stat.label} className="nr-card reveal">
              <CountUp value={stat.value} />
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
        <h3 className="nr-h3 nr-center reveal">Algunos de los 285 productos que vas a aprender</h3>
        <ul className="nr-gallery reveal-stagger">
          {PRODUCT_GALLERY.map((product) => (
            <li key={product.name} className="reveal">
              <img src={product.image} alt={product.name} width={800} height={800} loading="lazy" />
              <div>
                <strong>{product.name}</strong>
                <span>{product.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Bonuses() {
  return (
    <section className="nr-sec nr-pat-e">
      <div className="nr-container">
        <div className="nr-narrow nr-center">
          <p className="nr-eyebrow reveal">Incluidos sin costo extra</p>
          <h2 className="nr-h2 reveal">Bonos que recibes hoy con tu acceso</h2>
        </div>
        <ul className="nr-bonuses reveal-stagger">
          {BONUSES.map((bonus) => (
            <li key={bonus.title} className="nr-card nr-bonus reveal">
              <div className="nr-bonus__image">
                <img src={bonus.image} alt="" width={1000} height={747} loading="lazy" />
                <span className="nr-badge">Gratis hoy</span>
                <div className="nr-phone nr-phone--inset">
                  <img
                    src={bonus.screen}
                    alt={`Pantalla de la app: ${bonus.title}`}
                    width={520}
                    height={1125}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="nr-bonus__body">
                <h3>{bonus.title}</h3>
                <p>{bonus.text}</p>
                <p className="nr-bonus__value">
                  Valor <s>${bonus.value}</s> <strong>Incluido</strong>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="oferta" className="nr-sec nr-pat-f">
      <div className="nr-container">
        <div className="nr-narrow nr-center">
          <p className="nr-eyebrow reveal">La oferta</p>
          <h2 className="nr-h2 reveal">
            Tu primera temporada vendiendo, con todo lo que necesitas
          </h2>
        </div>
        <div className="nr-offer">
          <div className="nr-card nr-offer__list reveal">
            <h3>Todo lo que recibes hoy</h3>
            <ul>
              {OFFER_ITEMS.map((item) => (
                <li key={item.name}>
                  <Check aria-hidden />
                  <span>{item.name}</span>
                  <s>${item.value}</s>
                </li>
              ))}
            </ul>
            <p className="nr-offer__total">
              Valor total <s>${TOTAL_VALUE}</s>
            </p>
          </div>
          <div className="nr-card nr-offer__price reveal">
            <span className="nr-badge nr-badge--pine">Un solo pago · Acceso de por vida</span>
            <img
              src="/img/oferta.webp"
              alt="Celular con la app Navidad Rentable rodeado de productos navideños"
              width={928}
              height={1152}
              loading="lazy"
            />
            <p className="nr-offer__before">
              Valor total <s>${TOTAL_VALUE}</s>
            </p>
            <p className="nr-offer__now">
              {PRICE} <small>{CURRENCY}</small>
            </p>
            <p className="nr-muted nr-small">Sin mensualidades. Pagas una vez y es tuya.</p>
            <BuyButton />
            <TrustRow />
            <p className="nr-small nr-muted">
              Recibes el acceso en tu correo apenas se confirma el pago.
            </p>
          </div>
        </div>
        <ol className="nr-access reveal-stagger">
          <li className="reveal">
            <span>1</span>
            <div>
              <strong>Pagas una sola vez</strong>
              <p>En la página segura de Hotmart, con tarjeta u otros medios de tu país.</p>
            </div>
          </li>
          <li className="reveal">
            <span>2</span>
            <div>
              <strong>Te llega el acceso a tu correo</strong>
              <p>Apenas se confirma el pago, con el enlace para entrar.</p>
            </div>
          </li>
          <li className="reveal">
            <span>3</span>
            <div>
              <strong>La abres y empiezas</strong>
              <p>Escribes tu nombre, la instalas en tu celular y eliges qué vas a vender.</p>
            </div>
          </li>
        </ol>
        <p className="nr-urgency reveal">
          Los pedidos de Navidad se toman desde noviembre. Cada semana que esperas es una semana
          menos de temporada para vender.
        </p>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="nr-sec nr-pat-a">
      <div className="nr-container">
        <div className="nr-guarantee reveal">
          <span className="nr-guarantee__seal">
            <Award />
            <strong>{GUARANTEE_DAYS}</strong>
            <small>días</small>
          </span>
          <h2 className="nr-h2">Garantía de {GUARANTEE_DAYS} días</h2>
          <p>
            Entra, mira los productos y calcula tu primer precio con tus propios costos. Si dentro
            de {GUARANTEE_DAYS} días sientes que no es para ti, pides el reembolso desde Hotmart y
            te devuelven el 100 % de tu dinero. Todo el riesgo lo asumimos nosotros.
          </p>
        </div>
      </div>
    </section>
  );
}

function Creator() {
  return (
    <section className="nr-sec nr-pat-b">
      <div className="nr-container nr-creator">
        <div className="nr-creator__image reveal">
          <img
            src="/img/creador.webp"
            alt="Mesa de trabajo con fotos de productos navideños y el diseño de la app"
            width={900}
            height={1117}
            loading="lazy"
          />
        </div>
        <div>
          <p className="nr-eyebrow reveal">Quién está detrás</p>
          <h2 className="nr-h2 reveal">Hecha por Systems Factory, ficha por ficha</h2>
          <p className="reveal">
            Systems Factory crea herramientas simples para emprender desde casa. Navidad Rentable
            nació de una pregunta que escuchamos cada año: «¿qué puedo vender esta Navidad y cuánto
            cobro?».
          </p>
          <p className="reveal">
            Por eso no hicimos otro recetario. Hicimos un camino completo y lo revisamos con
            criterio de negocio: que cada receta rinda lo que dice, que cada precio salga de costos
            reales y que cada paso tenga una foto que te muestre cómo debe verse.
          </p>
          <ul className="nr-creds reveal-stagger">
            <li className="reveal">
              <Star aria-hidden /> 285 fichas revisadas una por una
            </li>
            <li className="reveal">
              <Star aria-hidden /> 185 productos con referencias de consulta
            </li>
            <li className="reveal">
              <Star aria-hidden /> Avisos de seguridad en alimentos, conservas, cera y jabones
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="nr-sec nr-pat-d">
      <div
        className="nr-bg-image"
        style={{ backgroundImage: "url(/img/producto-galletas.webp)" }}
        aria-hidden
      />
      <div className="nr-container nr-narrow">
        <div className="nr-center">
          <p className="nr-eyebrow reveal">Preguntas frecuentes</p>
          <h2 className="nr-h2 reveal">Lo que suelen preguntar antes de empezar</h2>
        </div>
        <ul className="nr-faq">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.q} className={`nr-faq__item reveal ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{faq.q}</span>
                  <Plus aria-hidden />
                </button>
                <div id={`faq-${i}`} className="nr-faq__answer" role="region">
                  <div>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="nr-sec nr-final">
      <div className="nr-final__bg" style={{ backgroundImage: "url(/img/cta.webp)" }} aria-hidden />
      <div className="nr-container nr-narrow nr-center">
        <Gift className="nr-final__icon reveal" aria-hidden />
        <h2 className="nr-h2 reveal">Este diciembre, que la ganancia se quede en tu casa</h2>
        <p className="nr-lead reveal">
          Tú ya sabes cocinar o crear con tus manos. Lo que te faltaba era el camino: saber qué
          vender, cuánto cobrar y cómo entregar a tiempo. Este año puedes llegar al 24 con tus
          pedidos entregados y tu ganancia en la mano.
        </p>
        <div className="reveal">
          <BuyButton />
          <TrustRow />
          <p className="nr-small nr-final__price">
            {PRICE} {CURRENCY} · un solo pago · acceso de por vida
          </p>
        </div>
      </div>
    </section>
  );
}

function Legal() {
  return (
    <section className="nr-legal">
      <div className="nr-container nr-narrow">
        <p>
          Los resultados dependen del tiempo, el esfuerzo y el mercado de cada persona. Navidad
          Rentable es una herramienta educativa y de organización: no garantiza ingresos. Antes de
          vender alimentos, revisa las normas sanitarias de tu localidad.
        </p>
        <p>
          El pago se procesa de forma segura a través de Hotmart. Este sitio no forma parte de
          Facebook ni de Meta, ni está respaldado por ellos.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="nr-footer">
      <div className="nr-container nr-footer__row">
        <span className="nr-footer__brand">
          <img src="/icon.svg" alt="" width={28} height={28} /> Navidad Rentable
        </span>
        <span>© {new Date().getFullYear()} Systems Factory. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

/* ---------- Piezas ---------- */

function BuyButton({ children = CTA_LABEL }: { children?: ReactNode }) {
  return (
    <a className="nr-btn" href={CHECKOUT_URL}>
      {children}
      <ArrowRight aria-hidden />
    </a>
  );
}

function TrustRow() {
  return (
    <ul className="nr-trust">
      <li>
        <ShieldCheck aria-hidden /> Compra segura
      </li>
      <li>
        <Award aria-hidden /> Garantía de {GUARANTEE_DAYS} días
      </li>
      <li>
        <Lock aria-hidden /> Privacidad protegida
      </li>
    </ul>
  );
}

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / 1400, 1);
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(step);
        };
        setShown(0);
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <strong ref={ref} className="nr-count">
      {formatNumber(shown)}
    </strong>
  );
}

/* ---------- Hooks ---------- */

// Las secciones se renderizan visibles en el servidor; solo se ocultan para animarlas
// cuando el JS ya cargó, y lo que ya está en pantalla aparece de inmediato.
function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const viewport = window.innerHeight;
    for (const el of items) {
      if (el.getBoundingClientRect().top < viewport) el.classList.add("is-visible");
    }
    document.documentElement.classList.add("nr-animate");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    for (const el of items) if (!el.classList.contains("is-visible")) io.observe(el);
    return () => io.disconnect();
  }, []);
}

function useScrolledPast(id: string) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry) setPast(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [id]);
  return past;
}
