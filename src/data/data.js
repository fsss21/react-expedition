import { ru } from './ru';
import { en } from './en';

export const translations = {
  ru: {
    ...ru,
    accessibilityToggle: 'Версия для\nслабовидящих',
    accessibilityNormal: 'Обычная версия\nприложения',
    catalog: 'каталог\nэкспонатов',
    audioguide: 'аудиогид\nпо приложению',
    // Добавленные переводы для кнопок
    buttonHistory: 'исторический обзор',
    buttonPersonali: 'персоналии',
    buttonFilms: 'фильмы\nи книги',
    buttonGames: 'игры',
    // history
    sectionHistoryTitle: 'ИСТОРИЧЕСКИЙ ОБЗОР',
    learnMore: 'узнать подробнее',

    tabPhoto: 'фото',
    tabVideo: 'видео-ролики',
    tabAudio: 'аудиоистории',

    pilots: 'летчики',
    engineers: 'инженеры',
    researchers: 'исследователи',

    mediaTitle: 'Фильмы и книги',
    tabFilms: 'Фильмы',
    tabAudiobooks: 'Аудиокниги',
    tabLectures: 'Лекции',
    tabBooks: 'Книги',

    tabPuzzles: 'пазлы',
    tabCrossword: 'кроссворд',
    tabQuiz: 'викторина',

    tabBiography: 'Биография',
    tabAchievements: 'Достижения',
    tabQuote: 'Цитата',
    tabGallery: 'Галерея',

    puzzlesProgress: 'деталей',
    crosswordProgress: 'угадано',
    quizProgress: 'верных ответов',
    selectGame: 'выберите игру',

    backToPuzzleSelection: '← Выбрать другой пазл',
    showHint: 'Открыть подсказку',
    hideHint: 'Убрать подсказку',
    hintImageAlt: 'Подсказка',

    difficultyTitle: 'уровень сложности',
    startGame: 'Начать игру'
  },
  en: {
    ...en,
    accessibilityToggle: 'Visually impaired\nversion',
    accessibilityNormal: 'Normal\nversion',
    catalog: 'catalog\nof exhibits',
    audioguide: 'audio guide\nof the app',
    // Added button translations
    buttonHistory: 'historical overview',
    buttonPersonali: 'personages',
    buttonFilms: 'films\nand books',
    buttonGames: 'games',
    // history
    sectionHistoryTitle: 'HISTORICAL OVERVIEW',
    learnMore: 'learn more',

    tabPhoto: 'photos',
    tabVideo: 'videos',
    tabAudio: 'audio stories',

    pilots: 'pilots',
    engineers: 'engineers',
    researchers: 'researchers',

    mediaTitle: 'Films and Books',
    tabFilms: 'Films',
    tabAudiobooks: 'Audiobooks',
    tabLectures: 'Lectures',
    tabBooks: 'Books',

    tabPuzzles: 'puzzles',
    tabCrossword: 'crossword',
    tabQuiz: 'quiz',

    tabBiography: 'Biography',
    tabAchievements: 'Achievements',
    tabQuote: 'Quote',
    tabGallery: 'Gallery',

    puzzlesProgress: 'pieces',
    crosswordProgress: 'guessed',
    quizProgress: 'correct answers',
    selectGame: 'choose a game',

    backToPuzzleSelection: '← Choose another puzzle',
    showHint: 'Show hint',
    hideHint: 'Hide hint',
    hintImageAlt: 'Hint',

    difficultyTitle: 'difficulty level',
    startGame: 'Start Game'
  }
};

export const operationStyles = {
  otto: {
    position: 'absolute',
    top: '38%',
    left: '4%',
    width: '400px',
    height: '260px',
    cursor: 'pointer',
  },

  cheluskin: {
    position: 'absolute',
    top: '38%',
    left: '30%',
    width: '520px',
    height: '170px',
    cursor: 'pointer',
  },

  vodopyanov: {
    position: 'absolute',
    top: '38%',
    right: '10%',
    width: '510px',
    height: '240px',
    cursor: 'pointer',
  },
};
