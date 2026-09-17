# React Todo-app

En enkel Todo-app med React, Vite och JSON Server. 
Appen är byggd med React, Vite och JSON Server och innehåller automatiserade tester med Vitest, React Testing Library och MSW.

## Funktioner

- Hämta uppgifter från ett lokalt API
- Lägga till uppgifter
- Markera uppgifter som slutförda
- Ta bort uppgifter
- Filtrera mellan alla, aktiva och slutförda uppgifter
- Visa antal uppgifter
- Visa loading-, error- och empty-lägen
- Växla knapptext med en enkel A/B-variant
- Visa aktuellt väder för Stockholm
- Visa ett enkelt klädtips utifrån temperatur och väder

## Starta appen

Installera först paketen:

```bash
npm install
```

Starta JSON Server i den första terminalen:

```bash
npm run server
```

Starta React-appen i en andra terminal:

```bash
npm run dev
```

Öppna adressen som Vite visar, vanligtvis:

```text
http://localhost:5173
```

## A/B-variant

Kopiera `.env.example` och döp kopian till `.env`.

```env
VITE_BUTTON_VARIANT=A
```

- `A` visar **Lägg till**.
- `B` visar **Skapa uppgift**.

Starta om React-appen efter att du har ändrat `.env`.

## Tester

Kör automatiska tester med:

```bash
npm test
```

Kör ESLint med:

```bash
npm run lint
```

## Testerna består av:

* Enhetstester med Vitest
* Komponenttest med React Testing Library
* Integrationstest med MSW för väderfunktionen

## Testresultat

Vid slutlig testkörning testas att alla obligatoriska tester är godkända (`passed`).

Testsviten innehåller enhetstester, ett komponenttest och ett integrationstest med MSW.

Alla test är godkända.
