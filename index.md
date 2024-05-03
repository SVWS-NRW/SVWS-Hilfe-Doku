<script setup lang="ts">
import { data } from './build.data';

const datum = (t) => {
  // gibt ein Datum im deutschen Format zurück
  try {
    return new Date(t).toLocaleDateString('de', {day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Europe/Berlin'})
  } catch (e) {console.log(e); return 'Datumsfehler'}
}
</script>



# SVWS Hilfe und Handbuch


<pre>Erstellungsdatum {{ datum(data.buildDate) }}</pre>

## Hilfe zum SVWS-Client 

Der **SVWS-Client** ist eine Web-Applikation zur Unterstützung der Verwaltungsprozesse an den Schulen Nordrhein-Westfalens.  

Der SVWS-Client schafft eine plattformübergreifende Benutzeroberfläche, die mit allen gängigen Browsern aufgerufen werden kann.

Dabei sollen nach und nach alle Aufgaben der bisherigen Schulverwaltungsprogramme aus NRW implementiert werden.

* Der SVWS-Client ersetzt bereits die Programme **LuPO** zur Laufbahnberatung in der gymnasialen Oberstufe und
* **Kurs42** zur Erstellung von Blockungen.
* Er die **Individual- und Leistungsdaten der Schülerinnen und Schüler** verwalten.
* Die **Verwaltung der Lehrkräfte** ist ebenfalls möglich.
* Zusätzlich zu den bisherigen Angeboten ist im SVWS-Client eine komfortable Anzeige von **Stundenplänen** hinzugekommen.

Das Gesamtprojekt _SVWS-Server_ ist ein Open-Source-Projekt des Landes Nordrhein-Westfalen.

## Aufbau des Handbuchs 

# Bedienungshilfe

## Diese Webseite

Auf der **linken** Seite des Fensters befindet sich das Inhaltsverzeichnis dieser Seite. In der **Mitte** sind die Informationen angezeigt. **Rechts** ist das *Inhaltsverzeichnis des Artikels* angezeigt.

![Screenshot der Webseite für die Strukturdarstellung](./graphics/SVWS_hilfe-root_AufbauDerWebseite.png "Die Website ist in drei Bereiche geteilt: Links das Inhaltsverzeichnis der Seite, in der Mitte der Artikel, rechts das Inhaltsverzeichnis des Artikels.")

Oben rechts können Sie die Webseite je nach Belieben vom *Hellen* Modus in den *Dunklen* Modus umstellen.

*Hinweis:* Ist das Browserfenster zu schmal eingestellt, wird der rechte Bereich ausgeblendet.

## Der SVWS-Client

Der SVWS-Client wird über einen üblichen Internet Browser ausgeführt und arbeitet mit den großen Render-Engines für Browser zusammen.

### Navigation

* Kehren Sie über den Browser über die **zurück**-Schaltfläche zu einer vorherigen Seite zurück.
* Wurde über das linke Inhaltsverzeichnis ein Unterpunkt aufgerufen, lässt sich darüber eine vorherige Ebene anwählen.

![Vor- und Zurücknavigation über den Browser](./graphics/SVWS_hilfe-root_SchaltflächenNavigation.png "Navigation über die Vor- und Zurückschaltflächen des Browsers oder über die Schaltflächen im Browser.") 

### Zoom

Die Funktionen des Browsers werden somit direkt unterstützt, zum Beispiel können Sie das Fenster **zoomen**. Klicken Sie hierzu auf die Zoom-Schaltflächen Ihres Browers oder drücken Sie **Strg und +** oder **Strg + und -**. Über die Maus können Sie Zoomen, indem Sie **Strg** und mit dem **Mausrad hoch** oder **runter** rollen.

### Skalierung

In der SVWS-Oberfläche lässt sich weiterhin unter **Ansicht** die **Skalierung** auf *kleiner*, *normal* oder *größer* stellen.

### Kontraste

**Dark Mode:** Ebenso lässt sich im SVWS-Client ein *helles* oder *dunkles* Thema wählen. 

### Fensterbreite des SVWS-Clients

Das Fenster passt sich an die Breite des Browserfensters an. 

![Schaltflächen zum Ändern der Ansicht, zum Abmelden und zur Client-Info](./graphics/SVWS_hilfe-root_Ansicht.png "Die Schaltfläche zum Ändern der Ansicht wird je nach Breite des Browserfensters oben rechts oder unten links angezeigt.")

Die Schaltflächen zum Abmelden und Ändern der Ansicht finden sich je nach Broweserbreite oben rechts oder unten links. Weitehrin wird hier die Version des SVWS-Clients über die Client-Info angezeigt.

### Plugins im Browser

Im Browser installierte Plugins, etwa Screenreader, lassen sich somit auch mit dieser Webseite und im SVWS-Client verwenden.

*Hinweis:* Für Drittsoftware wird kein Support unternommen und ein reibungsloses Funktionieren eines Plugins mit den Inhalten des SVWS-Clients kann nicht garantiert werden.

## Impressum

Ministerium für Schule und Bildung des Landes Nordrhein-Westfalen

Völklinger Straße 49, 40221 Düsseldorf

Telefon: +49 211 5867 40

 
