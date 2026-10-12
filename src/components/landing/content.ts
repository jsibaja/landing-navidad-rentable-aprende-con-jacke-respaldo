// Textos de la landing. Las cifras salen de la ficha técnica de la app
// (docs/ficha-tecnica en el repo de Navidad Rentable): no inventar números.

export const HERO_STATS = [
  { value: 285, label: "productos con foto real" },
  { value: 2385, label: "pasos, cada uno con su foto" },
  { value: 21, label: "países con su moneda" },
];

export const PAINS = [
  "Cada diciembre ves a otras personas vender galletas, cenas y coronas, y piensas: «yo también podría». Pero no sabes por dónde empezar.",
  "Tienes decenas de ideas guardadas en el celular y ninguna te dice cuánto cuesta hacerla ni cuánto cobrar.",
  "Ya vendiste alguna vez y, al hacer cuentas, te diste cuenta de que trabajaste toda la noche para casi no ganar nada.",
  "Te da miedo gastar en ingredientes o materiales y que el producto no quede como en la foto.",
  "Los pedidos te llegan por WhatsApp, los anotas en un papel y ya no sabes quién pagó el anticipo ni qué entregas mañana.",
  "Llega el 24 de diciembre y sientes que otra vez se te fue la temporada.",
];

export const FAILED_ATTEMPTS = [
  {
    title: "Recetas sueltas en internet",
    text: "Te enseñan a hacerlo, pero no a cobrarlo ni a venderlo.",
  },
  {
    title: "Ideas bonitas en redes",
    text: "Se ven increíbles, pero nadie te dice cuánto cuestan ni si se pueden vender.",
  },
  {
    title: "Copiar el precio de otra persona",
    text: "Sus costos no son los tuyos. Así se vende a pérdida sin darse cuenta.",
  },
  {
    title: "Un cuaderno para los pedidos",
    text: "Funciona con 3 pedidos. Con 20, se pierden anticipos y entregas.",
  },
];

// El recorrido que hace la persona: lo que logra en cada etapa, no funciones de la app.
export const JOURNEY = [
  {
    image: "/img/logro-elegir.webp",
    name: "Descubres qué te conviene vender",
    text: "Según tu tiempo, tu cocina y lo que puedes invertir. Sin adivinar y sin copiar a nadie.",
  },
  {
    image: "/img/logro-aprender.webp",
    name: "Aprendes a hacerlo bien desde la primera vez",
    text: "Paso a paso, viendo cómo debe quedar cada etapa y sabiendo cuándo está listo.",
  },
  {
    image: "/img/logro-precio.webp",
    name: "Sabes cuánto cobrar y cuánto ganas",
    text: "Con lo que tú pagas en la tienda de tu ciudad, en tu moneda. Ganancia de verdad, no a ojo.",
  },
  {
    image: "/img/logro-pedidos.webp",
    name: "Consigues tus primeros pedidos",
    text: "Muestras lo que haces con tu menú y tus precios, y sabes qué escribir para que te compren.",
  },
  {
    image: "/img/logro-entregar.webp",
    name: "Entregas, cobras y quieres repetir",
    text: "Cada pedido con su anticipo, su fecha y su cobro. Llegas al 24 con todo entregado y tu ganancia en la mano.",
  },
];

export const BENEFITS = [
  {
    title: "Sabrás qué vender esta Navidad",
    text: "El test cruza tu tiempo, tu cocina y tu presupuesto y te dice qué negocio te conviene.",
  },
  {
    title: "Tus productos quedarán como en la foto",
    text: "2.385 pasos con foto y más de 10.000 indicaciones con medidas, tiempos y utensilios.",
  },
  {
    title: "Cobrarás con ganancia de verdad",
    text: "Costo por unidad, precio sugerido, precio por mayor y ganancia, con tus propios costos.",
  },
  {
    title: "Podrás cobrar más por lo mismo",
    text: "Cada producto trae ideas para venderlo más caro y su margen recomendado.",
  },
  {
    title: "Evitarás los errores que cuestan dinero",
    text: "1.002 errores comunes explicados antes de que gastes un solo ingrediente.",
  },
  {
    title: "Tendrás tu catálogo listo para WhatsApp",
    text: "Tu menú con fotos y precios, listo para enviar o subir a tus estados.",
  },
  {
    title: "Sabrás qué entregar cada día",
    text: "Entregas ordenadas por hora y zona, y quién te debe el saldo.",
  },
  {
    title: "Comprarás solo lo necesario",
    text: "La lista de compras se arma sola con tus pedidos.",
  },
  {
    title: "Te verás como un negocio serio",
    text: "Etiquetas, tarjetas de agradecimiento y stickers con tu nombre y tu logo.",
  },
  {
    title: "Aprenderás a vender, no solo a cocinar",
    text: "Cómo mostrar tus productos, responder a «está caro» y lograr que tus clientes vuelvan.",
  },
];

