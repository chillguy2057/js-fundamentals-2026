# JavaScript Fundamentals — Lesson #1 Lahendused

Kõik tunnis läbitud teemad on lahendatud töötavate koodinäidetega, teemade kaupa kaustadesse organiseeritud.

## Struktuur

| Kaust | Teema |
|---|---|
| `01-variables` | const, let, var |
| `02-data-types` | Andmetüübid, null ja undefined |
| `03-operators` | Operaatorid ja tüübiteisendus |
| `04-strings` | Stringid ja template literals |
| `05-comparisons` | Võrdlused, loogikaoperaatorid, otsustused |
| `06-math` | Arvud ja Math objekt |
| `07-arrays-loops` | Massiivid ja tsüklid |
| `08-objects` | Objektid ja puuduvate andmete käsitlemine |
| `09-functions` | Funktsioonid |
| `10-arrow-functions` | Nooleavaldised ja callback'id |
| `11-array-methods` | map, filter, find |
| `12-destructuring` | Destruktureerimine ja spread süntaks |
| `13-modules` | Moodulid (import/export) |
| `14-async` | Promises ja async/await |
| `15-fetch-json` | fetch, JSON, veakäsitlus |

## Käivitamine

Enamik faile käivitub otse Node.js-iga:

```bash
node 01-variables/index.js
```

Teema 13 (moodulid) kasutab `.mjs` laiendit ES moduulide jaoks:

```bash
node 13-modules/index.mjs
```

Iga fail sisaldab:
- kõiki teema alla kuuluvaid kontseptsioone koos töötavate näidetega
- kommentaare, mis selgitavad, mida kood teeb ja miks
- ühte levinud algaja viga koos paranduse ja selgitusega
- "predict the output" küsimust koos vastusega
