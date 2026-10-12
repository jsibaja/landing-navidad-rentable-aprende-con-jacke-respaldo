import { createFileRoute } from "@tanstack/react-router";

import { Landing } from "@/components/landing/Landing";
import landingCss from "@/components/landing/landing.css?url";

const TITLE = "Navidad Rentable · Gana dinero esta Navidad vendiendo lo que haces con tus manos";
const DESCRIPTION =
  "Aprende a hacer y vender productos navideños desde tu casa: qué vender, cómo hacerlo paso a paso, cuánto cobrar con ganancia y cómo entregar tus pedidos. Aunque nunca hayas vendido nada.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://navidad-rentable-home.lovable.app/img/og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "675" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://navidad-rentable-home.lovable.app/img/og.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: landingCss },
      { rel: "preload", as: "image", href: "/img/hero.webp", type: "image/webp" },
    ],
  }),
  component: Landing,
});
