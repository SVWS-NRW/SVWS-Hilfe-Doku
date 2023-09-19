module.exports =
{

title: 'SVWS Hilfe',
description: 'Hilfeseiten SVWS-Client NRW',

themeConfig:
{

sidebar:
{



'/':
	[
		{ text: '',	items:
			[
				{ text: 'Schule', link: '/schule/', collapsed: true,  items:
					[
						{ text: 'Benutzerverwaltung', link: '/schule/benutzerverwaltung/' },
						{ text: 'Datenaustausch', link: '/schule/datenaustausch/' }
					]
				},

				{ text: 'Kataloge', link: '/kataloge/', collapsed: true,  items:
					[
						{ text: 'Fächer', link: '/kataloge/faecher/' },
						{ text: 'Förderschwerpunkte', link: '/kataloge/foerderschwerpunkte/' },
						{ text: 'Jahrgänge', link: '/kataloge/jahrgaenge/' },
						{ text: 'Religionen', link: '/kataloge/religionen/' }
					]
				},

				{ text: 'Schüler', link: '/schueler/', collapsed: true,  items:
					[
						{ text: 'Erziehungsberechtigte', link: '/schueler/erziehungsberechtigte/' },
						{ text: 'Ausbildungsbetriebe', link: '/schueler/ausbildungsbetriebe/' },
						{ text: 'Schulbesuch', link: '/schueler/schulbesuch/' },
						{ text: 'Lernabschnittsdaten', link: '/schueler/lernabschnittsdaten/' },
						{ text: 'Leistungsdaten', link: '/schueler/leistungsdaten/' },
						{ text: 'Laufbahnplanung', link: '/schueler/laufbahnplanung/' },
						{ text: 'Stundenplan', link: '/schueler/stundenplan/' }
					]
				},

				{ text: 'Lehrkräfte', link: '/lehrer/', collapsed: true,  items:
					[
						{ text: 'Personaldaten', link: '/lehrer/personaldaten/' },
						{ text: 'Unterricht', link: '/lehrer/unterricht/' },
						{ text: 'Stundenplan', link: '/lehrer/stundenplan/' }
					]
				},

				{ text: 'Klassen', link: '/klassen/' },

				{ text: 'Kurse', link: '/kurse/' },

				{ text: 'Oberstufe', link: '/gost/', collapsed: true,  items:
					[
						{ text: 'Fächer', link: '/gost/faecher/' },
						{ text: 'Fachwahlen', link: '/gost/fachwahlen/' },
						{ text: 'Kursplanung', link: '/gost/kursplanung/' },
						{ text: 'Klausurplanung', link: '/gost/klausurplanung/' }
					]
				},

				{ text: 'Statistik', link: '/statistik/', collapsed: true,  items:
					[
						{ text: 'Verschlüsselung ', link: '/statistik/verschluesselung' },
						{ text: 'Datenprüfung', link: '/statistik/datenpruefung' },
						{ text: 'Dokumente', link: '/statistik/dokumente' },
						{ text: 'Hilfe', link: '/statistik/hilfe' }
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
};