export const MODULES = [
  {
    title: "Catálogo de 285 productos para vender",
    screen: "/pantallas/09-recetas-galletas.webp",
    points: [
      "175 de cocina: cenas por encargo, galletas, postres, panetones, dulces, bebidas y conservas.",
      "110 de decoración y regalos: coronas, centros de mesa, canastas, velas, adornos y detalles para empresas.",
      "Cada uno con foto real, ingredientes o materiales, empaque, conservación, transporte y margen recomendado.",
    ],
  },
  {
    title: "Ideas de negocio y tu camino a la primera venta",
    screen: "/pantallas/07-camino.webp",
    points: [
      "12 ideas de negocio con sus productos, inversión, equipo y plan.",
      "Test «¿Qué negocio es para ti?» de 8 preguntas.",
      "6 pasos guiados con un solo botón para lo que te toca hacer ahora.",
    ],
  },
  {
    title: "Modo paso a paso para cocinar o armar",
    screen: "/pantallas/15-paso-a-paso.webp",
    points: [
      "Un paso por pantalla, con letra grande y la pantalla siempre encendida.",
      "Lista de ingredientes o materiales para marcar lo que ya tienes.",
      "Avisos de seguridad donde importan: cocción, conservas, cera, silicón y jabones.",
    ],
  },
  {
    title: "Herramientas para ponerle precio",
    screen: "/pantallas/16-precios.webp",
    points: [
      "Calculadora de costo y precio con lo que pagas en la tienda.",
      "Escalador de recetas, precio del envío y meta de ganancia.",
      "Cuánto necesitas invertir para empezar.",
    ],
  },
  {
    title: "Pedidos y cobros de punta a punta",
    screen: "/pantallas/26-pedidos-lista.webp",
    points: [
      "Pedidos con anticipo, saldo pendiente y estados hasta «Pagado».",
      "Entregas del día, clientes, producción y lista de compras.",
      "Finanzas: cuánto vendiste y cuánto ganaste.",
    ],
  },
  {
    title: "Academia para vender",
    screen: "/pantallas/34-academia.webp",
    points: [
      "25 lecciones cortas: precios, producto, ventas, operación y temporada.",
      "Mensajes listos, calendario de publicaciones e ideas de nombres.",
      "Imprimibles con tu marca, listos en PDF.",
    ],
  },
];

export const FOR_YOU = [
  "Cocinas rico o eres hábil con las manualidades y nunca has vendido nada.",
  "Quieres un ingreso extra en diciembre sin salir de tu casa.",
  "Ya vendes algo, pero pones el precio «al ojo».",
  "Te enredas con los pedidos que llegan por WhatsApp.",
  "Tienes poco para invertir: 187 productos son de inversión baja.",
  "Quieres que alguien te guíe paso a paso, sin tecnicismos.",
];

export const NOT_FOR_YOU = [
  "Buscas ganar dinero sin cocinar ni armar nada.",
  "Esperas que alguien venda por ti: aquí tienes el camino, pero los pasos los das tú.",
  "Quieres precios fijos inventados: aquí calculas con tus costos reales.",
  "Necesitas una tienda en línea que cobre con tarjeta por ti.",
  "No piensas dedicarle ni una tarde a tu negocio esta temporada.",
];

export const PROOF_STATS = [
  { value: 285, label: "productos explicados de principio a fin" },
  { value: 2385, label: "pasos, todos con foto" },
  { value: 10201, label: "indicaciones de «Cómo hacerlo»" },
  { value: 1002, label: "errores comunes explicados" },
  { value: 984, label: "ideas para venderlo más caro" },
  { value: 80, label: "mensajes listos para vender" },
];

export const PRODUCT_GALLERY = [
  {
    image: "/img/producto-galletas.webp",
    name: "Galletas decoradas",
    detail: "25 productos de galletas",
  },
  {
    image: "/img/producto-cena.webp",
    name: "Cena navideña por encargo",
    detail: "41 cenas y platos",
  },
  { image: "/img/producto-corona.webp", name: "Coronas navideñas", detail: "13 coronas" },
  {
    image: "/img/producto-canasta.webp",
    name: "Canastas y regalos",
    detail: "19 cajas, canastas y anchetas",
  },
  {
    image: "/img/producto-paneton.webp",
    name: "Panetones y panes",
    detail: "13 panetones, panes y roscas",
  },
  { image: "/img/producto-velas.webp", name: "Velas y aromas", detail: "11 velas y aromas" },
];

