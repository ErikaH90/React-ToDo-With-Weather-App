Testplan - ToDo Weather App

## Testnivåer

Projektet testas på flera nivåer genom enhetstester, komponenttest och integrationstest.

På enhetsnivå testas funktioner som getWeatherIcon() och getClothingAdvice(). De kontrollerar att funktionerna ger rätt resultat för olika in-data. Det finns även tester för negativa scenarier och gränsvärden, till exempel en tom uppgiftstitel och exakt 15 graders temperatur.

På komponentnivå testas användarinteraktioner och att komponenterna visar rätt information, till exempel att en todo-uppgift kan skapas i formuläret. Det är en viktig funktion ur ett användarperspektiv. 

På integrationsnivå testas funktionen som hämtar väder-API:et. Med hjälp av MSW mockas ett API-svar där data sätts in för att kunna kontrollera att hämtningen fungerar, utan att använda datan i det riktiga API:et. Testet kontrollerar att väderfunktionen returnerar ett objekt med temperatur och väderkod som numeriska värden.

## Val av tester 

Jag valde testerna för att de kontrollerar olika typer av problem; enhetstesterna för att de undersöker om isolerade funktioner gör vad de ska, komponenttestet för att undersöka interaktionen från ett användarperspektiv och MSW-testet för att undersöka om data från API:et hämtas så som förväntat. Jag har även valt gränsvärden och negativa scenarier eftersom fel ofta kan uppstå när indata ligger nära en gräns eller inte är giltig. 

## Risker 

Eftersom testerna bara testar ett begränsat antal saker så finns det mycket i koden som inte täcks av dem, vilket innebär en risk. Det finns inte några E2E-tester som testar hela appens flöde och ett test av den riktiga API-datan saknas också. Det kan innebära problem om t.ex. Open-Meteo-tjänsten förändras eller skulle vara otillgänglig. För att öka säkerheten skulle fler test behöva skapas som är relevanta för appens funktioner.

## AI-användning

Jag använde AI för att förstå hur olika tester fungerar med Vitest, React Testing Library och MSW, samt med formatering av md-filer. Jag använde även AI för att felsöka konfigurationen och för att upptäcka möjliga brister i mina tester som skulle kunna innebära potentiella risker. AI-förslag användes som stöd, men jag granskade och skrev själv koden och körde testerna för att kontrollera att lösningarna fungerade.