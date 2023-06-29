# FAQ

## Der SVWS-Server startet nicht 

### Diagnosetools
Informationen zum Zustand des Servers erhält man z.B. mit den folgenden Befehlen, die ein Administrator auf dem Linux-Terminal absetzen kann: 
``` systemctl status svws```
oder 
```journalct -u svws -f```

es folgen mögliche Fehlerbeschreibungen

### Fehler: Cannot invoke "de.svws_nrw.db.DBConfig.getDBDriver()"

Hier stimmt irgendwas nicht mit der Definition oder dem Zugriff auf die MariaDB. Bitte die svwsconfig.json ansehen!

#### Workaround

Man kann nun nach einer Sicherung der aktuellen ```svwsconfig.json``` ggf die SchemaKonfiguration ertfernen, so dass die Eintragung an dieser Stelle entsprechen: 
```
...
"DBKonfiguration" : {
    "dbms" : "MARIA_DB",
    "location" : "127.0.0.1",
    "defaultschema" : "GymAbi",
    "SchemaKonfiguration" : [ ]
  }
 ... 
 ```
abgeändert wird.  Nun den SVWS-Server neu starten mit: 

``` systemctl restart svws```

Anschließend kann man z.B. über die Swagger ein neues Datenbankschema anlegen. Hierzu bitte die folgende URL aufrufen: 
https://mein_SVWS-Server/debug/ (Bitte "mein_SVWS-Server" sinnvoll ersetzen.) 