export const BONUSES = [
  {
    image: "/img/bono-mensajes.webp",
    title: "80 mensajes listos para vender",
    screen: "/pantallas/36-mensajes.webp",
    text: "28 para WhatsApp, 18 publicaciones, 12 estados, 12 respuestas a objeciones y 10 guiones de video, con tu negocio y tus precios.",
    value: 19,
  },
  {
    image: "/img/bono-imprimibles.webp",
    title: "Imprimibles con tu marca",
    screen: "/pantallas/40-imprimir-etiquetas.webp",
    text: "Etiquetas, tarjetas de agradecimiento y stickers en 3 estilos y con 12 íconos navideños, listos en PDF para imprimir.",
    value: 15,
  },
  {
    image: "/img/bono-calendario.webp",
    title: "Calendario de publicaciones hasta Reyes",
    screen: "/pantallas/37-calendario.webp",
    text: "Qué publicar cada día de la temporada para que tus clientes no se olviden de ti.",
    value: 9,
  },
  {
    image: "/img/bono-plan.webp",
    title: "Plan de lanzamiento de 30 días",
    screen: "/pantallas/42-inicio-negocio.webp",
    text: "Lo que toca hacer cada semana, de elegir tu producto a entregar tus pedidos, más ideas de nombres para tu negocio.",
    value: 12,
  },
];

export const OFFER_ITEMS = [
  { name: "Acceso a Navidad Rentable: 285 productos para aprender a hacer y vender", value: 47 },
  { name: "Herramientas de precio: calculadora, escalador, envío y meta", value: 27 },
  { name: "Pedidos, entregas, clientes, producción y finanzas", value: 27 },
  { name: "Academia para vender: 25 lecciones", value: 27 },
  ...BONUSES.map((b) => ({ name: b.title, value: b.value })),
];

export const FAQS = [
  {
    q: "¿Sirve para mi país?",
    a: "Sí. Funciona en 21 países y su moneda, y no te da precios fijos: calculas con lo que tú pagas en la tienda de tu ciudad, así que el precio siempre corresponde a tu realidad.",
  },
  {
    q: "¿En cuánto tiempo puedo hacer mi primera venta?",
    a: "Puedes elegir tu producto, calcular tu precio y tener tu menú listo para compartir el mismo día. Cuándo llega el primer pedido depende de cuánto lo muevas: para eso tienes el plan de 30 días, los mensajes listos y el calendario de publicaciones.",
  },
  {
    q: "¿Y si no tengo experiencia en cocina ni en manualidades?",
    a: "169 de los 285 productos son de nivel fácil. Cada paso trae su foto, cómo hacerlo y la señal de que quedó bien, para que no tengas que adivinar.",
  },
  {
    q: "¿Cómo recibo mi acceso después de pagar?",
    a: "Apenas se confirma tu pago, recibes en tu correo el acceso. Abres el enlace, escribes tu nombre y listo: no hay que crear cuentas ni recordar contraseñas.",
  },
  {
    q: "¿Funciona en mi celular?",
    a: "Sí, en Android y en iPhone, y también en tablet y computadora. Se instala como una app desde el navegador, sin pasar por la tienda de aplicaciones, y una vez abierta funciona sin internet. Tus pedidos y los datos de tus clientes se quedan en tu celular: nadie más los ve.",
  },
  {
    q: "¿Tengo que pagar mensualidades?",
    a: "No. Es un solo pago y el acceso es de por vida. Si cambias de celular, guardas un respaldo y lo cargas en el nuevo, con fotos incluidas.",
  },
  {
    q: "¿Qué hago si me trabo o tengo dudas?",
    a: "Dentro tienes una guía de uso que te explica cada pantalla. Y si aun así necesitas ayuda, escríbenos al contacto que aparece en el correo de tu compra.",
  },
  {
    q: "¿Es seguro el pago?",
    a: "Sí. El pago lo procesa Hotmart, una de las plataformas de pago de productos digitales más usadas en Latinoamérica. Nosotros nunca vemos los datos de tu tarjeta.",
  },
  {
    q: "¿Hay garantía?",
    a: "Sí, 7 días. Si dentro de ese plazo sientes que no es para ti, pides el reembolso desde Hotmart y te devuelven el 100 % de tu dinero.",
  },
  {
    q: "¿Por qué esto y no recetas gratis de internet?",
    a: "Porque una receta te enseña a hacer un producto, no a venderlo. Aquí cada producto viene con su precio calculado con tus costos, sus errores comunes, cómo empacarlo y transportarlo, y todo lo que necesitas para tomar el pedido, entregarlo y cobrarlo.",
  },
];
