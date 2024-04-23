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
      { icon: 'github', link: 'https://github.com/SVWS-NRW' }
    ],
      sidebar: {
        '/': [
          { text: '', items: [
                { text: 'Anmeldung', link: '/anmeldung/', collapsed: true },
                { text: 'Schule', link: '/schule/', collapsed: true, items: [
                      { text: 'Benutzerverwaltung', link: '/schule/benutzerverwaltung/' },
                      { text: 'Datenaustausch', link: '/schule/datenaustausch/' }
                    ]
                },
                { text: 'Kataloge', link: '/kataloge/', collapsed: true, items: [
                      { text: 'Fächer', link: '/kataloge/faecher/' },
                      { text: 'Förderschwerpunkte', link: '/kataloge/foerderschwerpunkte/' },
                      { text: 'Jahrgänge', link: '/kataloge/jahrgaenge/' },
                      { text: 'Religionen', link: '/kataloge/religionen/' }
                    ]
                },
                { text: 'Schüler', link: '/schueler/', collapsed: true, items: [
                      { text: 'Erziehungsberechtigte', link: '/schueler/erziehungsberechtigte/' },
                      { text: 'Ausbildungsbetriebe', link: '/schueler/ausbildungsbetriebe/' },
                      { text: 'Schulbesuch', link: '/schueler/schulbesuch/' },
                      { text: 'Lernabschnittsdaten', link: '/schueler/lernabschnittsdaten/' },
                      { text: 'Leistungsdaten', link: '/schueler/leistungsdaten/' },
                      { text: 'Laufbahnplanung', link: '/schueler/laufbahnplanung/' },
                      { text: 'Stundenplan', link: '/schueler/stundenplan/' }
                    ]
                },
                { text: 'Lehrkräfte', link: '/lehrer/', collapsed: true, items: [
                      { text: 'Personaldaten', link: '/lehrer/personaldaten/' },
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
                { text: 'FAQ', link: '/faq/' }
              ]
          }
        ]
      }
    }
  }
})
