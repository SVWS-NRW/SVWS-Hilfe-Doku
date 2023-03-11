module.exports = {

  title: 'SVWS Hilfe',
  description: 'Hilfen SVWS-Server NRW',
  themeConfig: {

    sidebar: {



  '/':
        [
          {
                text: '',
                items:
                [
                  { text: 'Schule', link: '/schule/index.md', collapsed: true,  items:
			[
	                  { text: 'Datenaustausch', link: './benutzerverwaltung/index.md' },
        	          { text: 'Benutzerverwaltung', link: './datenaustausch/index.md' }
			]
		  },
                  { text: 'Kataloge', link: '/kataloge/index.md', collapsed: true,  items:

			 [
                          { text: 'Förderschwerpunkte', link: './katrderschwerpunkte' },
                          { text: 'Jahrgänge', link: './katrgaenge' },
                          { text: 'Religionen', link: './religionen' }
                         ]

		   },
                  { text: 'Schüler', link: '/schueler/' },
                  { text: 'Lehrkräfte', link: '/lehrer/' },
                  { text: 'Klassen', link: '/klassen/' },
                  { text: 'Kurse', link: '/kurse/' },
                  { text: 'Oberstufe', link: '/gost/' },
                  { text: 'Statistik', link: '/statistik/' }

                ]
          }
        ]



    }
  }
};

