# Navidad Rentable Home

Landing de venta de **Navidad Rentable**, la app para emprender en Navidad: qué vender, cómo hacerlo paso a paso, a cuánto cobrarlo y cómo llevar los pedidos.

- Publicada: https://navidad-rentable-home.lovable.app
- Editor de Lovable: https://lovable.dev/projects/c40b703f-f70c-48f0-b9c7-e81ad6c65c86

## Forma de trabajo

Claude Code para desarrollar → GitHub (`main`) para los cambios → Lovable solo para publicar (deploy). No se usan créditos de Lovable.

## Tecnología

TanStack Start (React 19 + Vite), Tailwind CSS 4, TypeScript, bun. `vite.config.ts` lo mantiene Lovable: no se modifica.

## Desarrollo

```sh
bun install
bunx vite dev --port 5188
bunx tsc --noEmit
bun run lint
bun run test
```

## Dónde vive cada cosa

| Qué                                              | Dónde                                |
| ------------------------------------------------ | ------------------------------------ |
| Enlace de pago, precio y garantía                | `src/lib/offer.ts`                   |
| Textos y cifras de la landing                    | `src/components/landing/content.ts`  |
| Secciones                                        | `src/components/landing/Landing.tsx` |
| Estilos de la landing                            | `src/components/landing/landing.css` |
| Imágenes (generadas con Magnific, Nano Banana 2) | `public/img/`                        |
| Imagen para compartir el enlace                  | `public/img/og.jpg`                  |

Las cifras salen de la ficha técnica de la app (285 productos, 2.385 pasos, etc.): si cambia el catálogo, se actualizan en `content.ts`.
