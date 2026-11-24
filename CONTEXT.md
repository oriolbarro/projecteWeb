# CONTEXT — Camins de cada dia

## Projecte
Web estàtica en català sobre mobilitat quotidiana a Barcelona. La portada presenta la recerca personal i enllaça amb un mapa interactiu de recorreguts que parteixen de Vallcarca.

## Pàgines i fitxers
- `index.html`: portada editorial amb navegació fixa, seccions de recerca i globus interactiu que obre el mapa.
- `style.css` i `script.js`: identitat visual, adaptació a pantalles petites, navegació i interaccions de portada.
- `mapa.html`, `mapa.css` i `mapa.js`: mapa, filtres, targetes de ruta, línies i extrems dels trajectes, temps orientatius i escala comparativa de sostenibilitat.
- `docs/loops/`: fitxes que documenten decisions i verificació de cada scroll treballat.

## Estat funcional conegut
La web té dues pàgines publicades amb GitHub Pages. El mapa utilitza MapLibre i dades de carrers oberts quan el servei extern està disponible. Les rutes de metro i bus són orientatives; els horaris i combinacions s'han de confirmar amb TMB. Els temps mostrats no són garanties de servei en temps real.

## Publicació
- Web: https://oriolbarro.github.io/projecteWeb/
- Mapa: https://oriolbarro.github.io/projecteWeb/mapa.html
- Repositori: https://github.com/oriolbarro/projecteWeb

## Pendent de verificació humana
Obrir portada i mapa en ordinador i mòbil; comprovar navegació, filtres, línies, marcadors, llegibilitat i càrrega quan els serveis de mapes responen. Aquesta revisió visual la fa Oriol; Codex documenta i revisa el codi i els estats observables.
