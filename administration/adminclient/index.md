# Admin Client

## Login und Übersicht
Rufen Sie den _[Server]/admin_ auf, um den **Admin Client** zu starten.

Bei einer lokalen Installation wäre _localhost/admin_.

![Login Screen des Admin clients: root und password werden benötigt.](./graphics/svwsclient_adminclient_login.png "Login Screen des Admin Clients.")

*Loggen Sie sich mit dem root-Nutzer Ihrer MariaDB und dem root-Paswort ein. Klicken Sie auf **Anmelden***.

![Übersicht der Schemas im Admin Client.](./graphics/SVWS_adminclient.png "Übersicht der Schemas im Admin Client.")

Oben links zeigt **Ro** an, dass der Rootuser angemeldet wurde.

Melden Sie sich oben rechts mit einem Klick auf **Abmelden** ab.

Wie im Client  gewohnt, lässt sich hier auch die **Ansicht** ändern.

## Schemamanagement

Darunter lassen sich die auf dieser MariaDB laufenden **Schemas** auswählen.

Zu jedem Schema werden dann rechts der **Name** und die **Daten der Schule** angezeigt. Ganz unten werden die **Admin-Benutzer** der jeweiligen Datenbank mit ihrem Namen und Benutzernamen aufgeführt. 

Im mittleren Bereich lässt sich ein bisheriges SchILD-NRW-2-Schema in dieses Schema migrieren. Dieser Vorgang überschreibt die im Schema aktuell vorliegenden Daten.

Weiterhin lässt sich das aktuelle Schema als **Backup** erstellen. Hierbei wird in eine .sqlite-Datei migirert, welche im Anschluss gespeichert wird und über **Schema aus Backup wiederherstellen** neu eingelesen werden kann.

## **TODO** - was tun die ganzen Angaben?

In der Schema-Übersicht links finden sich Angaben zur **Revision**, **???** und **Irgendwas mit einer Config-Datei**.

## Todo: Mülleimer und Bodenicons

### Schema-Icons

Über die Checkboxen lassen sich mehrere Schemas anwählen und gesammelt über einen dann darunter auftauchenden Mülleimer löschen.

Es lässt sich über **ICON** eine SchILD-2-Datenbank in ein neues Schema migireren.

Über **Pfeil nach unten** lässt sich ein gespeichertes sqlite-Image in ein neues Schema einspielen.

Mittels **Kopieren** wird ein existierendes Schema dupliziert. 

Das **+** legt ein neues, leeres Schema an, in das migriert (usw.) werden kann.