import { defineConfig, loadEnv } from 'vite'

// https://vitepress.dev/reference/site-config
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.BASE || '/SVWS-Hilfe-Doku/',
    title: 'SVWS Hilfe und Handbuch',
    description: 'Hilfeseiten SVWS-Client NRW',
    lastUpdated: true,
    themeConfig: {
      search: {
        provider: 'local'
      },
      lastUpdated: {
        text: 'Diese Seite wurde zuletzt bearbeitet am',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
        }
      },
     // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Schulungsunterlagen', link: 'https://svws-nrw.github.io/Schulungsunterlagen/' },
      { text: 'Dokumentation', link: 'https://doku.svws-nrw.de' }
    ],
  socialLinks: [
      { icon: 'github', link: 'https://github.com/SVWS-NRW/SVWS-Hilfe-Doku' }
    ],
      sidebar: {
        '/': [
          { text: '', items:
              [
                { text: 'Diese Webseite', link: '/clientwebsite/' },
                { text: '━━━ Der Client ━━━', link: '/client/', collapsed: false, items:
                    [
                        { text: 'Tastaturnavigation', link: '/client/tastaturnavigation' },
                        { text: 'Änderungen', link: '/client/änderungen/' },
                        { text: 'FAQ', link: '/client/faq/' },
                        { text: 'JSON-Dateien', link: '/client/json_files/' },
                        { text: 'Der Admin Client', link: '/administration/adminclient/' }
                    ]
                },
                { text: '━━━ Anleitungen ━━━', link: '/anleitungen/' },
                { text: 'Allgemeine Anleitungen', link: '/anleitungen_allgemein/', collapsed: true, items: 
                    [
                        { text: 'Anmeldung', link: '/anleitungen/anmeldung/' },
                        { text: 'Stundenpläne (Verschieben zu Stundenpläne?)', link: '/anleitungen/stundenplan/' }
                    ]
                },
                { text: 'Schulformspezifisch', link: '/anleitungen_schulform/', collapsed: true, items:
                    [
                        { text: 'Oberstufe', link: '/anleitungen_schulform//anleitungen_gost/' },
                        { text: 'Grundschule', link: '/anleitungen_schulform/anleitungen_gs/' }
                    ]
                },
                { text: 'Zeugnisvorbereitung', link: '/anleitungen_zeugnisse/' },
                { text: '━━━ Apps ━━━', link: '/apps/' },
                { text: 'Aktueller Benutzer', link: '/aktuellernutzer/' },
                { text: 'Schule', link: '/schule/', collapsed: true, items:
                    [
                        { text: 'Schulbezogene Kataloge', collapsed: true, items:
                            [
                                { text: 'Stammdaten der Schule (Todo)' },
                                { text: 'Betriebe (Todo)' },
                                { text: 'Einwilligungsarten (Todo)' },
                                { text: 'Fächer', link: '/schule/kataloge/faecher/' },
                                { text: 'Förderschwerpunkte', link: '/schule/kataloge/foerderschwerpunkte/' },
                                { text: 'Jahrgänge', link: '/schule/kataloge/jahrgaenge/' },
                                { text: 'Vermerkarten (Todo)' }
                            ]
                        },
                        { text: 'Allgemeine Kataloge', collapsed: true, items:
                            [
                                { text: 'Religionen', link: '/schule/kataloge/religionen/' },
                                { text: 'Schulen (Todo)' }
                            ]
                        },
                        { text: 'Datenaustausch', link: '/schule/datenaustausch/', collapsed: true, items:
                            [
                                { text: 'ENM Notenmanager (Todo)' },
                                { text: 'LuPO Laufbahnplanung', link: '/schule/datenaustausch/lupo/' },
                                { text: 'WebNotenManager', link: '/schule/datenaustausch/wenom/' },
                                { text: 'Kurs 42 (Todo)' },
                                { text: 'Untis (Todo)' }
                            ]
                        }
                    ] 
                },
                { text: 'Schüler (Anpassen!)', link: '/schueler/', collapsed: true, items:
                    [
                        { text: 'Individualdaten', link: '/schueler/individualdaten/' },
                        { text: 'Erziehungsberechtigte', link: '/schueler/erziehungsberechtigte/' },
                        { text: 'Ausbildungsbetriebe', link: '/schueler/ausbildungsbetriebe/' },
                        { text: 'Schulbesuch', link: '/schueler/schulbesuch/' },
                        { text: 'Lernabschnitte', link: '/schueler/lernabschnitte/', collapsed: true, items:
                            [
                                { text: 'Allgemein', link: '/schueler/lernabschnitte/allgemein/' },
                                { text: 'Leistungsdaten', link: '/schueler/lernabschnitte/leistungsdaten/' }
                            ]
                        },
                        { text: 'KAoA', link: '/schueler/kaoa/' },
                        { text: 'Laufbahn', link: '/schueler/laufbahn/' },
                        { text: 'Laufbahnplanung Sek II', link: '/schueler/laufbahnplanung/' },
                        { text: 'Stundenplan', link: '/schueler/stundenplan/' }
                    ]
                },
                { text: 'Lehrkräfte', link: '/lehrer/', collapsed: true, items:
                    [
                        { text: 'Individualdaten', link: '/lehrer/individualdaten/' },
                        { text: 'Unterricht', link: '/lehrer/unterricht/' },
                        { text: 'Stundenplan', link: '/lehrer/stundenplan/' }
                    ]
                },
                { text: 'Klassen', link: '/klassen/' },
                { text: 'Kurse', link: '/kurse/' },
                {
                  text: 'Oberstufe', link: '/gost/', collapsed: true, items:
                    [
                        { text: 'Abiturjahrgang', link: '/gost/abiturjahrgang/' },
                        { text: 'Fächer', link: '/gost/faecher/' },
                        { text: 'Beratung', link: '/gost/beratung/' },
                        { text: 'Laufbahnplanung', link: '/gost/laufbahn/' },
                        { text: 'Fachwahlen', link: '/gost/fachwahlen/' },
                        { text: 'WebLuPO', link: '/gost/weblupo/' },
                        { text: 'Kursplanung', link: '/gost/kursplanung/' },
                        { text: 'Klausurplanung', link: '/gost/klausurplanung/' }
                    ]
                },
                { text: 'Statistik', link: '/statistik/', collapsed: true, items:
                    [
                        { text: 'Verschlüsselung ', link: '/statistik/verschluesselung/' },
                        { text: 'Datenprüfung', link: '/statistik/datenpruefung/' },
                        { text: 'Dokumente', link: '/statistik/dokumente/' },
                        { text: 'Hilfe', link: '/statistik/hilfe/' }
                    ]
                },
                { text: 'Stundenplan', link: '/stundenplan/', collapsed: true, items: 
                    [ 
                        { text: 'Grundlagen zum Stundenplan', link: '/stundenplan/stundenplan_basisinformationen/' },
                        { text: 'Hierhier: Stundenplananleitung?' },
                        { text: 'Allgemeine Vorlagen', link: '/stundenplan/allgemeine_vorlagen/', collapsed: true, items:
                            [
                                { text: 'Aufsichtsbereiche', link: '/stundenplan/allgemeine_vorlagen/aufsichtsbereiche/' },
                                { text: 'Pausenzeiten', link: '/stundenplan/allgemeine_vorlagen/pausenzeiten/' },
                                { text: 'Räume', link: '/stundenplan/allgemeine_vorlagen/raeume/' },
                                { text: 'Zeitraster', link: '/stundenplan/allgemeine_vorlagen/zeitraster/' }
                            ]                            
                        }
                    ]
                },
                { text: 'Einstellungen', link: '/einstellungen/', collapsed: true, items:
                    [
                       { text: 'Benutzer (Anzupassen)', link: '/einstellungen/benutzer/' },
                       { text: 'Benutzergruppen (Anzupassen)', link: '/einstellungen/benutzergruppen/' }
                    ]
                },
                { text: '━━━ Weiteres ━━━', link: '/weiteres/' },
                { text: 'Adressbücher', link: '/adressbuecher/' },
                { text: 'Kalender', link: '/kalender/' },
                { text: '-----------'},
                { text: 'Writing Guidelines (Temp)', link: '/writingguide/' }
              ]
          }
        ]
      }
    }
  }
})
