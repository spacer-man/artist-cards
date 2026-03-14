interface IFact {
    icon: string,
    title: string,
    text: string,
    colors: Array<string>,
}

interface ICardData {
    images: Array<string>,
    facts: Array<IFact>,
}


export const doraData: ICardData = {
  images: [
    '/images/dora/0.jpg',
    '/images/dora/1.jpg',
    '/images/dora/2.jpg',
    '/images/dora/3.png',
    '/images/dora/4.jpg',
  ],
  facts: [
    {
      icon: '🎸',
      title: 'Начало пути',
      text: 'Дора начала заниматься музыкой в 15 лет',
      colors: ['#ff69b4', '#ff1493'],
    },
    {
      icon: '💖',
      title: 'Настоящее имя',
      text: 'Настоящее имя — Дарья Шиханова',
      colors: ['#ff1493', '#ff69b4'],
    },
    {
      icon: '🌟',
      title: 'День рождения',
      text: 'Родилась 30 ноября 1999 в Саратове',
      colors: ['#ffd700', '#ffaa00'],
    },
    {
      icon: '🎤',
      title: 'Жанр',
      text: 'Популяризировала кьют-рок в России',
      colors: ['#9b59b6', '#8e44ad'],
    },
    {
      icon: '✨',
      title: 'Главный хит',
      text: 'Хит «Дора-дура» — миллионы прослушиваний',
      colors: ['#00ced1', '#4ecdc4'],
    },
  ],
}

export const photoColorSets = [
  ['#ff69b4', '#ff1493', '#9b59b6'],
  ['#ff1493', '#ff69b4', '#ffd700'],
  ['#9b59b6', '#00ced1', '#ff69b4'],
  ['#ff6b6b', '#ff69b4', '#4ecdc4'],
  ['#4ecdc4', '#00ced1', '#ffd700'],
]
