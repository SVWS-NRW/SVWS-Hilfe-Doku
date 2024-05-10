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
                { text: 'Anleitungen', link: '/anleitungen/', collapsed: true, items: [
                    { text: 'Anmeldung', link: '/anleitungen/anmeldung/' },
                    { text: 'JSON-Dateien', link: '/anleitungen/json-files/' }
                    ]
                },
                { text: 'Aktueller Benutzer', link: '/aktuellernutzer/', collapsed: true },
                { text: 'Schule', link: '/schule/', collapsed: true, items: [
                      { text: 'Benutzerverwaltung', link: '/schule/benutzerverwaltung/' },
                      { text: 'Datenaustausch', link: '/schule/datenaustausch/' }
                    ]
                },
                { text: 'Kataloge', link: '/kataloge/', collapsed: true, items: [
                      { text: 'Aufsichtsbereiche', link: '/kataloge/aufsichtsbereiche/' },
                      { text: 'Fächer', link: '/kataloge/faecher/' },
                      { text: 'Förderschwerpunkte', link: '/kataloge/foerderschwerpunkte/' },
                      { text: 'Jahrgänge', link: '/kataloge/jahrgaenge/' },
                      { text: 'Pausenzeiten', link: '/kataloge/pausenzeiten/' },
                      { text: 'Räume', link: '/kataloge/raeume/' },
                      { text: 'Religionen', link: '/kataloge/religionen/' },
                      { text: 'Zeitraster', link: '/kataloge/zeitraster/' },
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
                { text: 'Writing Guidelines (Temp)', link: '/writingguide/'
                }
              ]
          }
        ]
      }
    }
  }
})
