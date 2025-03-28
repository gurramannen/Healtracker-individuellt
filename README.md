Healthtracker-v10
Healthtracker-v10 är en modern, webbaserad hälsoapplikation som hjälper användare att spåra och övervaka olika hälsoaspekter – från vikt och blodtryck till sömn och kaloriintag. Applikationen är byggd med Vite och Tailwind CSS för att erbjuda en snabb, responsiv och modulär utvecklingsmiljö.

Funktioner
Hälsospårning:
Logga och övervaka vikt, blodtryck, sömn och andra hälsoindikatorer.

Kalori- och måltidslogg:
Användaren kan logga måltider och följa sin dagliga kaloriintag, med en dynamisk progress bar som uppdateras utifrån TDEE (Totalt Dagligt Energibehov) – beräknat baserat på personliga data från profilformuläret.

Viktprogression:
Ett interaktivt linjediagram visar din viktutveckling över tid, vilket ger en tydlig överblick över dina framsteg.

Responsiv design:
Tailwind CSS säkerställer en mobilvänlig och responsiv layout.

Modern utvecklingsmiljö:
Applikationen använder Vite för snabba omstarter och en förbättrad utvecklingsupplevelse.

Modulär arkitektur:
Enkel att utöka och underhålla tack vare en tydlig mappstruktur och separata komponenter.

Installation
Följ dessa steg för att komma igång med projektet lokalt:

Klona repot:

bash
Kopiera
Redigera
git clone https://github.com/BenjaminBerhane/Healthtracker-v10.git
cd Healthtracker-v10
Installera beroenden:

bash
Kopiera
Redigera
npm install
Starta utvecklingsservern:

bash
Kopiera
Redigera
npm run dev
Applikationen körs lokalt (ofta på http://localhost:5173 eller annan specificerad port).

Konfiguration och Funktionalitet
Dynamisk Kalori- och Måltidslogg
Kalori Progress Bar:
I Dashboard-komponenten uppdateras progress-baren dynamiskt baserat på de inloggade måltiderna. Kaloriintaget jämförs med användarens personliga TDEE (Totalt Dagligt Energibehov) – beräknat i profilformuläret.

TDEE Beräkning:
Profilformuläret beräknar TDEE baserat på användarens inmatade data (kön, vikt, längd, ålder, aktivitetsnivå och mål). Detta värde används sedan globalt för att ge feedback på kaloriintag.

Viktprogression
Interaktivt Diagram:
Ett linjediagram (implementerat med Chart.js och react-chartjs-2) visar viktförändringar över tid. Diagrammet uppdateras automatiskt när ny viktdata loggas.

Vanliga Fel
Om du stöter på postCSS-fel, prova följande lösning:

Installera nödvändigt postCSS-tillägg:

bash
Kopiera
Redigera
npm install -D @tailwindcss/postcss
Starta om utvecklingsservern:

bash
Kopiera
Redigera
npm run dev
Bygg för produktion
För att skapa en produktionsklar version av applikationen, kör:

bash
Kopiera
Redigera
npm run build
Detta kommando genererar en optimerad version i mappen dist.

Bidra
Alla bidrag är välkomna! Om du vill bidra, följ dessa steg:

Forka repot.

Skapa en ny gren för din feature eller buggfix.

Skicka in en pull request med en detaljerad beskrivning av dina ändringar.

Licens
Ingen specifik licens har angetts för detta repository. Kontakta repository-ägaren för mer information om licensiering.

Support
Har du frågor eller behöver hjälp med projektet? Öppna gärna en issue i repot så hjälper vi dig.