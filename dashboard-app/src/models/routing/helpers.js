//-----------  Definitions  -----------//

export const baseLinkTabs = ('local' === process.env.MIRO_ENV || 'dev' === process.env.MIRO_ENV ) ? [
  {
    title: 'My Studies',
    path: '/studies',
  },
  {
    title: 'Batteries',
    path: '/batteries',
  },
  {
    title: 'Questionnaires',
    path: '/questionnaires',
  },
] : [
  {
    title: 'My Studies',
    path: '/studies',
  },
  /* {
    title: 'Batteries',
    path: '/batteries',
  }, */
];