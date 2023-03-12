module.exports = 
{

title: 'SVWS Hilfe',
description: 'Hilfen SVWS-Server NRW',

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
						{ text: 'Datenaustausch', link: './benutzerverwaltung/' },
						{ text: 'Benutzerverwaltung', link: './datenaustausch/' }
					]
				},
                  
				{ text: 'Kataloge', link: '/kataloge/', collapsed: true,  items:
					[
						{ text: 'Fächer', link: './faecher/' },
						{ text: 'Förderschwerpunkte', link: './foerderschwerpunkte/' },
						{ text: 'Jahrgänge', link: './jahrgaenge/' },
						{ text: 'Religionen', link: './religionen/' }
					]
				},
		
				{ text: 'Schüler', link: '/schueler/', collapsed: true,  items:
					[
						{ text: 'Individualdaten', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' }
					]	
				},
        
				{ text: 'Lehrkräfte', link: '/lehrer/', collapsed: true,  items:
					[
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' }
					]	
				},
        
				{ text: 'Klassen', link: '/klassen/', collapsed: true,  items:
					[
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' }
					]	
				},
        
				{ text: 'Kurse', link: '/kurse/', collapsed: true,  items:
					[
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' }
					]	
				},
        
				{ text: 'Oberstufe', link: '/gost/', collapsed: true,  items:
					[
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' }
					]	 
				},
        
				{ text: 'Statistik', link: '/statistik/', collapsed: true,  items:
					[
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' },
						{ text: '', link: './/' }
					]	 
				
				}

            ]
        }
    ]
}
}
};

