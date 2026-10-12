// Muestra real sacada de la app (src/data y docs/manual del repo de Navidad Rentable).
// Generado: no editar a mano los pasos; vuelve a exportarlos si cambia la ficha.

export const PRODUCT_SAMPLES = [
  {
    id: "galletas-mantequilla-decoradas",
    label: "Galletas decoradas",
    name: "Galletas de mantequilla decoradas",
    tagline:
      "Galletas pintadas con glasé real: cada una es un pequeño regalo y se cobran por pieza.",
    facts: [
      "Rinde 30 galletas de 7 cm",
      "3 h de trabajo",
      "Dificultad media",
      "Inversión media",
      "Se prepara hasta 10 días antes",
    ],
    steps: [
      {
        title: "Haz la masa",
        check:
          "la mezcla está cremosa y lisa, sin trozos de mantequilla ni líquido suelto, y no se ve esponjosa.",
        image: "/muestra/galletas-mantequilla-decoradas/01.webp",
      },
      {
        title: "Agrega los secos",
        check: "la masa es firme, lisa y se separa limpia del bol en una sola pieza.",
        image: "/muestra/galletas-mantequilla-decoradas/02.webp",
      },
      {
        title: "Estira y refrigera",
        check:
          "las láminas tienen 6 mm parejos, están frías y firmes, y al tocar el papel la masa no cede.",
        image: "/muestra/galletas-mantequilla-decoradas/03.webp",
      },
      {
        title: "Corta y hornea",
        check:
          "las figuras mantienen bordes rectos y definidos, la superficie es plana y pálida, y están frías por completo.",
        image: "/muestra/galletas-mantequilla-decoradas/04.webp",
      },
      {
        title: "Prepara el glasé",
        check:
          "el glasé es blanco, brillante y forma picos firmes que no se doblan al levantar la batidora.",
        image: "/muestra/galletas-mantequilla-decoradas/05.webp",
      },
      {
        title: "Ajusta colores y consistencias",
        check:
          "cada color tiene dos consistencias: una espesa que mantiene su forma y una fluida que borra su línea en 10 a 12 segundos.",
        image: "/muestra/galletas-mantequilla-decoradas/06.webp",
      },
      {
        title: "Delinea",
        check:
          "cada galleta tiene un contorno continuo, cerrado y del mismo grosor, que ya no brilla de húmedo.",
        image: "/muestra/galletas-mantequilla-decoradas/07.webp",
      },
      {
        title: "Rellena",
        check:
          "la superficie está lisa, brillante, sin burbujas y el relleno llega a todas las esquinas sin pasarse del contorno.",
        image: "/muestra/galletas-mantequilla-decoradas/08.webp",
      },
      {
        title: "Agrega detalles",
        check: "los detalles quedan en relieve, nítidos y sin hundirse en la base.",
        image: "/muestra/galletas-mantequilla-decoradas/09.webp",
      },
      {
        title: "Deja secar y empaca",
        check:
          "el glasé está totalmente duro, no deja marca al presionarlo y las bolsas cierran sin tocar la decoración.",
        image: "/muestra/galletas-mantequilla-decoradas/10.webp",
      },
    ],
  },
  {
    id: "corona-pino-natural",
    label: "Corona de pino",
    name: "Corona de pino natural",
    tagline:
      "La corona clásica de puerta, con ramas frescas, piñas, bayas y lazo de terciopelo rojo.",
    facts: [
      "Rinde 1 corona (45 cm de diámetro)",
      "1 h 15 min de trabajo",
      "Dificultad media",
      "Inversión baja",
      "Se prepara hasta 3 días antes",
    ],
    steps: [
      {
        title: "Hidrata el pino",
        check:
          "las ramas están firmes y flexibles, de color verde vivo, y no sueltan agujas al sacudirlas.",
        image: "/muestra/corona-pino-natural/01.webp",
      },
      {
        title: "Arma los manojos",
        check:
          "tienes unos 20 manojos parecidos en tamaño y volumen, cada uno con 2 o 3 ramitas del mismo largo.",
        image: "/muestra/corona-pino-natural/02.webp",
      },
      {
        title: "Ata el primer manojo",
        check:
          "el primer manojo está firme sobre el aro, en diagonal, y el alambre sigue unido al carrete.",
        image: "/muestra/corona-pino-natural/03.webp",
      },
      {
        title: "Cubre el aro",
        check:
          "el aro está cubierto casi por completo con manojos alternados afuera y adentro, sin tallos ni alambre a la vista.",
        image: "/muestra/corona-pino-natural/04.webp",
      },
      {
        title: "Cierra la corona",
        check:
          "el círculo está cerrado sin que se note dónde empieza y dónde termina, y no se ve el alambre del remate.",
        image: "/muestra/corona-pino-natural/05.webp",
      },
      {
        title: "Coloca el colgador",
        check:
          "hay un lazo de alambre firme en la parte trasera superior, que aguanta el peso de la corona al levantarla de él.",
        image: "/muestra/corona-pino-natural/06.webp",
      },
      {
        title: "Decora",
        check:
          "las piñas y las bayas están firmes y bien repartidas, y ningún alambre se ve por delante.",
        image: "/muestra/corona-pino-natural/07.webp",
      },
      {
        title: "Haz el lazo",
        check:
          "el lazo tiene cuatro lazadas parejas, está firme sobre la corona y las puntas caen con un corte en V limpio.",
        image: "/muestra/corona-pino-natural/08.webp",
      },
      {
        title: "Rocía y empaca",
        check:
          "la corona se ve redonda y pareja, el pino está húmedo y queda guardada en su bolsa abierta en un lugar fresco.",
        image: "/muestra/corona-pino-natural/09.webp",
      },
    ],
  },
] as const;

export const APP_DEMO = [
  {
    id: "elige",
    label: "Elige qué vender",
    shots: [
      {
        image: "/pantallas/04-test.webp",
        caption: "Responde 8 preguntas y descubre qué negocio te conviene",
      },
      {
        image: "/pantallas/05-idea-detalle.webp",
        caption: "Cada idea con sus productos, su inversión y su plan",
      },
    ],
  },
  {
    id: "aprende",
    label: "Aprende a hacerlo",
    shots: [
      {
        image: "/pantallas/11-ficha.webp",
        caption: "Todo el producto en una ficha: rinde, tiempo y dificultad",
      },
      {
        image: "/pantallas/15-paso-a-paso.webp",
        caption: "Un paso por pantalla, con foto y letra grande",
      },
    ],
  },
  {
    id: "precio",
    label: "Ponle precio",
    shots: [
      {
        image: "/pantallas/17-calculadora.webp",
        caption: "Escribe lo que pagaste en la tienda",
      },
      {
        image: "/pantallas/18-calculadora-resultado.webp",
        caption: "Ve tu precio sugerido y cuánto ganas por unidad",
      },
    ],
  },
  {
    id: "vende",
    label: "Consigue pedidos",
    shots: [
      {
        image: "/pantallas/24-mi-menu.webp",
        caption: "Tu menú con fotos y precios, listo para compartir",
      },
      {
        image: "/pantallas/36-mensajes.webp",
        caption: "Mensajes listos para WhatsApp con tu negocio",
      },
    ],
  },
  {
    id: "entrega",
    label: "Entrega y cobra",
    shots: [
      {
        image: "/pantallas/28-pedido-detalle.webp",
        caption: "Cada pedido con su anticipo y su saldo",
      },
      {
        image: "/pantallas/33-finanzas.webp",
        caption: "Cuánto vendiste y cuánto ganaste en la temporada",
      },
    ],
  },
] as const;
