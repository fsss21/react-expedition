import { ru } from './ru';
import { en } from './en';

export const translations = {
  ru: {
    ...ru,
    accessibilityToggle: 'Версия для\nслабовидящих',
    accessibilityNormal: 'Обычная версия\nприложения',
    catalog: 'каталог\nэкспонатов',
    audioguide: 'аудиогид\nпо приложению'
  },
  en: {
    ...en,
    accessibilityToggle: 'Visually impaired\nversion',
    accessibilityNormal: 'Normal\nversion',
    catalog: 'catalog\nof exhibits',
    audioguide: 'audio guide\nof the app'
  }
};

export const operationStyles = {
  novosibirsk: {
    position: 'absolute',
    bottom: '24%',
    left: '3%',
    width: '450px',
    height: '110px',
    cursor: 'pointer'
  },
  krasin: {
    position: 'absolute',
    top: '44%',
    left: '12%',
    width: '280px',
    height: '130px',
    cursor: 'pointer'
  },
  frank: {
    position: 'absolute',
    bottom: '22%',
    left: '29%',
    width: '320px',
    height: '130px',
    cursor: 'pointer'
  },
  northern: {
    position: 'absolute',
    top: '43%',
    left: '34%',
    width: '330px',
    height: '160px',
    cursor: 'pointer'
  },
  otto: {
    position: 'absolute',
    bottom: '22%',
    right: '27%',
    width: '390px',
    height: '125px',
    cursor: 'pointer'
  },
  cheluskin: {
    position: 'absolute',
    top: '44%',
    right: '22%',
    width: '320px',
    height: '170px',
    cursor: 'pointer'
  },
  vodopyanov: {
    position: 'absolute',
    bottom: '19%',
    right: '9%',
    width: '300px',
    height: '150px',
    cursor: 'pointer'
  },
  papanin: {
    position: 'absolute',
    bottom: '5%',
    right: '2%',
    width: '475px',
    height: '110px',
    cursor: 'pointer'
  }
};
