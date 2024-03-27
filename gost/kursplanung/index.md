# Kursplanung 

## Blockungsübersicht

Zu jedem Abiturjahrgang kann in jedem Abschnitt eine oder mehrere Blockungen angelegt oder aus bestehenden Daten wieder hergestellt (restauriert) werden.
Wiederherstellung erfolgt dann, wenn die vorliegende Datenbank bereits importierte Blockungen enthält.

![Blockungsauswahl](./graphics/SVWS_Oberstufe_Kursplanung_1.png)


### Fall Wiederherstellung und Weiterbearbeitung
Wiederherstellung ist nur möglich, wenn in der Datenbank bereits Blockungsdaten vorliegen, z.B. nach einer Migration einer Schild2-Datenbank oder vergleichbare Datenbestände.  
 
Nach Auswahl von Abiturjahrgang und Abschnitt **Wiederherstellen** aktivieren. Die Blockung wird dann als **Restaurierte** Blockung angezeigt. 
Angezeigt wird eine Übersicht über eingerichtete Kurse, in welchen Schienen sie liegen usw.


### Fall Neue Kursblockung

![Blockungsneuerstellen](./graphics/SVWS_Oberstufe_Kursplanung_4.png)

Über das **+**-Symbol wird eine neue Blockung erstellt.  
Es sollten dazu vollständige Fachwahlen für den gewählten Abschnitt vorliegen.  
Zum Ablauf der Einrichtung/Erstellung einer neuen Blockung siehe [Erstellen einer neuen Blockung](## Erstellen einer neuen Blockung)



## Übersichten, Filter, Belegungsmatrix  

![Blockungsuebersicht](./graphics/SVWS_Oberstufe_Kursplanung_2.png)  

Die Blockungsübersicht zeigt die Lage der Kurse in den Schienen an, ebenso die Belegungszahl einer Schiene, die jeweilige Kursgröße.  
Im Falle einer **neu angelegten Blockung liegt noch keine Verteilung** vor.  
Hinweis: sollte eine Kursgröße in diesem Format angegeben sein: 14|3, so befinden sich in diesem Kurs 14 Schüler der eigenen Schule und 3 einer Koopschule (Status Extern)  
**Weitere Funktionen** in dieser Übersicht werden unter **"Blockungsvorgaben bearbeiten"** erläutert.  



### Schülerlisten (nach Filter)   

![Blockungsschuelerlisten](./graphics/SVWS_Oberstufe_Kursplanung_3.png)


Rechts neben der Kursübersicht befinden sich **Schülerlisten**, deren Inhalt **gefiltert** werden kann:
- **kein Filter**
- **Fachfilter**: Schüler mit einem bestimmten gewählten Fach und Kursart filtern. Beispiel: Alle mit **Fachwahl Deutsch LK**
- **Kursfilter**: Schüler eines gewählten Kurses filtern. Beispiel: Alle, die dem **Kurs D-LK1** zugewiesen sind.

Weiterhin kann auf diese Eigenschaften gefiltert werden:
- **K** **K**ollision: Schüler, die in der aktuellen Blockung eine Kurskollision haben, also zwei Kurse in einer Schiene.
- **NV** **N**icht **V**erteilt: Schüler, für die mindestens eine Fachwahl keinem Kurs zugewiesen ist.
- **K/NV**: Schüler mit Kollision und einer nicht verteilten Fachwahl. 

Die **Symbole** hinter den Namen stehen für das **Geschlecht** und die Eigenschaft **mündlich** oder **schriftlich** belegt.



## Blockung berechnen
Um eine Blockung berechnen zu lassen, müssen zuvor
- Kurse eingerichtet werden  

und können zusätzlich  
- Fixierungen und Sperrungen von Kursen für bestimmte Schienen festgelegt werden  
- mögliche Schülerfixierungen in Kurse gesetzt werden  
- weitere Regeln (s.u.) gesetzt werden


### Ableiten einer Blockung
Um ein vorliegendes Ergebnis einer Berechnung oder den Grundzustand der Blockungseinrichtung bestehen zu lassen und immer wieder darauf zurückgreifen zu können, kann durch **"Ableiten"** die Blockung dupliziert werden. Es können dann neue Regeln ergänzt oder bestehende gelöscht werden, um dann wieder neu zu berechnen.


### Berechnungen durchführen

![Berechnung](./graphics/SVWS_Oberstufe_Kursplanung_5.png)  

Es kann gewählt werden, ob die Berechnungen von eigenen Client-PC (ausführlich) oder dem Server (schnell) berechnet werden sollen.  
Unter **Ausführlich** können unter den ausgegebenen Ergebnissen bestimmte ausgewählt werden. 
Unter **Schnell** können zu schlechte Ergebnisse unmittelbar gelöscht werden.


### Bewertungskriterien 

In beiden Berechnungsszenarien werden die Ergebnisse mit vier Bewertungskriterien angegeben.  Durch Bewegung des Mauszeigers auf die Werte werden weitere Erklärungen dazu sichtbar (Fly-Over-Menü bzw. Tool-Tips).  
- Regelverletzungen (sollten 0 sein)
- Fachwahlkonflikte (sollten 0 sein)
- Kursdifferenzen (hängt von individuellen Bedingungen ab)
- Häufigkeit der Kursdifferenzen größer 0 (im Fly-Over-Tool-Tip werden die betroffenen Kurse angezeigt.)

## Blockung aktivieren

Ist die Blockung fertig, kann sie durch **Blockung aktivieren** in die Datenbestände (Kurse, SchülerLeistungsdaten, ...) übernommen werden.

## Erstellen einer neuen Blockung

### neue Regeln einfügen

### ein paar Standardbeispiele 

#### Sport nur Nachmittags

#### Musik und Kunst parallel




 

