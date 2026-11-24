# Loop 02 — Scroll del mapa de rutes

## Objectiu
Mostrar recorreguts quotidians des de Vallcarca i permetre comparar-ne el mitjà i la sostenibilitat sense perdre la lectura de la pàgina.

## Decideix Oriol
- Demana un mapa interactiu en una pàgina separada, amb rutes des de Vallcarca.
- Demana que cada recorregut es vegi com una línia contínua amb dos punts diferenciats, un a cada extrem.
- Demana més rutes, filtres per mitjà, temps per trajecte i una indicació comparativa de sostenibilitat.
- Especifica alguns recorreguts i mitjans concrets, inclosos Vallcarca–Sarrià amb H4 i trajectes en cotxe per Ronda de Dalt o les Costes del Garraf.

## Canvi implementat
`mapa.html`, `mapa.css` i `mapa.js` construeixen el scroll del panell de rutes al costat del mapa. Les targetes permeten seleccionar rutes i veure traçat i extrems al mapa; hi ha filtres per mode, durades orientatives i una escala comparativa amb font citada.

## Qui verifica i com
- **Codex:** revisa el codi de selecció de rutes, el traçat, els marcadors, els filtres i la presentació dels temps i de l'escala.
- **Oriol:** comprova visualment el panell i el mapa en el navegador, selecciona diversos modes i confirma que les línies i els dos extrems es veuen. Aquesta validació queda pendent de registrar quan es realitzi.
- **TMB / serveis de ruta:** són les referències externes que cal consultar per confirmar horaris, combinacions i traçats actuals; la web ja avisa que aquests valors són orientatius.

## Resultat / pendent
La implementació dibuixa els recorreguts sobre el mapa quan els serveis cartogràfics externs carreguen. Cal registrar el resultat de la comprovació visual i confirmar cada trajecte real abans de presentar-lo com a òptim o actualitzat.
