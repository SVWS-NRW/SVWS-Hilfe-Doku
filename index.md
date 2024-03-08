<script setup lang="ts">
import { data } from './build.data';

const datum = (t) => {
  // gibt ein Datum im deutschen Format zurück
  try {
    return new Date(t).toLocaleDateString('de', {day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Europe/Berlin'})
  } catch (e) {console.log(e); return 'Datumsfehler'}
}
</script>



# SVWS-Dokumentation
Hilfe und Handbuch


<pre>Erstellungsdatum {{ datum(data.buildDate) }}</pre>

## Hilfe zum SVWS-Client (Browser-App für Schulverwaltungsaufgaben) 

Der SVWS-Client ist eine Web-Applikation zur Unterstützung der Verwaltungsprozesse an den Schulen NRWs.  

Der SVWS-Client schafft eine plattformübergreifende Benutzeroberfläche die mit allen gängigen Browsern aufgerufen werden kann.
Dabei sollen nach und nach alle Aufgaben der alten Schulverwaltungsprogramme aus NRW implementiert werden.
Der SVWS-Client ersetzt bereits die Programme Lupo und Kurs42 und kann die Individual- und Leistungsdaten der Schülerinnen und Schüler anzeigen.
Die Verwaltung der Lehrkräfte ist bereits auch möglich.

Zusätzlich zu den bisherigen Angeboten ist im SVWS-Client eine komfortable Anzeige von Stundenplänen hinzugekommen.

Das Gesamtprojekt SVWS-Server ist ein Open-Source-Projekt des Landes Nordrhein-Westfalen.


## Bedienungshilfe 

### Aufbau des Handbuchs 

## Impressum

Ministerium für Schule und Bildung des Landes Nordrhein-Westfalen
Völklinger Straße 49, 40221 Düsseldorf


Telefon: +49 211 5867 40

 
