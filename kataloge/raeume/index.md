# Räume

## Räume anlegen und verwalten

Über diesen Katalog lassen sich *Räume* erfassen, die dann über den Stundenplan verplant werden können.

![Der Katalog zu den Räumen](./graphics/SVWS_kataloge_raeume_üebersicht.png "Tragen Sie die Eigenschaften von Räumen ein.")

Erzeugen Sie über das **+** neue Räume, im Screenshot wird es durch den grünen Pfeil gezeigt.

In jedem Raum können ein **Kürzel** und eine relative **Größe** für einen Raum vergeben werden.

Weitere Informationen lassen sich in der **Beschreibung** hinterlegen.

## Export, Import und Löschen

Über die Auswahlliste steht ein **Import** zur verfügung, über den eine json-Datei mit Rauminformationen eingelesen werden kann.

![Optionen in der Auswahlliste: Löschen, importieren, exportieren](./graphics/SVWS_kataloge_raeume_optionen.png "Sind Räume angewählt, lassen sie sich löschen oder exportieren.")

Hat man Räume über die Checkboxen angewählt, können diese **exportiert** oder über das Mülleimer-Icon 🗑 gelöscht werden.

Bei der Datei handelt es sich um eine JSON-Datei.

``` json
[{"id" : 2,"kuerzel" : "R2","beschreibung" : "Ein zweiter Raum","groesse" : 1},{"id" : 1,"kuerzel" : "R1","beschreibung" : "Ein erster Raum","groesse" : 2}]
```
