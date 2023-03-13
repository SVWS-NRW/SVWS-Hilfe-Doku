module.exports =
{

title: 'SVWS Hilfe',
description: 'Hilfeseiten SVWS-Server NRW',

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
						{ text: 'Datenaustausch', link: '/schule/benutzerverwaltung/' },
						{ text: 'Benutzerverwaltung', link: '/schule/datenaustausch/' }
					]
				},

				{ text: 'Kataloge', link: '/kataloge/', collapsed: true,  items:
					[
						{ text: 'Fächer', link: '/kataloge//facher/' },
						{ text: 'Förderschwerpunkte', link: '/kataloge/foerderschwerpunkte/' },
						{ text: 'Jahrgänge', link: '/kataloge/jahrgaenge/' },
						{ text: 'Religionen', link: '/kataloge/religionen/' }
					]
				},

				{ text: 'Schüler', link: '/schueler/', collapsed: true,  items:
					[
						{ text: 'Individualdaten', link: '/schueler/individualdaten/' },
						{ text: 'Erziehungsberechtigte', link: '/schueler/erziehungsberechtigte/' },
						{ text: 'Ausbildungsbetriebe', link: '/schueler/ausbildungsbetriebe/' },
						{ text: 'Schulbesuch', link: '/schueler/schulbesuch/' },
						{ text: 'Lernabschnitt', link: '/schueler/lernabschnitt/' },
						{ text: 'Leistungsdaten', link: '/schueler/leistungsdaten/' },
						{ text: 'Laufbahnplanung', link: '/schueler/laufbahnplanung/' },
						{ text: 'Stundenplan', link: '/schueler/stundenplan/' }
					]
				},

				{ text: 'Lehrkräfte', link: '/lehrer/', collapsed: true,  items:
					[
						{ text: 'Individualdaten', link: '/lehrer/individualdaten/' },
						{ text: 'Personaldaten', link: '/lehrer/personaldaten/' },
						{ text: 'Unterricht', link: '/lehrer/unterricht/' },
						{ text: 'Stundenplan', link: '/lehrer/stundenplan/' }
					]
				},

				{ text: 'Klassen', link: '/klassen/', collapsed: true,  items:
					[
						{ text: 'Daten', link: '/klassen/daten/' }
					]
				},

				{ text: 'Kurse', link: '/kurse/', collapsed: true,  items:
					[
						{ text: 'Daten', link: '/kurse/daten/' }
					]
				},

				{ text: 'Oberstufe', link: '/gost/', collapsed: true,  items:
					[
						{ text: 'Allgemein', link: '/gost/allgemein/' },
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

				}

            ]
        }
    ]
}
}
};

