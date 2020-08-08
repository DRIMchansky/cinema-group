export const navigation = [
  {
    primaryTitle: 'Сеть кинотеатров',
    primaryTitleHref: '/cinema',
    cities: [
      {
        city: 'Сыктывкар',
        links: [
          { branch: '«РубЛион Синема»', name: 'ТРК «РубликЪ»', href: '/' },
          { branch: '«РубЛион Синема»', name: 'ТРЦ «Парма»', href: '/' },
        ],
      },
      { city: 'Котлас', links: [{ branch: '«Рублион Синема»', name: 'ТРЦ «Столица»', href: '/' }] },
    ],
  },
  {
    primaryTitle: 'Сеть игровых центров',
    primaryTitleHref: '/game',
    cities: [
      {
        city: 'Сыктывкар',
        links: [
          { branch: 'Игротека', name: 'ТРК «РубликЪ»', href: '/' },
          { branch: 'Игротека', name: 'ТРЦ «Июнь»', href: '/' },
          { branch: 'Игротека «Kids Club»', name: 'ТРЦ «Парма»', href: '/' },
        ],
      },
      { city: 'Котлас', links: [{ branch: 'Игротека', name: 'ТРЦ «Столица»', href: '/' }] },
    ],
  },
  {
    primaryTitle: 'Сеть боулинг центров',
    primaryTitleHref: '/bowling',
    cities: [
      {
        city: 'Сыктывкар',
        links: [
          { branch: 'Боулинг-центр', name: 'ТРЦ «Июнь»', href: '/' },
          { branch: 'Боулинг-центр', name: 'ТРК «РубликЪ»', href: '/' },
        ],
      },
    ],
  },
  {
    primaryTitle: 'Сеть кафе',
    primaryTitleHref: '/cafe',
    cities: [
      {
        city: 'Сыктывкар',
        links: [
          { branch: 'Кафе «РубЛион»', name: 'ТРЦ «Июнь»', href: '/' },
          { branch: 'Кафе*Клуб*Караоке «РубЛион»', name: 'ТРК «РубликЪ»', href: '/' },
        ],
      },
    ],
  },
]
