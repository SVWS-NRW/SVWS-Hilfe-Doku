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
          { text: '', items: [
                { text: '━━━ Anleitungen ━━━', link: '/anleitungen/' },
                { text: 'Allgemeine Anleitungen', link: '/anleitungen/', collapsed: true, items: [
                      { text: 'Anmeldung', link: '/anleitungen/anmeldung/' },
                      { text: 'Stundenpläne', link: '/anleitungen/stundenplan/' },
                      { text: 'JSON-Dateien', link: '/anleitungen/json_files/' }
                    ]
                },
                { text: 'Schulformspezifisch', link: '/anleitungen_schulform/', collapsed: true, items: [
                      { text: 'Oberstufe', link: '/anleitungen_schulform//anleitungen_gost/' },
                      { text: 'Grundschule', link: '/anleitungen_schulform/anleitungen_gs/' }
                    ]
                },
                { text: 'Zeugnisvorbereitung', link: '/anleitungen_zeugnisse/' },
                { text: '━━━ Apps ━━━', link: '/apps/' },
                { text: 'Aktueller Benutzer', link: '/aktuellernutzer/', collapsed: true },
                { text: 'Schule', link: '/schule/', collapsed: true, items:
                  [
                      { text: 'Schulbezogene Kataloge', items: [
                            { text: 'Stammdaten der Schule (Todo)'},
                            { text: 'Betriebe (Todo)'},
                            { text: 'Einwilligungsarten (Todo)'},
                            { text: 'Fächer', link: '/schule/kataloge/faecher/' },
                            { text: 'Förderschwerpunkte', link: '/schule/kataloge/foerderschwerpunkte/' },
                            { text: 'Aufsichtsbereiche (Wo?)', link: '/schule/kataloge/aufsichtsbereiche/' },
                            { text: 'Jahrgänge', link: '/schule/kataloge/jahrgaenge/' },
                            { text: 'Vermerkarten (Todo)'},
                            { text: 'Pausenzeiten (Wo?)', link: '/schule/kataloge/pausenzeiten/' },
                            { text: 'Räume (Wo?)', link: '/schule/kataloge/raeume/' },
                            { text: 'Zeitraster (Wo?)', link: '/schule/kataloge/zeitraster/' }
                          ]
                      },
                      { text: 'Schulbezogene Kataloge', items: [
                            { text: 'Religionen', link: '/schule/kataloge/religionen/' },
                            { text: 'Schulen (Todo)'}
                          ]
                      },
                      { text: 'Datenaustausch', link: '/schule/datenaustausch/', collapsed: true, items: [
                            { text: 'ENM Notenmanager (Todo)'},
                            { text: 'LuPO Laufbahnplanung', link: '/schule/datenaustausch/lupo/' },
                            { text: 'WebNotenManager', link: '/schule/datenaustausch/wenom/' },
                            { text: 'Kurs 42 (Todo)'},
                            { text: 'Untis (Todo)'}
                           ]
                      }
                  ]
                },
                { text: 'Schüler', link: '/schueler/', collapsed: true, items: [
                      { text: 'Individualdaten', link: '/schueler/individualdaten/' },
                      { text: 'Erziehungsberechtigte', link: '/schueler/erziehungsberechtigte/' },
                      { text: 'Ausbildungsbetriebe', link: '/schueler/ausbildungsbetriebe/' },
                      { text: 'Schulbesuch', link: '/schueler/schulbesuch/' },
                      { text: 'Lernabschnitte', link: '/schueler/lernabschnitte/', collapsed: true, items: [
                            { text: 'Allgemein', link: '/schueler/lernabschnitte/allgemein/' },
                            { text: 'Leistungsdaten', link: '/schueler/lernabschnitte/leistungsdaten/' }
                          ]
                      },
                      { text: 'KAoA', link: '/schueler/kaoa/' },
                      { text: 'Laufbahn', link: '/schueler/laufbahn/' },
                      { text: 'Laufbahnplanung (SII)', link: '/schueler/laufbahnplanung/' },
                      { text: 'Stundenplan', link: '/schueler/stundenplan/' }
                    ]
                },
                { text: 'Lehrkräfte', link: '/lehrer/', collapsed: true, items: [
                      { text: 'Individualdaten', link: '/lehrer/individualdaten/' },
                      { text: 'Unterricht', link: '/lehrer/unterricht/' },
                      { text: 'Stundenplan', link: '/lehrer/stundenplan/' }
                    ]
                },
                { text: 'Klassen', link: '/klassen/' },
                { text: 'Kurse', link: '/kurse/' },
                {
                  text: 'Oberstufe', link: '/gost/', collapsed: true, items: [
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
                { text: 'Statistik', link: '/statistik/', collapsed: true, items: [
                      { text: 'Verschlüsselung ', link: '/statistik/verschluesselung' },
                      { text: 'Datenprüfung', link: '/statistik/datenpruefung' },
                      { text: 'Dokumente', link: '/statistik/dokumente' },
                      { text: 'Hilfe', link: '/statistik/hilfe' }
                    ]
                },
                { text: 'Stundenplan', link: '/stundenplan/', },
                { text: '━━━ Weiteres ━━━', link: '/weiteres/' },
                { text: 'Einstellungen', link: /einstellungen/, collapsed: true, items: [
                    { text: 'Benutzer (Anzupassen)', link: '/einstellungen/benutzer/' },
                    { text: 'Benutzergruppen (Anzupassen)', link: '/einstellungen/benutzergruppen/' }
                  ]
                },
                { text: 'Administration', link: '/administration/', collapsed: true, items: [
                      { text: 'Admin Client', link: '/administration/adminclient/' }
                  ]
                },
                { text: 'Adressbücher', link: '/adressbuecher/' },
                { text: 'Kalender', link: '/kalender/' },
                { text: 'Informationen', link: '/informationen/', collapsed: true, items: [
                    { text: 'Änderungen ', link: '/informationen/änderungen/' },
                    { text: 'FAQ', link: '/informationen/faq' }
                    ]
                },
                { text: 'Writing Guidelines (Temp)', link: '/writingguide/'}
              ]
          }
        ]
      }
    }
  }
})
