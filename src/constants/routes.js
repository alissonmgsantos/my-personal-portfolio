import locale from '../locale';

const routes = [
  {
    pt: [
      { name: locale['pt'].home, path: '#home' },
      { name: locale['pt'].about, path: '#about' },
      { name: locale['pt'].experiences, path: '#experience' },
      { name: locale['pt'].portfolio, path: '#portfolio' },
    ],
    en: [
      { name: locale['en'].home, path: '#home' },
      { name: locale['en'].about, path: '#about' },
      { name: locale['en'].experiences, path: '#experience' },
      { name: locale['en'].portfolio, path: '#portfolio' },
    ],
  },
];
export default routes;
